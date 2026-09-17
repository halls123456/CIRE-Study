/* Question Bank Explorer & Search Engine */
(function() {
  let allQuestions = [];
  let filteredQuestions = [];
  let currentPage = 1;
  const PAGE_SIZE = 25;

  const CIRE_BANK = {
    init() {
      // Gather all active questions
      allQuestions = [];
      for (let e = 1; e <= 9; e++) {
        const qList = window['CIRE_QUESTIONS_E' + e] || [];
        allQuestions.push(...qList);
      }
      console.log('BankViewer loaded total questions:', allQuestions.length);

      this.populateElementSelects();
      this.search();
    },

    populateElementSelects() {
      const elemSelect = document.getElementById('bankElementFilter');
      if (!elemSelect || !window.CIRE_MANIFEST) return;

      elemSelect.innerHTML = `<option value="all">All 9 Elements (${allQuestions.length.toLocaleString()} Questions)</option>` +
        window.CIRE_MANIFEST.elements.map(e => `
          <option value="${e.id}">Element ${e.id}: ${e.shortTitle} (${e.bankCount} Qs)</option>
        `).join('');
    },

    search() {
      const keyword = (document.getElementById('bankSearchInput').value || '').toLowerCase().trim();
      const elemFilter = document.getElementById('bankElementFilter').value;
      const cogFilter = document.getElementById('bankCogFilter').value;
      const statusFilter = document.getElementById('bankStatusFilter').value;

      const answers = window.CIRE_STORAGE.getAnswers();
      const flagged = window.CIRE_STORAGE.getFlagged();

      filteredQuestions = allQuestions.filter(q => {
        // Element filter
        if (elemFilter !== 'all' && q.element !== parseInt(elemFilter)) return false;

        // Cog filter
        if (cogFilter !== 'all' && q.cognitiveLevel !== cogFilter) return false;

        // Status filter
        if (statusFilter !== 'all') {
          const rec = answers[q.id];
          const isFlg = flagged.has(q.id);
          if (statusFilter === 'unseen' && rec !== undefined) return false;
          if (statusFilter === 'correct' && (!rec || !rec.isCorrect)) return false;
          if (statusFilter === 'incorrect' && (!rec || rec.isCorrect)) return false;
          if (statusFilter === 'flagged' && !isFlg) return false;
        }

        // Keyword search
        if (keyword) {
          const matchQ = q.question.toLowerCase().includes(keyword);
          const matchExp = q.explanation.toLowerCase().includes(keyword);
          const matchSub = (q.subOutcome + ' ' + q.subOutcomeTitle).toLowerCase().includes(keyword);
          const matchOpts = q.options.some(o => o.toLowerCase().includes(keyword));
          if (!matchQ && !matchExp && !matchSub && !matchOpts) return false;
        }

        return true;
      });

      currentPage = 1;
      this.renderResults();
    },

    resetFilters() {
      document.getElementById('bankSearchInput').value = '';
      document.getElementById('bankElementFilter').value = 'all';
      document.getElementById('bankCogFilter').value = 'all';
      document.getElementById('bankStatusFilter').value = 'all';
      this.search();
    },

    renderResults() {
      const total = filteredQuestions.length;
      document.getElementById('bankResultsCount').textContent = `Showing ${Math.min(PAGE_SIZE, total)} of ${total.toLocaleString()} questions`;

      this.renderPagination();

      const container = document.getElementById('bankQuestionsList');
      if (total === 0) {
        container.innerHTML = `<div class="bank-q-card" style="text-align: center; color: var(--text-secondary); padding: 3rem;">No questions match your current search criteria. Try clearing search filters.</div>`;
        return;
      }

      const start = (currentPage - 1) * PAGE_SIZE;
      const pageItems = filteredQuestions.slice(start, start + PAGE_SIZE);
      const letters = ['A', 'B', 'C', 'D'];
      const flagged = window.CIRE_STORAGE.getFlagged();
      const answers = window.CIRE_STORAGE.getAnswers();

      container.innerHTML = pageItems.map((q, pIdx) => {
        const globalNum = start + pIdx + 1;
        const isFlg = flagged.has(q.id);
        const ansRecord = answers[q.id];
        let statusBadge = '';
        if (ansRecord) {
          statusBadge = ansRecord.isCorrect
            ? `<span class="badge badge-success">Previously Correct</span>`
            : `<span class="badge badge-danger">Previously Incorrect</span>`;
        }

        return `
          <div class="bank-q-card" id="bcard_${q.id}">
            <div class="bank-q-header">
              <div class="question-meta-tags">
                <span class="badge badge-element">#${globalNum} • Element ${q.element}</span>
                <span class="badge badge-sub">Outcome ${q.subOutcome}</span>
                <span class="badge badge-cog">${q.cognitiveLevel}</span>
                ${statusBadge}
              </div>
              <button class="btn btn-sm btn-outline" onclick="window.CIRE_BANK.toggleFlag('${q.id}')">
                <span>${isFlg ? '🚩 Flagged' : '🏳️ Flag'}</span>
              </button>
            </div>

            <div class="bank-q-text">${q.question}</div>

            <div class="bank-q-options">
              ${q.options.map((opt, oIdx) => `
                <div class="bank-opt" id="bopt_${q.id}_${oIdx}">
                  <strong>${letters[oIdx]}.</strong> ${opt}
                </div>
              `).join('')}
            </div>

            <div style="display: flex; gap: 0.75rem; align-items: center; margin-top: 1rem;">
              <button class="btn btn-sm btn-secondary" onclick="window.CIRE_BANK.toggleAnswer('${q.id}', ${q.correct})">
                <span>💡 Reveal Answer &amp; Explanation</span>
              </button>
            </div>

            <div class="bank-q-explanation" id="bexp_${q.id}" style="display: none;">
              <strong>Correct Answer: ${letters[q.correct]}</strong><br>
              <strong>Explanation:</strong> ${window.CIRE_QUESTION_BANK.explanationHTML(q)}
            </div>
          </div>
        `;
      }).join('');
    },

    toggleAnswer(qId, correctIdx) {
      const expBox = document.getElementById(`bexp_${qId}`);
      const optBox = document.getElementById(`bopt_${qId}_${correctIdx}`);
      if (!expBox) return;

      if (expBox.style.display === 'none') {
        expBox.style.display = 'block';
        if (optBox) optBox.classList.add('correct-revealed');
      } else {
        expBox.style.display = 'none';
        if (optBox) optBox.classList.remove('correct-revealed');
      }
    },

    toggleFlag(qId) {
      window.CIRE_STORAGE.toggleFlag(qId);
      this.renderResults();
    },

    renderPagination() {
      const totalPages = Math.ceil(filteredQuestions.length / PAGE_SIZE) || 1;
      const html = `
        <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="window.CIRE_BANK.goToPage(${currentPage - 1})">« Prev</button>
        <span style="padding: 0 0.5rem; font-weight: 600;">Page ${currentPage} of ${totalPages}</span>
        <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="window.CIRE_BANK.goToPage(${currentPage + 1})">Next »</button>
      `;
      document.getElementById('bankPaginationTop').innerHTML = html;
      document.getElementById('bankPaginationBottom').innerHTML = html;
    },

    goToPage(pg) {
      const totalPages = Math.ceil(filteredQuestions.length / PAGE_SIZE) || 1;
      if (pg >= 1 && pg <= totalPages) {
        currentPage = pg;
        this.renderResults();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  window.CIRE_BANK = CIRE_BANK;
})();
