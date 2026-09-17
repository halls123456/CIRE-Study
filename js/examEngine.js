/* Independent Mock Exam Simulation Engine */
(function() {
  const WEIGHTS = {
    1: 11,
    2: 11,
    3: 17,
    4: 6,
    5: 9,
    6: 13,
    7: 21,
    8: 6,
    9: 16
  };
  const TOTAL_QS = 110;
  const DURATION_SECONDS = 7200; // 2 hours = 120 minutes

  let examQuestions = [];
  let currentIndex = 0;
  let userAnswers = {}; // { [index]: selectedOptionIndex }
  let flaggedIndices = new Set();
  let timerInterval = null;
  let timeRemaining = DURATION_SECONDS;
  let startTime = null;
  let examFinished = false;

  const CIRE_EXAM = {
    init() {
      this.renderWeightingTable();
      this.bindKeyboardShortcuts();
    },

    renderWeightingTable() {
      const tbody = document.getElementById('examWeightingTableBody');
      if (!tbody || !window.CIRE_MANIFEST) return;
      tbody.innerHTML = window.CIRE_MANIFEST.elements.map(e => `
        <tr>
          <td><span class="badge badge-element">Element ${e.id}</span></td>
          <td>${e.title}</td>
          <td>${e.examWeight} Qs</td>
        </tr>
      `).join('') + `
        <tr style="border-top: 2px solid var(--border-subtle); font-weight: bold;">
          <td colspan="2">Total Exam Parameters</td>
          <td>110 Questions (2 Hours)</td>
        </tr>
      `;
    },

    bindKeyboardShortcuts() {
      window.addEventListener('keydown', (e) => {
        const activeScreen = document.getElementById('mockExamActive');
        if (!activeScreen || activeScreen.style.display === 'none' || examFinished) return;

        if (['1', '2', '3', '4'].includes(e.key)) {
          this.selectOption(parseInt(e.key) - 1);
        } else if (['a', 'b', 'c', 'd'].includes(e.key.toLowerCase())) {
          const map = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
          this.selectOption(map[e.key.toLowerCase()]);
        } else if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'n') {
          this.navigate(1);
        } else if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'p') {
          this.navigate(-1);
        } else if (e.key.toLowerCase() === 'f') {
          this.toggleCurrentFlag();
        }
      });
    },

    startExam() {
      // Assemble exactly 110 questions strictly matching indicative weights
      examQuestions = [];
      for (let elemId = 1; elemId <= 9; elemId++) {
        const needed = WEIGHTS[elemId];
        const bank = window['CIRE_QUESTIONS_E' + elemId] || [];
        if (bank.length < needed) {
          alert('Question bank error: insufficient questions in Element ' + elemId);
          return;
        }
        // Shuffle bank and take needed
        const shuffled = [...bank].sort(() => 0.5 - Math.random());
        examQuestions.push(...shuffled.slice(0, needed));
      }

      // Shuffle the assembled 110 questions for authentic exam feel
      examQuestions.sort(() => 0.5 - Math.random());
      console.log('Assembled exam questions:', examQuestions.length);

      currentIndex = 0;
      userAnswers = {};
      flaggedIndices = new Set();
      timeRemaining = DURATION_SECONDS;
      startTime = Date.now();
      examFinished = false;

      // Switch screens
      document.getElementById('mockExamSetup').style.display = 'none';
      document.getElementById('mockExamResults').style.display = 'none';
      document.getElementById('mockExamActive').style.display = 'block';

      this.startTimer();
      this.renderNavigator();
      this.renderCurrentQuestion();
    },

    startTimer() {
      clearInterval(timerInterval);
      this.updateTimerDisplay();
      timerInterval = setInterval(() => {
        timeRemaining--;
        this.updateTimerDisplay();
        if (timeRemaining <= 0) {
          clearInterval(timerInterval);
          alert('Time has expired! Submitting your exam automatically.');
          this.finalizeSubmit();
        }
      }, 1000);
    },

    updateTimerDisplay() {
      const display = document.getElementById('examTimerDisplay');
      const box = document.getElementById('examTimerBox');
      if (!display) return;

      const hrs = Math.floor(timeRemaining / 3600);
      const mins = Math.floor((timeRemaining % 3600) / 60);
      const secs = timeRemaining % 60;
      display.textContent = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

      if (timeRemaining <= 300) {
        box.className = 'timer-box danger';
      } else if (timeRemaining <= 900) {
        box.className = 'timer-box warning';
      } else {
        box.className = 'timer-box';
      }
    },

    renderNavigator() {
      const grid = document.getElementById('examNavigatorGrid');
      if (!grid) return;
      grid.innerHTML = examQuestions.map((q, idx) => {
        let cls = 'nav-q-btn';
        if (idx === currentIndex) cls += ' current';
        if (userAnswers[idx] !== undefined) cls += ' answered';
        if (flaggedIndices.has(idx)) cls += ' flagged';
        return `<button class="${cls}" onclick="window.CIRE_EXAM.jumpTo(${idx})">${idx + 1}</button>`;
      }).join('');
    },

    renderCurrentQuestion() {
      const q = examQuestions[currentIndex];
      if (!q) return;

      document.getElementById('examProgressIndicator').textContent = `Question ${currentIndex + 1} of ${TOTAL_QS}`;
      document.getElementById('examQBadge').textContent = `Q ${currentIndex + 1}`;
      document.getElementById('examQElement').textContent = `Element ${q.element}`;
      document.getElementById('examQSub').textContent = `Outcome ${q.subOutcome}`;
      document.getElementById('examQCog').textContent = q.cognitiveLevel;
      document.getElementById('examQText').textContent = q.question;

      // Flag button state
      const isFlagged = flaggedIndices.has(currentIndex);
      document.getElementById('flagIcon').textContent = isFlagged ? '🚩' : '🏳️';
      document.getElementById('flagText').textContent = isFlagged ? 'Flagged' : 'Flag for Review';
      document.getElementById('examFlagBtn').className = isFlagged ? 'btn btn-sm btn-outline btn-warning active' : 'btn btn-sm btn-outline';

      // Render Options
      const letters = ['A', 'B', 'C', 'D'];
      const container = document.getElementById('examQOptions');
      container.innerHTML = q.options.map((optText, optIdx) => {
        const isSelected = userAnswers[currentIndex] === optIdx;
        return `
          <div class="option-card ${isSelected ? 'selected' : ''}" onclick="window.CIRE_EXAM.selectOption(${optIdx})">
            <span class="option-letter">${letters[optIdx]}</span>
            <span class="option-text">${optText}</span>
          </div>
        `;
      }).join('');

      // Nav buttons state
      document.getElementById('examPrevBtn').disabled = (currentIndex === 0);
      document.getElementById('examNextBtn').textContent = (currentIndex === TOTAL_QS - 1) ? 'Review & Submit →' : 'Next →';

      this.renderNavigator();
    },

    selectOption(optIdx) {
      userAnswers[currentIndex] = optIdx;
      this.renderCurrentQuestion();
    },

    navigate(direction) {
      if (direction === 1 && currentIndex === TOTAL_QS - 1) {
        this.confirmSubmit();
        return;
      }
      const target = currentIndex + direction;
      if (target >= 0 && target < TOTAL_QS) {
        currentIndex = target;
        this.renderCurrentQuestion();
      }
    },

    jumpTo(idx) {
      if (idx >= 0 && idx < TOTAL_QS) {
        currentIndex = idx;
        this.renderCurrentQuestion();
      }
    },

    toggleCurrentFlag() {
      if (flaggedIndices.has(currentIndex)) {
        flaggedIndices.delete(currentIndex);
      } else {
        flaggedIndices.add(currentIndex);
      }
      this.renderCurrentQuestion();
    },

    confirmSubmit() {
      const answeredCount = Object.keys(userAnswers).length;
      const unansweredCount = TOTAL_QS - answeredCount;
      const flaggedCount = flaggedIndices.size;

      document.getElementById('modalAnsweredCount').textContent = answeredCount;
      document.getElementById('modalUnansweredCount').textContent = unansweredCount;
      document.getElementById('modalFlaggedCount').textContent = flaggedCount;
      document.getElementById('submitModal').style.display = 'flex';
    },

    closeSubmitModal() {
      document.getElementById('submitModal').style.display = 'none';
    },

    finalizeSubmit() {
      clearInterval(timerInterval);
      this.closeSubmitModal();
      examFinished = true;

      const timeUsed = DURATION_SECONDS - timeRemaining;
      let totalCorrect = 0;

      // Element breakdown
      const elementStats = {};
      for (let e = 1; e <= 9; e++) {
        elementStats[e] = { correct: 0, total: 0 };
      }

      examQuestions.forEach((q, idx) => {
        const userChoice = userAnswers[idx];
        const isCorrect = (userChoice !== undefined && userChoice === q.correct);
        if (isCorrect) totalCorrect++;

        elementStats[q.element].total++;
        if (isCorrect) elementStats[q.element].correct++;

        // Record in central storage
        if (userChoice !== undefined) {
          window.CIRE_STORAGE.saveAnswer(q.id, userChoice, isCorrect);
        }
      });

      const percentage = (totalCorrect / TOTAL_QS) * 100;
      const passed = (percentage >= 60.0);

      // Save Exam Result to storage
      const resultData = {
        id: 'exam_' + Date.now(),
        date: new Date().toLocaleDateString(),
        score: totalCorrect,
        total: TOTAL_QS,
        percentage: Math.round(percentage * 10) / 10,
        passed: passed,
        timeUsedSeconds: timeUsed,
        elementStats: elementStats
      };
      window.CIRE_STORAGE.saveMockResult(resultData);

      this.renderResults(resultData);
    },

    renderResults(res) {
      document.getElementById('mockExamActive').style.display = 'none';
      document.getElementById('mockExamResults').style.display = 'block';

      const banner = document.getElementById('resultsBanner');
      banner.className = res.passed ? 'results-banner pass' : 'results-banner fail';
      document.getElementById('resultsGradeBadge').textContent = res.passed ? 'PASS' : 'FAIL';
      document.getElementById('resultsTitle').textContent = `Exam Result: ${res.passed ? 'Passed' : 'Not Passed'} (${res.percentage}%)`;
      document.getElementById('resultsSubtitle').textContent = res.passed
        ? "You met the app's 60% practice target."
        : 'Review your weak elements below and attempt another simulation.';

      document.getElementById('resScoreText').textContent = `${res.score} / ${res.total}`;
      document.getElementById('resPercentText').textContent = `${res.percentage}%`;

      const usedMins = Math.floor(res.timeUsedSeconds / 60);
      const usedSecs = res.timeUsedSeconds % 60;
      document.getElementById('resTimeUsedText').textContent = `${usedMins}m ${usedSecs}s`;
      document.getElementById('resStatusText').textContent = res.passed ? 'PASS (60%+)' : 'FAIL (<60%)';

      // Element Diagnostic Table
      const tableBody = document.getElementById('resultsElementTableBody');
      tableBody.innerHTML = window.CIRE_MANIFEST.elements.map(e => {
        const stat = res.elementStats[e.id] || { correct: 0, total: e.examWeight };
        const acc = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
        const passElem = (acc >= 60);
        return `
          <tr>
            <td><span class="badge badge-element">Element ${e.id}</span></td>
            <td><strong>${e.title}</strong></td>
            <td>${stat.correct} / ${stat.total}</td>
            <td><strong>${acc}%</strong></td>
            <td><span class="badge ${passElem ? 'badge-success' : 'badge-danger'}">${passElem ? 'Pass' : 'Review'}</span></td>
          </tr>
        `;
      }).join('');

      this.filterReview('all');
    },

    filterReview(filterType) {
      // Update filter buttons
      document.querySelectorAll('.review-filter-buttons .btn-filter').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(filterType)) btn.classList.add('active');
      });

      const listContainer = document.getElementById('resultsReviewList');
      const letters = ['A', 'B', 'C', 'D'];

      const filtered = examQuestions.map((q, idx) => {
        const userChoice = userAnswers[idx];
        const isCorrect = (userChoice !== undefined && userChoice === q.correct);
        const isFlagged = flaggedIndices.has(idx);
        return { q, idx, userChoice, isCorrect, isFlagged };
      }).filter(item => {
        if (filterType === 'incorrect') return !item.isCorrect;
        if (filterType === 'flagged') return item.isFlagged;
        return true;
      });

      if (filtered.length === 0) {
        listContainer.innerHTML = `<div style="text-align: center; padding: 2rem; color: var(--text-secondary);">No questions match this filter criteria.</div>`;
        return;
      }

      listContainer.innerHTML = filtered.map(item => {
        const { q, idx, userChoice, isCorrect } = item;
        return `
          <div class="review-card ${isCorrect ? 'correct' : 'incorrect'}">
            <div class="bank-q-header">
              <div class="question-meta-tags">
                <span class="badge badge-element">Q ${idx + 1} • Element ${q.element}</span>
                <span class="badge badge-sub">Outcome ${q.subOutcome}</span>
                <span class="badge badge-cog">${q.cognitiveLevel}</span>
                <span class="badge ${isCorrect ? 'badge-success' : 'badge-danger'}">${isCorrect ? 'Correct' : 'Incorrect'}</span>
              </div>
            </div>
            <h4 class="review-q-title">${q.question}</h4>
            <div class="review-opts">
              ${q.options.map((opt, oIdx) => {
                let cls = 'rev-opt';
                if (oIdx === q.correct) cls += ' opt-correct';
                if (userChoice === oIdx && !isCorrect) cls += ' opt-user-wrong';
                const tag = (oIdx === q.correct) ? ' (Correct Answer)' : (userChoice === oIdx ? ' (Your Answer)' : '');
                return `<div class="${cls}"><strong>${letters[oIdx]}.</strong> ${opt} <em>${tag}</em></div>`;
              }).join('')}
            </div>
            <div class="review-explanation">
              <strong>Regulatory Rationale:</strong> ${window.CIRE_QUESTION_BANK.explanationHTML(q)}
            </div>
          </div>
        `;
      }).join('');
    }
  };

  window.CIRE_EXAM = CIRE_EXAM;
})();
