/* Independent CIRE practice: Element 8 */
window.CIRE_QUESTIONS_E8 = [
  {
    "id": "CIRE-E8-001",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "What is the operational difference between an American-style option and a European-style option?",
    "options": [
      "An American-style option can be exercised at any time up to and including expiration; a European-style option can only be exercised on the expiration date",
      "American options cannot be sold before expiry; European options can be traded intraday",
      "American options apply only to commodities; European options apply only to equities",
      "American options are traded in US dollars; European options are traded in Euros"
    ],
    "correct": 0,
    "explanation": "American-style options allow early exercise on any business day up to expiration. European-style options may only be exercised at expiry.",
    "provenance": "retained-original"
  },
  {
    "id": "CIRE-E8-004",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Remember",
    "question": "What is the primary motivation of a portfolio manager who enters into a 'Hedging' transaction using derivatives?",
    "options": [
      "To maximize portfolio turnover and generate advisory commissions",
      "To reduce or eliminate the risk of adverse price movements in an existing portfolio holding",
      "To speculate on extreme short-term market volatility with high leverage",
      "To guarantee a higher ranking in national mutual fund performance tables"
    ],
    "correct": 1,
    "explanation": "Hedging involves taking an offsetting derivative position to protect against unfavorable price movements in an underlying asset.",
    "provenance": "retained-original"
  },
  {
    "id": "CIRE-E8-005",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Remember",
    "question": "A stock is trading at $58.00. What is the intrinsic value of a Call option with a strike price of $50.00 trading at a premium of $9.50?",
    "options": [
      "Intrinsic Value = $0.00; Time Value = $9.50",
      "Intrinsic Value = $9.50; Time Value = $0.00",
      "Intrinsic Value = $8.00; Time Value = $1.50 ($9.50 total premium - $8.00 intrinsic value)",
      "Intrinsic Value = $50.00; Time Value = $8.00"
    ],
    "correct": 2,
    "explanation": "Call Intrinsic Value = Market Price - Strike = $58 - $50 = $8.00. Time Value = Premium - Intrinsic Value = $9.50 - $8.00 = $1.50.",
    "provenance": "retained-original"
  },
  {
    "id": "CIRE-E8-006",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Remember",
    "question": "Which option Greek measures the sensitivity of an option's premium to changes in the implied volatility of the underlying security?",
    "options": [
      "Vega",
      "Delta",
      "Theta",
      "Rho"
    ],
    "correct": 0,
    "explanation": "Vega measures the rate of change in option price for a 1% change in implied volatility. (Delta measures price sensitivity, Theta measures time decay, Rho measures interest rate sensitivity).",
    "provenance": "retained-original"
  },
  {
    "id": "CIRE-E8-008",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Apply",
    "question": "An investor owns 1,000 shares of BCE Inc. purchased at $52.00 and sells 10 BCE Oct 55 Call options at a premium of $1.80. What strategy is this, and what is the primary objective?",
    "options": [
      "Bear Call Spread; designed to capture maximum profit if the stock plunges to $0",
      "Long Straddle; designed to profit from a massive volatility breakout in either direction",
      "Protective Put; designed to eliminate 100% of market downside risk",
      "Covered Call Writing; designed to generate additional income and provide modest downside protection in a neutral-to-moderately-bullish market"
    ],
    "correct": 3,
    "explanation": "A covered call involves selling call options against long stock to earn premium income, capping upside profit at the strike price while providing downside cushion equal to the premium.",
    "provenance": "retained-original"
  },
  {
    "id": "CIRE-E8-009",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Apply",
    "question": "An investor holding 500 shares of a bank stock at $80.00 buys 5 Oct 75 Put options at $2.00. What is the maximum loss per share for the investor down to zero?",
    "options": [
      "$75.00 per share",
      "$80.00 per share if the company goes bankrupt",
      "$2.00 per share",
      "$7.00 per share ($5.00 stock decline down to the $75 strike + $2.00 put premium)"
    ],
    "correct": 3,
    "explanation": "The put guarantees a sale at $75. Loss on stock = $80 - $75 = $5. Plus $2 premium paid = $7 maximum loss per share, regardless of how far the stock falls.",
    "provenance": "retained-original"
  },
  {
    "id": "CIRE-E8-010",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "When would an options trader establish a 'Long Straddle' (buying a Call and a Put with the same strike price and expiration)?",
    "options": [
      "When the trader wishes to lock in an annual dividend payout",
      "When the trader expects the stock to remain completely flat with zero price movement",
      "When the trader wants to write naked options to collect income",
      "When the trader expects high volatility and a substantial price movement, but is uncertain of the direction"
    ],
    "correct": 3,
    "explanation": "A long straddle profits from sharp price swings in either direction, exceeding the combined cost of the call and put premiums.",
    "provenance": "retained-original"
  },
  {
    "id": "CIRE-E8-N001",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Understand",
    "question": "What obligation does the writer of a physically settled put option take on if validly assigned?",
    "options": [
      "To sell the underlying at the strike price.",
      "To buy the underlying at the strike price.",
      "To pay only the original premium and nothing else.",
      "To choose whether to honour the assignment."
    ],
    "correct": 1,
    "explanation": "A put holder has the right to sell. Assignment imposes the corresponding purchase obligation on the writer.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus",
      "options"
    ]
  },
  {
    "id": "CIRE-E8-N002",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "A company pays a fixed interest rate and receives a floating rate under a swap on a stated notional amount. What is being exchanged?",
    "options": [
      "Ownership of the company's common shares.",
      "Guaranteed profits from every interest-rate change.",
      "Interest cash flows calculated under the contract.",
      "Physical delivery of all the company's assets."
    ],
    "correct": 2,
    "explanation": "An interest-rate swap exchanges cash-flow obligations. The notional is the calculation basis and is not necessarily exchanged.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus"
    ]
  },
  {
    "id": "CIRE-E8-N003",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Understand",
    "question": "An airline wants to reduce uncertainty about future fuel costs. Which transaction is a hedge in economic purpose?",
    "options": [
      "Buying unrelated stock options solely for profit.",
      "Increasing fuel exposure to double potential gains.",
      "Borrowing to speculate on an unrelated currency.",
      "Taking a derivatives position designed to offset rising fuel costs."
    ],
    "correct": 3,
    "explanation": "A hedge is linked to an existing or anticipated exposure. It can reduce risk without eliminating every mismatch or cost.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus",
      "options"
    ]
  },
  {
    "id": "CIRE-E8-N004",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Apply",
    "question": "A futures position loses $1,200 during daily mark-to-market. What does the loss imply for the margin account, ignoring other movements?",
    "options": [
      "The account is debited $1,200 and may need additional funds.",
      "The loss is ignored until expiry in all cases.",
      "The account is credited $1,200.",
      "The original margin was a fee that capped all losses."
    ],
    "correct": 0,
    "explanation": "Daily settlement transfers gains and losses through the account. Initial margin is collateral, not a maximum loss.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus"
    ]
  },
  {
    "id": "CIRE-E8-N005",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Understand",
    "question": "Why might a company choose an OTC forward over a listed contract?",
    "options": [
      "Every OTC contract is free of counterparty risk.",
      "It can negotiate terms that more closely match its specific exposure.",
      "OTC contracts always have greater liquidity.",
      "OTC contracts cannot impose payment obligations."
    ],
    "correct": 1,
    "explanation": "Customization can match amount, date and underlying needs. It comes with other considerations, including counterparty and liquidity risks.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus"
    ]
  },
  {
    "id": "CIRE-E8-N006",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "A trader buys a call and sells another call with the same expiry but a higher strike on the same underlying. What is the intended profile?",
    "options": [
      "An unlimited-profit risk-free arbitrage.",
      "A protective put on an existing stockholding.",
      "A bullish call spread with limited upside and limited initial net-premium risk.",
      "A bearish position that always profits when the underlying falls."
    ],
    "correct": 2,
    "explanation": "The short higher-strike call reduces the net premium but caps upside. At expiry the spread's payoff is bounded by the strike difference.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus",
      "options"
    ]
  },
  {
    "id": "CIRE-E8-N007",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Understand",
    "question": "What is the purpose of a derivatives risk disclosure statement in account opening?",
    "options": [
      "To guarantee that the dealer will cover all losses.",
      "To replace required account approval.",
      "To establish that every strategy is suitable.",
      "To explain material derivatives risks before the client undertakes the relevant activity."
    ],
    "correct": 3,
    "explanation": "Disclosure supports informed understanding. It does not replace approval, applicable suitability duties or risk controls.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus",
      "rules"
    ]
  },
  {
    "id": "CIRE-E8-N008",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Understand",
    "question": "A derivatives account is within its margin requirement but a proposed trade exceeds the approved credit or risk limit. May margin sufficiency alone justify the trade?",
    "options": [
      "No; margin compliance does not override other applicable trading limits.",
      "Yes; margin is the only possible constraint.",
      "Yes; if the client expects a profit.",
      "Yes; if the trade lasts less than one day."
    ],
    "correct": 0,
    "explanation": "Margin, credit and risk limits are separate controls. Meeting one does not grant permission to breach another.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus",
      "rules"
    ]
  }
];
