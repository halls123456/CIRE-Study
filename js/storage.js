/* LocalStorage Manager for CIRE */
(function() {
  const KEYS = {
    ANSWERS: 'cire_answers_v1',
    FLAGGED: 'cire_flagged_v1',
    MOCK_HISTORY: 'cire_mock_history_v1',
    FLASHCARDS: 'cire_flashcards_v1',
    THEME: 'cire_theme_v1'
  };

  const CIRE_STORAGE = {
    // Get all user answers: { [qId]: { selected: idx, isCorrect: bool, timestamp: num } }
    getAnswers() {
      try {
        return JSON.parse(localStorage.getItem(KEYS.ANSWERS) || '{}');
      } catch (e) {
        return {};
      }
    },

    saveAnswer(qId, selectedIdx, isCorrect) {
      const answers = this.getAnswers();
      answers[qId] = {
        selected: selectedIdx,
        isCorrect: isCorrect,
        timestamp: Date.now()
      };
      localStorage.setItem(KEYS.ANSWERS, JSON.stringify(answers));
      window.CIRE_APP && window.CIRE_APP.updateStats();
    },

    // Flagged questions (Set)
    getFlagged() {
      try {
        return new Set(JSON.parse(localStorage.getItem(KEYS.FLAGGED) || '[]'));
      } catch (e) {
        return new Set();
      }
    },

    toggleFlag(qId) {
      const flagged = this.getFlagged();
      if (flagged.has(qId)) {
        flagged.delete(qId);
      } else {
        flagged.add(qId);
      }
      localStorage.setItem(KEYS.FLAGGED, JSON.stringify(Array.from(flagged)));
      window.CIRE_APP && window.CIRE_APP.updateStats();
      return flagged.has(qId);
    },

    isFlagged(qId) {
      return this.getFlagged().has(qId);
    },

    // Mock Exam History
    getMockHistory() {
      try {
        return JSON.parse(localStorage.getItem(KEYS.MOCK_HISTORY) || '[]');
      } catch (e) {
        return [];
      }
    },

    saveMockResult(resultObj) {
      const history = this.getMockHistory();
      history.unshift(resultObj);
      localStorage.setItem(KEYS.MOCK_HISTORY, JSON.stringify(history));
      window.CIRE_APP && window.CIRE_APP.updateStats();
    },

    // Flashcards
    getFlashcardReviews() {
      try {
        return JSON.parse(localStorage.getItem(KEYS.FLASHCARDS) || '{}');
      } catch (e) {
        return {};
      }
    },

    setFlashcardRating(qId, rating) {
      const reviews = this.getFlashcardReviews();
      reviews[qId] = rating; // 'mastered' or 'review'
      localStorage.setItem(KEYS.FLASHCARDS, JSON.stringify(reviews));
    },

    // Theme
    getTheme() {
      return localStorage.getItem(KEYS.THEME) || 'dark';
    },

    setTheme(theme) {
      localStorage.setItem(KEYS.THEME, theme);
    },

    // Backup Export
    exportBackup() {
      const backup = {
        version: '1.0',
        exportedAt: new Date().toISOString(),
        answers: this.getAnswers(),
        flagged: Array.from(this.getFlagged()),
        mockHistory: this.getMockHistory(),
        flashcards: this.getFlashcardReviews()
      };
      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `cire_exam_progress_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    },

    // Backup Import
    importBackup(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (data.answers) localStorage.setItem(KEYS.ANSWERS, JSON.stringify(data.answers));
          if (data.flagged) localStorage.setItem(KEYS.FLAGGED, JSON.stringify(data.flagged));
          if (data.mockHistory) localStorage.setItem(KEYS.MOCK_HISTORY, JSON.stringify(data.mockHistory));
          if (data.flashcards) localStorage.setItem(KEYS.FLASHCARDS, JSON.stringify(data.flashcards));
          alert('Study data successfully imported!');
          window.location.reload();
        } catch (err) {
          alert('Failed to import backup file. Ensure it is a valid CIRE JSON export.');
        }
      };
      reader.readAsText(file);
    },

    resetAllData() {
      if (confirm('Are you sure you want to delete all study history, mock exam records, and bookmarks? This action cannot be undone.')) {
        localStorage.removeItem(KEYS.ANSWERS);
        localStorage.removeItem(KEYS.FLAGGED);
        localStorage.removeItem(KEYS.MOCK_HISTORY);
        localStorage.removeItem(KEYS.FLASHCARDS);
        alert('All study records reset.');
        window.location.reload();
      }
    }
  };

  window.CIRE_STORAGE = CIRE_STORAGE;
})();
