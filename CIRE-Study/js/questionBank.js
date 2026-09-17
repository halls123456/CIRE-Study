/* Shared active-bank access and lossless legacy progress views. */
(function () {
  const questions = Array.from({length: 9}, (_, i) => window['CIRE_QUESTIONS_E' + (i + 1)] || []).flat();
  const byId = new Map(questions.map(q => [q.id, q]));
  const aliases = window.CIRE_QUESTION_ALIASES || {};
  const resolve = id => byId.has(id) ? id : (aliases[id] && byId.has(aliases[id].id) ? aliases[id].id : null);
  const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  window.CIRE_QUESTION_BANK = {
    questions, byId, resolve,
    answers(raw) {
      const result = {};
      if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return result;
      for (const [oldId, record] of Object.entries(raw)) {
        const id = resolve(oldId);
        if (!id || !record || !Number.isInteger(record.selected) || record.selected < 0 || record.selected > 3) continue;
        const selected = byId.has(oldId) ? record.selected : aliases[oldId].options[record.selected];
        const timestamp = Number.isFinite(record.timestamp) ? record.timestamp : 0;
        if (!result[id] || timestamp > result[id].timestamp || (timestamp === result[id].timestamp && oldId === id)) {
          result[id] = {selected, isCorrect: selected === byId.get(id).correct, timestamp};
        }
      }
      return result;
    },
    flags(raw) {
      return new Set((Array.isArray(raw) ? raw : []).map(resolve).filter(Boolean));
    },
    reviews(raw) {
      const result = {};
      if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return result;
      for (const [oldId, rating] of Object.entries(raw)) {
        const id = resolve(oldId);
        if (id && ['mastered', 'review'].includes(rating) && (!result[id] || rating === 'review')) result[id] = rating;
      }
      return result;
    },
    explanationHTML(q) {
      const links = (q.references || []).map(key => {
        const source = (window.CIRE_SOURCES || {})[key];
        if (!source || !/^https:\/\//.test(source.url)) return '';
        return '<a href="' + escape(source.url) + '" target="_blank" rel="noopener noreferrer">' + escape(source.title) + '</a>';
      }).filter(Boolean);
      return escape(q.explanation) + (links.length ? '<br><small>Study references: ' + links.join(' · ') + '</small>' : '');
    }
  };
})();
