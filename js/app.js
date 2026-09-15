/* CIRE Master - Main App Controller */
(function() {
  let topicPracticeQuestions = [];
  let topicPracticeIndex = 0;
  let topicPracticeScore = 0;

  const CIRE_APP = {
    init() {
      console.log('Initializing CIRE Master Application...');
      this.initTheme();
      this.bindTabNavigation();
      this.populateTopicPracticeSelects();
      this.updateStats();

      // Initialize Sub-Engines
      if (window.CIRE_EXAM) window.CIRE_EXAM.init();
      if (window.CIRE_BANK) window.CIRE_BANK.init();
      if (window.CIRE_CARDS) window.CIRE_CARDS.init();
    },

    initTheme() {
      const savedTheme = window.CIRE_STORAGE.getTheme();
      document.body.className = (savedTheme === 'light') ? 'theme-light' : 'theme-dark';
      document.getElementById('themeIcon').textContent = (savedTheme === 'light') ? '🌙' : '☀️';

      document.getElementById('themeToggleBtn').addEventListener('click', () => {
        const isDark = document.body.classList.contains('theme-dark');
        const newTheme = isDark ? 'light' : 'dark';
        document.body.className = isDark ? 'theme-light' : 'theme-dark';
        document.getElementById('themeIcon').textContent = isDark ? '🌙' : '☀️';
        window.CIRE_STORAGE.setTheme(newTheme);
      });
    },

    bindTabNavigation() {
      const tabs = document.querySelectorAll('.nav-tab');
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const targetTab = tab.getAttribute('data-tab');
          this.switchTab(targetTab);
        });
      });
    },

    switchTab(tabId) {
      document.querySelectorAll('.nav-tab').forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-tab') === tabId);
      });

      document.querySelectorAll('.tab-view').forEach(v => {
        v.classList.remove('active');
      });

      const view = document.getElementById('view-' + tabId);
      if (view) {
        view.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      this.updateStats();
    },

    updateStats() {
      if (!window.CIRE_MANIFEST) return;

      const answers = window.CIRE_STORAGE.getAnswers();
      const flagged = window.CIRE_STORAGE.getFlagged();
      const mockHistory = window.CIRE_STORAGE.getMockHistory();

      const answeredKeys = Object.keys(answers);
      const answeredCount = answeredKeys.length;
      let correctCount = 0;
      answeredKeys.forEach(k => {
        if (answers[k] && answers[k].isCorrect) correctCount++;
      });

      const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
      const totalBank = 3000;

      // Header Progress
      document.getElementById('headerProgressText').textContent = `${answeredCount.toLocaleString()} / ${totalBank.toLocaleString()}`;

      // Dashboard Metrics
      document.getElementById('statAnswered').textContent = answeredCount.toLocaleString();
      document.getElementById('statRemaining').textContent = `${(totalBank - answeredCount).toLocaleString()} remaining`;
      document.getElementById('statAccuracy').textContent = `${accuracy}%`;
      document.getElementById('statAccuracyDetail').textContent = `${correctCount.toLocaleString()} correct answers`;
      document.getElementById('statMockExams').textContent = mockHistory.length;

      if (mockHistory.length > 0) {
        const best = Math.max(...mockHistory.map(m => m.percentage));
        document.getElementById('statBestMock').textContent = `Best score: ${best}%`;
      } else {
        document.getElementById('statBestMock').textContent = 'Best score: None';
      }

      document.getElementById('statFlagged').textContent = flagged.size;

      // Readiness Score Calculation (combines coverage, accuracy, and mock exams)
      // Readiness = (coverage * 0.3) + (accuracy * 0.5) + (mock bonus * 0.2)
      const coverageRate = (answeredCount / totalBank) * 100;
      const mockBonus = Math.min(100, mockHistory.length * 25);
      const readinessScore = Math.min(100, Math.round((coverageRate * 0.25) + (accuracy * 0.55) + (mockBonus * 0.20)));

      document.getElementById('readinessScore').textContent = `${readinessScore}%`;
      const readinessPath = document.getElementById('readinessPath');
      if (readinessPath) readinessPath.setAttribute('stroke-dasharray', `${readinessScore}, 100`);

      const statusEl = document.getElementById('readinessStatus');
      if (readinessScore >= 80) {
        statusEl.textContent = '🌟 Excellent! Exam Ready';
      } else if (readinessScore >= 60) {
        statusEl.textContent = '👍 On Track to Pass (60%+)';
      } else if (readinessScore >= 30) {
        statusEl.textContent = '📖 Building Foundation';
      } else {
        statusEl.textContent = '🚀 Begin Your Studies';
      }

      this.renderElementCards(answers);
    },

    renderElementCards(answers) {
      const grid = document.getElementById('elementCardsGrid');
      if (!grid || !window.CIRE_MANIFEST) return;

      grid.innerHTML = window.CIRE_MANIFEST.elements.map(e => {
        const bank = window['CIRE_QUESTIONS_E' + e.id] || [];
        let eAnswered = 0;
        let eCorrect = 0;

        bank.forEach(q => {
          if (answers[q.id]) {
            eAnswered++;
            if (answers[q.id].isCorrect) eCorrect++;
          }
        });

        const pct = eAnswered > 0 ? Math.round((eCorrect / eAnswered) * 100) : 0;
        const progressWidth = Math.round((eAnswered / bank.length) * 100);

        return `
          <div class="elem-card">
            <div>
              <div class="elem-card-header">
                <span class="elem-card-title">Element ${e.id}: ${e.title}</span>
                <span class="elem-card-weight">${e.examWeight} Indicative Qs</span>
              </div>
              <div class="elem-progress-bar-bg">
                <div class="elem-progress-bar-fill" style="width: ${progressWidth}%;"></div>
              </div>
              <div class="elem-card-stats">
                <span>Coverage: ${eAnswered} / ${bank.length} (${progressWidth}%)</span>
                <span>Accuracy: <strong>${pct}%</strong></span>
              </div>
            </div>
            <div class="elem-card-actions">
              <button class="btn btn-sm btn-primary" onclick="window.CIRE_APP.drillElement(${e.id})">Practice Element</button>
            </div>
          </div>
        `;
      }).join('');
    },

    drillElement(elemId) {
      this.switchTab('topic-practice');
      document.getElementById('practiceElementSelect').value = elemId;
      this.updateSubOutcomeSelect(elemId);
      this.startTopicSession();
    },

    populateTopicPracticeSelects() {
      const sel = document.getElementById('practiceElementSelect');
      if (!sel || !window.CIRE_MANIFEST) return;

      sel.innerHTML = window.CIRE_MANIFEST.elements.map(e => `
        <option value="${e.id}">Element ${e.id}: ${e.title} (${e.examWeight} Qs on Exam)</option>
      `).join('');

      sel.addEventListener('change', (ev) => {
        this.updateSubOutcomeSelect(ev.target.value);
      });

      this.updateSubOutcomeSelect(1);
    },

    updateSubOutcomeSelect(elemId) {
      const subSel = document.getElementById('practiceSubOutcomeSelect');
      const elem = window.CIRE_MANIFEST.elements.find(e => e.id === parseInt(elemId));
      if (!subSel || !elem) return;

      subSel.innerHTML = '<option value="all">All Sub-Outcomes in this Element</option>' +
        elem.subOutcomes.map(s => `
          <option value="${s.code}">${s.code} - ${s.title}</option>
        `).join('');
    },

    startTopicSession() {
      const elemId = parseInt(document.getElementById('practiceElementSelect').value);
      const subCode = document.getElementById('practiceSubOutcomeSelect').value;
      const countVal = document.getElementById('practiceCountSelect').value;
      const cogVal = document.getElementById('practiceCogSelect').value;

      const bank = window['CIRE_QUESTIONS_E' + elemId] || [];
      let candidates = bank.filter(q => {
        if (subCode !== 'all' && q.subOutcome !== subCode) return false;
        if (cogVal !== 'all' && q.cognitiveLevel !== cogVal) return false;
        return true;
      });

      if (candidates.length === 0) {
        alert('No questions match this specific sub-outcome and cognitive level.');
        return;
      }

      // Shuffle candidates
      candidates.sort(() => 0.5 - Math.random());
      const takeCount = (countVal === 'all') ? candidates.length : Math.min(parseInt(countVal), candidates.length);
      topicPracticeQuestions = candidates.slice(0, takeCount);
      topicPracticeIndex = 0;
      topicPracticeScore = 0;

      document.getElementById('practiceActiveContainer').style.display = 'block';
      document.getElementById('practiceTopicTitle').textContent = `Element ${elemId} Practice Session`;
      this.renderTopicQuestion();
    },

    renderTopicQuestion() {
      const q = topicPracticeQuestions[topicPracticeIndex];
      const card = document.getElementById('practiceQuestionCard');
      const letters = ['A', 'B', 'C', 'D'];

      document.getElementById('practiceProgress').textContent = `Question ${topicPracticeIndex + 1} of ${topicPracticeQuestions.length}`;
      const pct = topicPracticeIndex > 0 ? Math.round((topicPracticeScore / topicPracticeIndex) * 100) : 0;
      document.getElementById('practiceLiveScore').textContent = `${topicPracticeScore} / ${topicPracticeIndex} (${pct}%)`;

      card.innerHTML = `
        <div class="question-header">
          <div class="question-meta-tags">
            <span class="badge badge-element">Element ${q.element}</span>
            <span class="badge badge-sub">Outcome ${q.subOutcome}</span>
            <span class="badge badge-cog">${q.cognitiveLevel}</span>
          </div>
          <span class="q-index-badge">#${topicPracticeIndex + 1}</span>
        </div>
        <h3 class="question-text">${q.question}</h3>
        <div class="options-container" id="practiceOptionsBox">
          ${q.options.map((opt, oIdx) => `
            <div class="option-card" id="popt_${oIdx}" onclick="window.CIRE_APP.answerTopicQuestion(${oIdx})">
              <span class="option-letter">${letters[oIdx]}</span>
              <span class="option-text">${opt}</span>
            </div>
          `).join('')}
        </div>
        <div class="bank-q-explanation" id="practiceExpBox" style="display: none; margin-top: 1.5rem;">
          <div id="practiceVerdict" style="font-weight: 800; margin-bottom: 0.5rem;"></div>
          <strong>Regulatory Explanation:</strong> ${q.explanation}
          <div style="margin-top: 1rem; text-align: right;">
            <button class="btn btn-primary" onclick="window.CIRE_APP.nextTopicQuestion()">Next Question →</button>
          </div>
        </div>
      `;
    },

    answerTopicQuestion(chosenIdx) {
      const q = topicPracticeQuestions[topicPracticeIndex];
      const expBox = document.getElementById('practiceExpBox');
      const verdict = document.getElementById('practiceVerdict');
      if (!expBox || expBox.style.display === 'block') return; // already answered

      const isCorrect = (chosenIdx === q.correct);
      if (isCorrect) topicPracticeScore++;

      // Record in storage
      window.CIRE_STORAGE.saveAnswer(q.id, chosenIdx, isCorrect);

      // Highlight options
      for (let i = 0; i < 4; i++) {
        const el = document.getElementById(`popt_${i}`);
        if (el) {
          el.style.pointerEvents = 'none';
          if (i === q.correct) el.classList.add('selected', 'badge-success');
          if (i === chosenIdx && !isCorrect) el.classList.add('badge-danger');
        }
      }

      verdict.innerHTML = isCorrect 
        ? `<span style="color: #34d399;">✅ Correct! Well done.</span>` 
        : `<span style="color: #fb7185;">❌ Incorrect. Correct answer is option ${['A','B','C','D'][q.correct]}.</span>`;

      expBox.style.display = 'block';
    },

    nextTopicQuestion() {
      if (topicPracticeIndex < topicPracticeQuestions.length - 1) {
        topicPracticeIndex++;
        this.renderTopicQuestion();
      } else {
        const finalPct = Math.round((topicPracticeScore / topicPracticeQuestions.length) * 100);
        alert(`Practice session complete! You scored ${topicPracticeScore} out of ${topicPracticeQuestions.length} (${finalPct}%).`);
        document.getElementById('practiceActiveContainer').style.display = 'none';
        this.updateStats();
      }
    },

    endTopicSession() {
      document.getElementById('practiceActiveContainer').style.display = 'none';
      this.updateStats();
    },

    practiceFlagged() {
      this.switchTab('bank-explorer');
      document.getElementById('bankStatusFilter').value = 'flagged';
      window.CIRE_BANK.search();
    },

    startNewMockExam() {
      this.switchTab('mock-exam');
      document.getElementById('mockExamSetup').style.display = 'block';
      document.getElementById('mockExamActive').style.display = 'none';
      document.getElementById('mockExamResults').style.display = 'none';
    }
  };

  window.CIRE_APP = CIRE_APP;
  document.addEventListener('DOMContentLoaded', () => {
    CIRE_APP.init();
  });
})();
