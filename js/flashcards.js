/* Core Concepts Flashcard Engine */
(function() {
  let cardList = [];
  let cardIndex = 0;
  let isFlipped = false;

  const CIRE_CARDS = {
    init() {
      this.populateElementFilter();
      this.loadCards('all');
      this.bindKeyboardShortcuts();
    },

    populateElementFilter() {
      const sel = document.getElementById('flashcardElementSelect');
      if (!sel || !window.CIRE_MANIFEST) return;
      sel.innerHTML = '<option value="all">All 9 Syllabus Elements</option>' +
        window.CIRE_MANIFEST.elements.map(e => `
          <option value="${e.id}">Element ${e.id}: ${e.shortTitle}</option>
        `).join('');

      sel.addEventListener('change', (e) => {
        this.loadCards(e.target.value);
      });
    },

    bindKeyboardShortcuts() {
      window.addEventListener('keydown', (e) => {
        const view = document.getElementById('view-flashcards');
        if (!view || !view.classList.contains('active')) return;

        if (e.code === 'Space' || e.key === 'Enter') {
          e.preventDefault();
          this.flip();
        } else if (e.key === 'ArrowRight') {
          this.next();
        } else if (e.key === 'ArrowLeft') {
          this.prev();
        } else if (e.key === '1') {
          this.markReview();
        } else if (e.key === '2') {
          this.markMastered();
        }
      });
    },

    loadCards(elemFilter) {
      cardList = [];
      for (let e = 1; e <= 9; e++) {
        if (elemFilter === 'all' || parseInt(elemFilter) === e) {
          const bank = window['CIRE_QUESTIONS_E' + e] || [];
          cardList.push(...bank);
        }
      }
      // Shuffle cards for variety
      cardList.sort(() => 0.5 - Math.random());
      cardIndex = 0;
      isFlipped = false;
      this.renderCard();
    },

    renderCard() {
      const box = document.getElementById('flashcardBox');
      if (!box || cardList.length === 0) return;

      box.classList.remove('flipped');
      isFlipped = false;

      const q = cardList[cardIndex];
      document.getElementById('cardElementBadge').textContent = `Element ${q.element}: ${q.elementTitle}`;
      document.getElementById('cardOutcomeBadge').textContent = `Outcome ${q.subOutcome}`;
      document.getElementById('cardQuestionText').textContent = q.question;

      document.getElementById('cardAnswerText').textContent = q.options[q.correct];
      document.getElementById('cardExplanationText').innerHTML = window.CIRE_QUESTION_BANK.explanationHTML(q);
      document.getElementById('cardCounterText').textContent = `${cardIndex + 1} / ${cardList.length}`;
    },

    flip() {
      const box = document.getElementById('flashcardBox');
      if (!box) return;
      isFlipped = !isFlipped;
      box.classList.toggle('flipped', isFlipped);
    },

    next() {
      if (cardIndex < cardList.length - 1) {
        cardIndex++;
        this.renderCard();
      }
    },

    prev() {
      if (cardIndex > 0) {
        cardIndex--;
        this.renderCard();
      }
    },

    markMastered() {
      const q = cardList[cardIndex];
      if (q) window.CIRE_STORAGE.setFlashcardRating(q.id, 'mastered');
      this.next();
    },

    markReview() {
      const q = cardList[cardIndex];
      if (q) window.CIRE_STORAGE.setFlashcardRating(q.id, 'review');
      this.next();
    }
  };

  window.CIRE_CARDS = CIRE_CARDS;
})();
