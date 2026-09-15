/* CIRO CIRE Element 8 Question Bank - 165 Questions */
window.CIRE_QUESTIONS_E8 = [
  {
    "id": "CIRE-E8-001",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "American vs European Options",
    "cognitiveLevel": "Remember",
    "question": "What is the operational difference between an American-style option and a European-style option?",
    "options": [
      "An American-style option can be exercised at any time up to and including expiration; a European-style option can only be exercised on the expiration date",
      "American options cannot be sold before expiry; European options can be traded intraday",
      "American options apply only to commodities; European options apply only to equities",
      "American options are traded in US dollars; European options are traded in Euros"
    ],
    "correct": 0,
    "explanation": "American-style options allow early exercise on any business day up to expiration. European-style options may only be exercised at expiry."
  },
  {
    "id": "CIRE-E8-002",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Call Option Right",
    "cognitiveLevel": "Understand",
    "question": "An investor purchases one XYZ Oct 50 Call option at a premium of $3.50. What right does this contract grant to the buyer?",
    "options": [
      "The obligation to sell 100 shares of XYZ at $50.00 per share immediately",
      "The right to receive quarterly dividends directly from XYZ Corp",
      "The right to sell 100 shares of XYZ at $53.50 per share",
      "The right (but not the obligation) to purchase 100 shares of XYZ at $50.00 per share on or before the October expiration date"
    ],
    "correct": 3,
    "explanation": "A call option grants the holder the right to buy the underlying shares at the specified strike price ($50) prior to expiration."
  },
  {
    "id": "CIRE-E8-003",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures vs Forwards Cleared",
    "cognitiveLevel": "Apply",
    "question": "What is a primary distinction between an exchange-traded Futures contract and an Over-the-Counter (OTC) Forward contract?",
    "options": [
      "Futures have customized strike dates and contract sizes, whereas forwards are standardized",
      "Futures are standardized contracts cleared through a central clearinghouse (CDCC) with daily mark-to-market; forwards are customized bilateral agreements with counterparty credit risk",
      "Futures are illegal in Canada under provincial securities regulations",
      "Forwards require daily variation margin payments, whereas futures settle only at maturity"
    ],
    "correct": 1,
    "explanation": "Futures trade on organized exchanges with standardized terms and daily mark-to-market margin, eliminating counterparty risk. Forwards are non-standardized OTC contracts with counterparty risk."
  },
  {
    "id": "CIRE-E8-004",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Hedging Motivation",
    "cognitiveLevel": "Analyze",
    "question": "What is the primary motivation of a portfolio manager who enters into a 'Hedging' transaction using derivatives?",
    "options": [
      "To maximize portfolio turnover and generate advisory commissions",
      "To reduce or eliminate the risk of adverse price movements in an existing portfolio holding",
      "To speculate on extreme short-term market volatility with high leverage",
      "To guarantee a higher ranking in national mutual fund performance tables"
    ],
    "correct": 1,
    "explanation": "Hedging involves taking an offsetting derivative position to protect against unfavorable price movements in an underlying asset."
  },
  {
    "id": "CIRE-E8-005",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Intrinsic vs Time Value",
    "cognitiveLevel": "Remember",
    "question": "A stock is trading at $58.00. What is the intrinsic value of a Call option with a strike price of $50.00 trading at a premium of $9.50?",
    "options": [
      "Intrinsic Value = $0.00; Time Value = $9.50",
      "Intrinsic Value = $9.50; Time Value = $0.00",
      "Intrinsic Value = $8.00; Time Value = $1.50 ($9.50 total premium - $8.00 intrinsic value)",
      "Intrinsic Value = $50.00; Time Value = $8.00"
    ],
    "correct": 2,
    "explanation": "Call Intrinsic Value = Market Price - Strike = $58 - $50 = $8.00. Time Value = Premium - Intrinsic Value = $9.50 - $8.00 = $1.50."
  },
  {
    "id": "CIRE-E8-006",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Vega Greeks",
    "cognitiveLevel": "Understand",
    "question": "Which option Greek measures the sensitivity of an option's premium to changes in the implied volatility of the underlying security?",
    "options": [
      "Vega",
      "Delta",
      "Theta",
      "Rho"
    ],
    "correct": 0,
    "explanation": "Vega measures the rate of change in option price for a 1% change in implied volatility. (Delta measures price sensitivity, Theta measures time decay, Rho measures interest rate sensitivity)."
  },
  {
    "id": "CIRE-E8-007",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Montreal Exchange Derivatives",
    "cognitiveLevel": "Apply",
    "question": "On which exchange are Canadian exchange-traded stock options and bond futures officially listed and traded?",
    "options": [
      "Cboe Canada",
      "Toronto Stock Exchange (TSX)",
      "Bourse de Montr\u00e9al (Montreal Exchange - MX)",
      "Canadian Securities Exchange (CSE)"
    ],
    "correct": 2,
    "explanation": "The Bourse de Montr\u00e9al (MX) is Canada's dedicated financial derivatives exchange, where all exchange-traded options, index derivatives, and futures are listed."
  },
  {
    "id": "CIRE-E8-008",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Covered Call Writing",
    "cognitiveLevel": "Analyze",
    "question": "An investor owns 1,000 shares of BCE Inc. purchased at $52.00 and sells 10 BCE Oct 55 Call options at a premium of $1.80. What strategy is this, and what is the primary objective?",
    "options": [
      "Bear Call Spread; designed to capture maximum profit if the stock plunges to $0",
      "Long Straddle; designed to profit from a massive volatility breakout in either direction",
      "Protective Put; designed to eliminate 100% of market downside risk",
      "Covered Call Writing; designed to generate additional income and provide modest downside protection in a neutral-to-moderately-bullish market"
    ],
    "correct": 3,
    "explanation": "A covered call involves selling call options against long stock to earn premium income, capping upside profit at the strike price while providing downside cushion equal to the premium."
  },
  {
    "id": "CIRE-E8-009",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Protective Put Loss Floor",
    "cognitiveLevel": "Remember",
    "question": "An investor holding 500 shares of a bank stock at $80.00 buys 5 Oct 75 Put options at $2.00. What is the maximum loss per share for the investor down to zero?",
    "options": [
      "$75.00 per share",
      "$80.00 per share if the company goes bankrupt",
      "$2.00 per share",
      "$7.00 per share ($5.00 stock decline down to the $75 strike + $2.00 put premium)"
    ],
    "correct": 3,
    "explanation": "The put guarantees a sale at $75. Loss on stock = $80 - $75 = $5. Plus $2 premium paid = $7 maximum loss per share, regardless of how far the stock falls."
  },
  {
    "id": "CIRE-E8-010",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Long Straddle Strategy",
    "cognitiveLevel": "Understand",
    "question": "When would an options trader establish a 'Long Straddle' (buying a Call and a Put with the same strike price and expiration)?",
    "options": [
      "When the trader wishes to lock in an annual dividend payout",
      "When the trader expects the stock to remain completely flat with zero price movement",
      "When the trader wants to write naked options to collect income",
      "When the trader expects high volatility and a substantial price movement, but is uncertain of the direction"
    ],
    "correct": 3,
    "explanation": "A long straddle profits from sharp price swings in either direction, exceeding the combined cost of the call and put premiums."
  },
  {
    "id": "CIRE-E8-011",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Options Principal Approval",
    "cognitiveLevel": "Apply",
    "question": "Before an Approved Person can execute options trades for a client, who within the Investment Dealer must approve the Options Account Application?",
    "options": [
      "The head of the equity clearing department at CDS",
      "The firm's chief technology officer",
      "A designated Supervisory Principal / Branch Manager qualified as a Registered Options Principal (ROP)",
      "A hearing officer from the provincial securities commission"
    ],
    "correct": 2,
    "explanation": "Opening an options account requires prior review and written approval by a qualified supervisory principal / Registered Options Principal (ROP)."
  },
  {
    "id": "CIRE-E8-012",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Undermargined Options Ban",
    "cognitiveLevel": "Analyze",
    "question": "An Approved Person notices that a client's derivative account has fallen undermargined following an overnight market drop. The representative allows the client to enter new speculative derivative positions before meeting the margin deficit. What is the regulatory consequence?",
    "options": [
      "Permitted if the client promises to wire funds within 30 calendar days",
      "Permitted if the representative covers the margin loan out of personal salary",
      "Permitted provided the trades are executed on European-style index options",
      "Strictly prohibited; dealers cannot execute new transactions that increase risk in an undermargined derivative account, and must demand immediate margin or liquidate positions"
    ],
    "correct": 3,
    "explanation": "CIRO rules strictly prohibit trading in undermargined derivative accounts. No new positions that increase margin requirements may be opened until the call is satisfied."
  },
  {
    "id": "CIRE-E8-013",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Scenario: At Apex Capital Securities, Registered Representative is reviewing the portfolio of Liam Tremblay. What is the operational difference between an American-style option and a European-style option?",
    "options": [
      "An American-style option can be exercised at any time up to and including expiration; a European-style option can only be exercised on the expiration date",
      "American options cannot be sold before expiry; European options can be traded intraday",
      "American options are traded in US dollars; European options are traded in Euros",
      "American options apply only to commodities; European options apply only to equities"
    ],
    "correct": 0,
    "explanation": "American-style options allow early exercise on any business day up to expiration. European-style options may only be exercised at expiry. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  },
  {
    "id": "CIRE-E8-014",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "Compliance Case Study: An audit at Maple Leaf Wealth Partners evaluates a recent transaction in TD for client Sophie Bouchard. An investor purchases one XYZ Oct 50 Call option at a premium of $3.50. What right does this contract grant to the buyer?",
    "options": [
      "The right (but not the obligation) to purchase 100 shares of XYZ at $50.00 per share on or before the October expiration date",
      "The right to sell 100 shares of XYZ at $53.50 per share",
      "The obligation to sell 100 shares of XYZ at $50.00 per share immediately",
      "The right to receive quarterly dividends directly from XYZ Corp"
    ],
    "correct": 0,
    "explanation": "A call option grants the holder the right to buy the underlying shares at the specified strike price ($50) prior to expiration. (Ref: CIRE Syllabus outcome 8.2 - Futures, forwards, swaps, and contracts for difference (CFDs))."
  },
  {
    "id": "CIRE-E8-015",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Apply",
    "question": "Practical Application: In an advisory relationship between Beacon Securities Ltd. and client Rajesh Patel: What is a primary distinction between an exchange-traded Futures contract and an Over-the-Counter (OTC) Forward contract?",
    "options": [
      "Futures have customized strike dates and contract sizes, whereas forwards are standardized",
      "Forwards require daily variation margin payments, whereas futures settle only at maturity",
      "Futures are illegal in Canada under provincial securities regulations",
      "Futures are standardized contracts cleared through a central clearinghouse (CDCC) with daily mark-to-market; forwards are customized bilateral agreements with counterparty credit risk"
    ],
    "correct": 3,
    "explanation": "Futures trade on organized exchanges with standardized terms and daily mark-to-market margin, eliminating counterparty risk. Forwards are non-standardized OTC contracts with counterparty risk. (Ref: CIRE Syllabus outcome 8.3 - Uses of derivatives: hedging, speculation, and arbitrage)."
  },
  {
    "id": "CIRE-E8-016",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Analyze",
    "question": "Regulatory Review: During a supervisory compliance check at Laurentian Direct Brokers regarding Chloe Desjardins: What is the primary motivation of a portfolio manager who enters into a 'Hedging' transaction using derivatives?",
    "options": [
      "To guarantee a higher ranking in national mutual fund performance tables",
      "To speculate on extreme short-term market volatility with high leverage",
      "To reduce or eliminate the risk of adverse price movements in an existing portfolio holding",
      "To maximize portfolio turnover and generate advisory commissions"
    ],
    "correct": 2,
    "explanation": "Hedging involves taking an offsetting derivative position to protect against unfavorable price movements in an underlying asset. (Ref: CIRE Syllabus outcome 8.4 - Transactional elements: intrinsic value, time value, volatility, mark-to-market)."
  },
  {
    "id": "CIRE-E8-017",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Remember",
    "question": "Client Inquiry: Client Dmitri Ivanov contacts Great North Capital regarding holdings in CNR. A stock is trading at $58.00. What is the intrinsic value of a Call option with a strike price of $50.00 trading at a premium of $9.50?",
    "options": [
      "Intrinsic Value = $8.00; Time Value = $1.50 ($9.50 total premium - $8.00 intrinsic value)",
      "Intrinsic Value = $9.50; Time Value = $0.00",
      "Intrinsic Value = $50.00; Time Value = $8.00",
      "Intrinsic Value = $0.00; Time Value = $9.50"
    ],
    "correct": 0,
    "explanation": "Call Intrinsic Value = Market Price - Strike = $58 - $50 = $8.00. Time Value = Premium - Intrinsic Value = $9.50 - $8.00 = $1.50. (Ref: CIRE Syllabus outcome 8.5 - Listed vs. over-the-counter (OTC) derivative markets)."
  },
  {
    "id": "CIRE-E8-018",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "Scenario: At Pacific Crest Securities, Registered Representative is reviewing the portfolio of Amira Al-Mansoor. Which option Greek measures the sensitivity of an option's premium to changes in the implied volatility of the underlying security?",
    "options": [
      "Theta",
      "Vega",
      "Rho",
      "Delta"
    ],
    "correct": 1,
    "explanation": "Vega measures the rate of change in option price for a 1% change in implied volatility. (Delta measures price sensitivity, Theta measures time decay, Rho measures interest rate sensitivity). (Ref: CIRE Syllabus outcome 8.6 - Single and multi-legged strategies: covered calls, protective puts, spreads, straddles)."
  },
  {
    "id": "CIRE-E8-019",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Apply",
    "question": "Compliance Case Study: An audit at St. Lawrence Financial evaluates a recent transaction in SHOP for client Marcus Campbell. On which exchange are Canadian exchange-traded stock options and bond futures officially listed and traded?",
    "options": [
      "Bourse de Montr\u00e9al (Montreal Exchange - MX)",
      "Canadian Securities Exchange (CSE)",
      "Toronto Stock Exchange (TSX)",
      "Cboe Canada"
    ],
    "correct": 0,
    "explanation": "The Bourse de Montr\u00e9al (MX) is Canada's dedicated financial derivatives exchange, where all exchange-traded options, index derivatives, and futures are listed. (Ref: CIRE Syllabus outcome 8.7 - Administrative requirements: options agreements, risk disclosure statements)."
  },
  {
    "id": "CIRE-E8-020",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Analyze",
    "question": "Practical Application: In an advisory relationship between Trillium Investment Partners and client Helena Vance: An investor owns 1,000 shares of BCE Inc. purchased at $52.00 and sells 10 BCE Oct 55 Call options at a premium of $1.80. What strategy is this, and what is the primary objective?",
    "options": [
      "Long Straddle; designed to profit from a massive volatility breakout in either direction",
      "Bear Call Spread; designed to capture maximum profit if the stock plunges to $0",
      "Covered Call Writing; designed to generate additional income and provide modest downside protection in a neutral-to-moderately-bullish market",
      "Protective Put; designed to eliminate 100% of market downside risk"
    ],
    "correct": 2,
    "explanation": "A covered call involves selling call options against long stock to earn premium income, capping upside profit at the strike price while providing downside cushion equal to the premium. (Ref: CIRE Syllabus outcome 8.8 - Prohibited derivative trading practices and undermargined trading)."
  },
  {
    "id": "CIRE-E8-021",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Regulatory Review: During a supervisory compliance check at Apex Capital Securities regarding Wei Chen: An investor holding 500 shares of a bank stock at $80.00 buys 5 Oct 75 Put options at $2.00. What is the maximum loss per share for the investor down to zero?",
    "options": [
      "$75.00 per share",
      "$7.00 per share ($5.00 stock decline down to the $75 strike + $2.00 put premium)",
      "$2.00 per share",
      "$80.00 per share if the company goes bankrupt"
    ],
    "correct": 1,
    "explanation": "The put guarantees a sale at $75. Loss on stock = $80 - $75 = $5. Plus $2 premium paid = $7 maximum loss per share, regardless of how far the stock falls. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  },
  {
    "id": "CIRE-E8-022",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "Client Inquiry: Client Sarah O'Connor contacts Maple Leaf Wealth Partners regarding holdings in SU. When would an options trader establish a 'Long Straddle' (buying a Call and a Put with the same strike price and expiration)?",
    "options": [
      "When the trader wants to write naked options to collect income",
      "When the trader expects the stock to remain completely flat with zero price movement",
      "When the trader wishes to lock in an annual dividend payout",
      "When the trader expects high volatility and a substantial price movement, but is uncertain of the direction"
    ],
    "correct": 3,
    "explanation": "A long straddle profits from sharp price swings in either direction, exceeding the combined cost of the call and put premiums. (Ref: CIRE Syllabus outcome 8.2 - Futures, forwards, swaps, and contracts for difference (CFDs))."
  },
  {
    "id": "CIRE-E8-023",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Apply",
    "question": "Scenario: At Beacon Securities Ltd., Registered Representative is reviewing the portfolio of Antoine Girard. Before an Approved Person can execute options trades for a client, who within the Investment Dealer must approve the Options Account Application?",
    "options": [
      "A designated Supervisory Principal / Branch Manager qualified as a Registered Options Principal (ROP)",
      "The firm's chief technology officer",
      "A hearing officer from the provincial securities commission",
      "The head of the equity clearing department at CDS"
    ],
    "correct": 0,
    "explanation": "Opening an options account requires prior review and written approval by a qualified supervisory principal / Registered Options Principal (ROP). (Ref: CIRE Syllabus outcome 8.3 - Uses of derivatives: hedging, speculation, and arbitrage)."
  },
  {
    "id": "CIRE-E8-024",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Analyze",
    "question": "Compliance Case Study: An audit at Laurentian Direct Brokers evaluates a recent transaction in POW for client Fatima Zahra. An Approved Person notices that a client's derivative account has fallen undermargined following an overnight market drop. The representative allows the client to enter new speculative derivative positions before meeting the margin deficit. What is the regulatory consequence?",
    "options": [
      "Permitted provided the trades are executed on European-style index options",
      "Permitted if the representative covers the margin loan out of personal salary",
      "Strictly prohibited; dealers cannot execute new transactions that increase risk in an undermargined derivative account, and must demand immediate margin or liquidate positions",
      "Permitted if the client promises to wire funds within 30 calendar days"
    ],
    "correct": 2,
    "explanation": "CIRO rules strictly prohibit trading in undermargined derivative accounts. No new positions that increase margin requirements may be opened until the call is satisfied. (Ref: CIRE Syllabus outcome 8.4 - Transactional elements: intrinsic value, time value, volatility, mark-to-market)."
  },
  {
    "id": "CIRE-E8-025",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Remember",
    "question": "Practical Application: In an advisory relationship between Great North Capital and client Carlos Gomez: What is the operational difference between an American-style option and a European-style option?",
    "options": [
      "American options cannot be sold before expiry; European options can be traded intraday",
      "American options are traded in US dollars; European options are traded in Euros",
      "American options apply only to commodities; European options apply only to equities",
      "An American-style option can be exercised at any time up to and including expiration; a European-style option can only be exercised on the expiration date"
    ],
    "correct": 3,
    "explanation": "American-style options allow early exercise on any business day up to expiration. European-style options may only be exercised at expiry. (Ref: CIRE Syllabus outcome 8.5 - Listed vs. over-the-counter (OTC) derivative markets)."
  },
  {
    "id": "CIRE-E8-026",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "Regulatory Review: During a supervisory compliance check at Pacific Crest Securities regarding Priya Sharma: An investor purchases one XYZ Oct 50 Call option at a premium of $3.50. What right does this contract grant to the buyer?",
    "options": [
      "The right (but not the obligation) to purchase 100 shares of XYZ at $50.00 per share on or before the October expiration date",
      "The right to sell 100 shares of XYZ at $53.50 per share",
      "The right to receive quarterly dividends directly from XYZ Corp",
      "The obligation to sell 100 shares of XYZ at $50.00 per share immediately"
    ],
    "correct": 0,
    "explanation": "A call option grants the holder the right to buy the underlying shares at the specified strike price ($50) prior to expiration. (Ref: CIRE Syllabus outcome 8.6 - Single and multi-legged strategies: covered calls, protective puts, spreads, straddles)."
  },
  {
    "id": "CIRE-E8-027",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Apply",
    "question": "Client Inquiry: Client David Leblanc contacts St. Lawrence Financial regarding holdings in WCN. What is a primary distinction between an exchange-traded Futures contract and an Over-the-Counter (OTC) Forward contract?",
    "options": [
      "Futures are standardized contracts cleared through a central clearinghouse (CDCC) with daily mark-to-market; forwards are customized bilateral agreements with counterparty credit risk",
      "Futures are illegal in Canada under provincial securities regulations",
      "Forwards require daily variation margin payments, whereas futures settle only at maturity",
      "Futures have customized strike dates and contract sizes, whereas forwards are standardized"
    ],
    "correct": 0,
    "explanation": "Futures trade on organized exchanges with standardized terms and daily mark-to-market margin, eliminating counterparty risk. Forwards are non-standardized OTC contracts with counterparty risk. (Ref: CIRE Syllabus outcome 8.7 - Administrative requirements: options agreements, risk disclosure statements)."
  },
  {
    "id": "CIRE-E8-028",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Analyze",
    "question": "Scenario: At Trillium Investment Partners, Registered Representative is reviewing the portfolio of Liam Tremblay. What is the primary motivation of a portfolio manager who enters into a 'Hedging' transaction using derivatives?",
    "options": [
      "To maximize portfolio turnover and generate advisory commissions",
      "To guarantee a higher ranking in national mutual fund performance tables",
      "To speculate on extreme short-term market volatility with high leverage",
      "To reduce or eliminate the risk of adverse price movements in an existing portfolio holding"
    ],
    "correct": 3,
    "explanation": "Hedging involves taking an offsetting derivative position to protect against unfavorable price movements in an underlying asset. (Ref: CIRE Syllabus outcome 8.8 - Prohibited derivative trading practices and undermargined trading)."
  },
  {
    "id": "CIRE-E8-029",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Compliance Case Study: An audit at Apex Capital Securities evaluates a recent transaction in TD for client Sophie Bouchard. A stock is trading at $58.00. What is the intrinsic value of a Call option with a strike price of $50.00 trading at a premium of $9.50?",
    "options": [
      "Intrinsic Value = $50.00; Time Value = $8.00",
      "Intrinsic Value = $0.00; Time Value = $9.50",
      "Intrinsic Value = $9.50; Time Value = $0.00",
      "Intrinsic Value = $8.00; Time Value = $1.50 ($9.50 total premium - $8.00 intrinsic value)"
    ],
    "correct": 3,
    "explanation": "Call Intrinsic Value = Market Price - Strike = $58 - $50 = $8.00. Time Value = Premium - Intrinsic Value = $9.50 - $8.00 = $1.50. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  },
  {
    "id": "CIRE-E8-030",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "Practical Application: In an advisory relationship between Maple Leaf Wealth Partners and client Rajesh Patel: Which option Greek measures the sensitivity of an option's premium to changes in the implied volatility of the underlying security?",
    "options": [
      "Rho",
      "Vega",
      "Theta",
      "Delta"
    ],
    "correct": 1,
    "explanation": "Vega measures the rate of change in option price for a 1% change in implied volatility. (Delta measures price sensitivity, Theta measures time decay, Rho measures interest rate sensitivity). (Ref: CIRE Syllabus outcome 8.2 - Futures, forwards, swaps, and contracts for difference (CFDs))."
  },
  {
    "id": "CIRE-E8-031",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Apply",
    "question": "Regulatory Review: During a supervisory compliance check at Beacon Securities Ltd. regarding Chloe Desjardins: On which exchange are Canadian exchange-traded stock options and bond futures officially listed and traded?",
    "options": [
      "Bourse de Montr\u00e9al (Montreal Exchange - MX)",
      "Canadian Securities Exchange (CSE)",
      "Toronto Stock Exchange (TSX)",
      "Cboe Canada"
    ],
    "correct": 0,
    "explanation": "The Bourse de Montr\u00e9al (MX) is Canada's dedicated financial derivatives exchange, where all exchange-traded options, index derivatives, and futures are listed. (Ref: CIRE Syllabus outcome 8.3 - Uses of derivatives: hedging, speculation, and arbitrage)."
  },
  {
    "id": "CIRE-E8-032",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Analyze",
    "question": "Client Inquiry: Client Dmitri Ivanov contacts Laurentian Direct Brokers regarding holdings in CNR. An investor owns 1,000 shares of BCE Inc. purchased at $52.00 and sells 10 BCE Oct 55 Call options at a premium of $1.80. What strategy is this, and what is the primary objective?",
    "options": [
      "Bear Call Spread; designed to capture maximum profit if the stock plunges to $0",
      "Long Straddle; designed to profit from a massive volatility breakout in either direction",
      "Protective Put; designed to eliminate 100% of market downside risk",
      "Covered Call Writing; designed to generate additional income and provide modest downside protection in a neutral-to-moderately-bullish market"
    ],
    "correct": 3,
    "explanation": "A covered call involves selling call options against long stock to earn premium income, capping upside profit at the strike price while providing downside cushion equal to the premium. (Ref: CIRE Syllabus outcome 8.4 - Transactional elements: intrinsic value, time value, volatility, mark-to-market)."
  },
  {
    "id": "CIRE-E8-033",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Remember",
    "question": "Scenario: At Great North Capital, Registered Representative is reviewing the portfolio of Amira Al-Mansoor. An investor holding 500 shares of a bank stock at $80.00 buys 5 Oct 75 Put options at $2.00. What is the maximum loss per share for the investor down to zero?",
    "options": [
      "$7.00 per share ($5.00 stock decline down to the $75 strike + $2.00 put premium)",
      "$75.00 per share",
      "$80.00 per share if the company goes bankrupt",
      "$2.00 per share"
    ],
    "correct": 0,
    "explanation": "The put guarantees a sale at $75. Loss on stock = $80 - $75 = $5. Plus $2 premium paid = $7 maximum loss per share, regardless of how far the stock falls. (Ref: CIRE Syllabus outcome 8.5 - Listed vs. over-the-counter (OTC) derivative markets)."
  },
  {
    "id": "CIRE-E8-034",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "Compliance Case Study: An audit at Pacific Crest Securities evaluates a recent transaction in SHOP for client Marcus Campbell. When would an options trader establish a 'Long Straddle' (buying a Call and a Put with the same strike price and expiration)?",
    "options": [
      "When the trader expects high volatility and a substantial price movement, but is uncertain of the direction",
      "When the trader wishes to lock in an annual dividend payout",
      "When the trader wants to write naked options to collect income",
      "When the trader expects the stock to remain completely flat with zero price movement"
    ],
    "correct": 0,
    "explanation": "A long straddle profits from sharp price swings in either direction, exceeding the combined cost of the call and put premiums. (Ref: CIRE Syllabus outcome 8.6 - Single and multi-legged strategies: covered calls, protective puts, spreads, straddles)."
  },
  {
    "id": "CIRE-E8-035",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Apply",
    "question": "Practical Application: In an advisory relationship between St. Lawrence Financial and client Helena Vance: Before an Approved Person can execute options trades for a client, who within the Investment Dealer must approve the Options Account Application?",
    "options": [
      "The head of the equity clearing department at CDS",
      "A designated Supervisory Principal / Branch Manager qualified as a Registered Options Principal (ROP)",
      "A hearing officer from the provincial securities commission",
      "The firm's chief technology officer"
    ],
    "correct": 1,
    "explanation": "Opening an options account requires prior review and written approval by a qualified supervisory principal / Registered Options Principal (ROP). (Ref: CIRE Syllabus outcome 8.7 - Administrative requirements: options agreements, risk disclosure statements)."
  },
  {
    "id": "CIRE-E8-036",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Analyze",
    "question": "Regulatory Review: During a supervisory compliance check at Trillium Investment Partners regarding Wei Chen: An Approved Person notices that a client's derivative account has fallen undermargined following an overnight market drop. The representative allows the client to enter new speculative derivative positions before meeting the margin deficit. What is the regulatory consequence?",
    "options": [
      "Permitted if the representative covers the margin loan out of personal salary",
      "Permitted if the client promises to wire funds within 30 calendar days",
      "Strictly prohibited; dealers cannot execute new transactions that increase risk in an undermargined derivative account, and must demand immediate margin or liquidate positions",
      "Permitted provided the trades are executed on European-style index options"
    ],
    "correct": 2,
    "explanation": "CIRO rules strictly prohibit trading in undermargined derivative accounts. No new positions that increase margin requirements may be opened until the call is satisfied. (Ref: CIRE Syllabus outcome 8.8 - Prohibited derivative trading practices and undermargined trading)."
  },
  {
    "id": "CIRE-E8-037",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Client Inquiry: Client Sarah O'Connor contacts Apex Capital Securities regarding holdings in SU. What is the operational difference between an American-style option and a European-style option?",
    "options": [
      "An American-style option can be exercised at any time up to and including expiration; a European-style option can only be exercised on the expiration date",
      "American options are traded in US dollars; European options are traded in Euros",
      "American options cannot be sold before expiry; European options can be traded intraday",
      "American options apply only to commodities; European options apply only to equities"
    ],
    "correct": 0,
    "explanation": "American-style options allow early exercise on any business day up to expiration. European-style options may only be exercised at expiry. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  },
  {
    "id": "CIRE-E8-038",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "Scenario: At Maple Leaf Wealth Partners, Registered Representative is reviewing the portfolio of Antoine Girard. An investor purchases one XYZ Oct 50 Call option at a premium of $3.50. What right does this contract grant to the buyer?",
    "options": [
      "The obligation to sell 100 shares of XYZ at $50.00 per share immediately",
      "The right (but not the obligation) to purchase 100 shares of XYZ at $50.00 per share on or before the October expiration date",
      "The right to sell 100 shares of XYZ at $53.50 per share",
      "The right to receive quarterly dividends directly from XYZ Corp"
    ],
    "correct": 1,
    "explanation": "A call option grants the holder the right to buy the underlying shares at the specified strike price ($50) prior to expiration. (Ref: CIRE Syllabus outcome 8.2 - Futures, forwards, swaps, and contracts for difference (CFDs))."
  },
  {
    "id": "CIRE-E8-039",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Apply",
    "question": "Compliance Case Study: An audit at Beacon Securities Ltd. evaluates a recent transaction in POW for client Fatima Zahra. What is a primary distinction between an exchange-traded Futures contract and an Over-the-Counter (OTC) Forward contract?",
    "options": [
      "Futures are illegal in Canada under provincial securities regulations",
      "Futures have customized strike dates and contract sizes, whereas forwards are standardized",
      "Futures are standardized contracts cleared through a central clearinghouse (CDCC) with daily mark-to-market; forwards are customized bilateral agreements with counterparty credit risk",
      "Forwards require daily variation margin payments, whereas futures settle only at maturity"
    ],
    "correct": 2,
    "explanation": "Futures trade on organized exchanges with standardized terms and daily mark-to-market margin, eliminating counterparty risk. Forwards are non-standardized OTC contracts with counterparty risk. (Ref: CIRE Syllabus outcome 8.3 - Uses of derivatives: hedging, speculation, and arbitrage)."
  },
  {
    "id": "CIRE-E8-040",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Analyze",
    "question": "Practical Application: In an advisory relationship between Laurentian Direct Brokers and client Carlos Gomez: What is the primary motivation of a portfolio manager who enters into a 'Hedging' transaction using derivatives?",
    "options": [
      "To guarantee a higher ranking in national mutual fund performance tables",
      "To maximize portfolio turnover and generate advisory commissions",
      "To speculate on extreme short-term market volatility with high leverage",
      "To reduce or eliminate the risk of adverse price movements in an existing portfolio holding"
    ],
    "correct": 3,
    "explanation": "Hedging involves taking an offsetting derivative position to protect against unfavorable price movements in an underlying asset. (Ref: CIRE Syllabus outcome 8.4 - Transactional elements: intrinsic value, time value, volatility, mark-to-market)."
  },
  {
    "id": "CIRE-E8-041",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Remember",
    "question": "Regulatory Review: During a supervisory compliance check at Great North Capital regarding Priya Sharma: A stock is trading at $58.00. What is the intrinsic value of a Call option with a strike price of $50.00 trading at a premium of $9.50?",
    "options": [
      "Intrinsic Value = $0.00; Time Value = $9.50",
      "Intrinsic Value = $8.00; Time Value = $1.50 ($9.50 total premium - $8.00 intrinsic value)",
      "Intrinsic Value = $9.50; Time Value = $0.00",
      "Intrinsic Value = $50.00; Time Value = $8.00"
    ],
    "correct": 1,
    "explanation": "Call Intrinsic Value = Market Price - Strike = $58 - $50 = $8.00. Time Value = Premium - Intrinsic Value = $9.50 - $8.00 = $1.50. (Ref: CIRE Syllabus outcome 8.5 - Listed vs. over-the-counter (OTC) derivative markets)."
  },
  {
    "id": "CIRE-E8-042",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "Client Inquiry: Client David Leblanc contacts Pacific Crest Securities regarding holdings in WCN. Which option Greek measures the sensitivity of an option's premium to changes in the implied volatility of the underlying security?",
    "options": [
      "Rho",
      "Vega",
      "Theta",
      "Delta"
    ],
    "correct": 1,
    "explanation": "Vega measures the rate of change in option price for a 1% change in implied volatility. (Delta measures price sensitivity, Theta measures time decay, Rho measures interest rate sensitivity). (Ref: CIRE Syllabus outcome 8.6 - Single and multi-legged strategies: covered calls, protective puts, spreads, straddles)."
  },
  {
    "id": "CIRE-E8-043",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Apply",
    "question": "Scenario: At St. Lawrence Financial, Registered Representative is reviewing the portfolio of Liam Tremblay. On which exchange are Canadian exchange-traded stock options and bond futures officially listed and traded?",
    "options": [
      "Cboe Canada",
      "Bourse de Montr\u00e9al (Montreal Exchange - MX)",
      "Toronto Stock Exchange (TSX)",
      "Canadian Securities Exchange (CSE)"
    ],
    "correct": 1,
    "explanation": "The Bourse de Montr\u00e9al (MX) is Canada's dedicated financial derivatives exchange, where all exchange-traded options, index derivatives, and futures are listed. (Ref: CIRE Syllabus outcome 8.7 - Administrative requirements: options agreements, risk disclosure statements)."
  },
  {
    "id": "CIRE-E8-044",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Analyze",
    "question": "Compliance Case Study: An audit at Trillium Investment Partners evaluates a recent transaction in TD for client Sophie Bouchard. An investor owns 1,000 shares of BCE Inc. purchased at $52.00 and sells 10 BCE Oct 55 Call options at a premium of $1.80. What strategy is this, and what is the primary objective?",
    "options": [
      "Protective Put; designed to eliminate 100% of market downside risk",
      "Bear Call Spread; designed to capture maximum profit if the stock plunges to $0",
      "Covered Call Writing; designed to generate additional income and provide modest downside protection in a neutral-to-moderately-bullish market",
      "Long Straddle; designed to profit from a massive volatility breakout in either direction"
    ],
    "correct": 2,
    "explanation": "A covered call involves selling call options against long stock to earn premium income, capping upside profit at the strike price while providing downside cushion equal to the premium. (Ref: CIRE Syllabus outcome 8.8 - Prohibited derivative trading practices and undermargined trading)."
  },
  {
    "id": "CIRE-E8-045",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Practical Application: In an advisory relationship between Apex Capital Securities and client Rajesh Patel: An investor holding 500 shares of a bank stock at $80.00 buys 5 Oct 75 Put options at $2.00. What is the maximum loss per share for the investor down to zero?",
    "options": [
      "$80.00 per share if the company goes bankrupt",
      "$2.00 per share",
      "$75.00 per share",
      "$7.00 per share ($5.00 stock decline down to the $75 strike + $2.00 put premium)"
    ],
    "correct": 3,
    "explanation": "The put guarantees a sale at $75. Loss on stock = $80 - $75 = $5. Plus $2 premium paid = $7 maximum loss per share, regardless of how far the stock falls. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  },
  {
    "id": "CIRE-E8-046",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "Regulatory Review: During a supervisory compliance check at Maple Leaf Wealth Partners regarding Chloe Desjardins: When would an options trader establish a 'Long Straddle' (buying a Call and a Put with the same strike price and expiration)?",
    "options": [
      "When the trader expects the stock to remain completely flat with zero price movement",
      "When the trader wants to write naked options to collect income",
      "When the trader expects high volatility and a substantial price movement, but is uncertain of the direction",
      "When the trader wishes to lock in an annual dividend payout"
    ],
    "correct": 2,
    "explanation": "A long straddle profits from sharp price swings in either direction, exceeding the combined cost of the call and put premiums. (Ref: CIRE Syllabus outcome 8.2 - Futures, forwards, swaps, and contracts for difference (CFDs))."
  },
  {
    "id": "CIRE-E8-047",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Apply",
    "question": "Client Inquiry: Client Dmitri Ivanov contacts Beacon Securities Ltd. regarding holdings in CNR. Before an Approved Person can execute options trades for a client, who within the Investment Dealer must approve the Options Account Application?",
    "options": [
      "The head of the equity clearing department at CDS",
      "The firm's chief technology officer",
      "A designated Supervisory Principal / Branch Manager qualified as a Registered Options Principal (ROP)",
      "A hearing officer from the provincial securities commission"
    ],
    "correct": 2,
    "explanation": "Opening an options account requires prior review and written approval by a qualified supervisory principal / Registered Options Principal (ROP). (Ref: CIRE Syllabus outcome 8.3 - Uses of derivatives: hedging, speculation, and arbitrage)."
  },
  {
    "id": "CIRE-E8-048",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Analyze",
    "question": "Scenario: At Laurentian Direct Brokers, Registered Representative is reviewing the portfolio of Amira Al-Mansoor. An Approved Person notices that a client's derivative account has fallen undermargined following an overnight market drop. The representative allows the client to enter new speculative derivative positions before meeting the margin deficit. What is the regulatory consequence?",
    "options": [
      "Permitted if the client promises to wire funds within 30 calendar days",
      "Permitted provided the trades are executed on European-style index options",
      "Permitted if the representative covers the margin loan out of personal salary",
      "Strictly prohibited; dealers cannot execute new transactions that increase risk in an undermargined derivative account, and must demand immediate margin or liquidate positions"
    ],
    "correct": 3,
    "explanation": "CIRO rules strictly prohibit trading in undermargined derivative accounts. No new positions that increase margin requirements may be opened until the call is satisfied. (Ref: CIRE Syllabus outcome 8.4 - Transactional elements: intrinsic value, time value, volatility, mark-to-market)."
  },
  {
    "id": "CIRE-E8-049",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Remember",
    "question": "Compliance Case Study: An audit at Great North Capital evaluates a recent transaction in SHOP for client Marcus Campbell. What is the operational difference between an American-style option and a European-style option?",
    "options": [
      "American options are traded in US dollars; European options are traded in Euros",
      "American options cannot be sold before expiry; European options can be traded intraday",
      "American options apply only to commodities; European options apply only to equities",
      "An American-style option can be exercised at any time up to and including expiration; a European-style option can only be exercised on the expiration date"
    ],
    "correct": 3,
    "explanation": "American-style options allow early exercise on any business day up to expiration. European-style options may only be exercised at expiry. (Ref: CIRE Syllabus outcome 8.5 - Listed vs. over-the-counter (OTC) derivative markets)."
  },
  {
    "id": "CIRE-E8-050",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "Practical Application: In an advisory relationship between Pacific Crest Securities and client Helena Vance: An investor purchases one XYZ Oct 50 Call option at a premium of $3.50. What right does this contract grant to the buyer?",
    "options": [
      "The obligation to sell 100 shares of XYZ at $50.00 per share immediately",
      "The right (but not the obligation) to purchase 100 shares of XYZ at $50.00 per share on or before the October expiration date",
      "The right to sell 100 shares of XYZ at $53.50 per share",
      "The right to receive quarterly dividends directly from XYZ Corp"
    ],
    "correct": 1,
    "explanation": "A call option grants the holder the right to buy the underlying shares at the specified strike price ($50) prior to expiration. (Ref: CIRE Syllabus outcome 8.6 - Single and multi-legged strategies: covered calls, protective puts, spreads, straddles)."
  },
  {
    "id": "CIRE-E8-051",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Apply",
    "question": "Regulatory Review: During a supervisory compliance check at St. Lawrence Financial regarding Wei Chen: What is a primary distinction between an exchange-traded Futures contract and an Over-the-Counter (OTC) Forward contract?",
    "options": [
      "Futures are standardized contracts cleared through a central clearinghouse (CDCC) with daily mark-to-market; forwards are customized bilateral agreements with counterparty credit risk",
      "Futures have customized strike dates and contract sizes, whereas forwards are standardized",
      "Forwards require daily variation margin payments, whereas futures settle only at maturity",
      "Futures are illegal in Canada under provincial securities regulations"
    ],
    "correct": 0,
    "explanation": "Futures trade on organized exchanges with standardized terms and daily mark-to-market margin, eliminating counterparty risk. Forwards are non-standardized OTC contracts with counterparty risk. (Ref: CIRE Syllabus outcome 8.7 - Administrative requirements: options agreements, risk disclosure statements)."
  },
  {
    "id": "CIRE-E8-052",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Analyze",
    "question": "Client Inquiry: Client Sarah O'Connor contacts Trillium Investment Partners regarding holdings in SU. What is the primary motivation of a portfolio manager who enters into a 'Hedging' transaction using derivatives?",
    "options": [
      "To speculate on extreme short-term market volatility with high leverage",
      "To guarantee a higher ranking in national mutual fund performance tables",
      "To maximize portfolio turnover and generate advisory commissions",
      "To reduce or eliminate the risk of adverse price movements in an existing portfolio holding"
    ],
    "correct": 3,
    "explanation": "Hedging involves taking an offsetting derivative position to protect against unfavorable price movements in an underlying asset. (Ref: CIRE Syllabus outcome 8.8 - Prohibited derivative trading practices and undermargined trading)."
  },
  {
    "id": "CIRE-E8-053",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Scenario: At Apex Capital Securities, Registered Representative is reviewing the portfolio of Antoine Girard. A stock is trading at $58.00. What is the intrinsic value of a Call option with a strike price of $50.00 trading at a premium of $9.50?",
    "options": [
      "Intrinsic Value = $50.00; Time Value = $8.00",
      "Intrinsic Value = $8.00; Time Value = $1.50 ($9.50 total premium - $8.00 intrinsic value)",
      "Intrinsic Value = $9.50; Time Value = $0.00",
      "Intrinsic Value = $0.00; Time Value = $9.50"
    ],
    "correct": 1,
    "explanation": "Call Intrinsic Value = Market Price - Strike = $58 - $50 = $8.00. Time Value = Premium - Intrinsic Value = $9.50 - $8.00 = $1.50. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  },
  {
    "id": "CIRE-E8-054",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "Compliance Case Study: An audit at Maple Leaf Wealth Partners evaluates a recent transaction in POW for client Fatima Zahra. Which option Greek measures the sensitivity of an option's premium to changes in the implied volatility of the underlying security?",
    "options": [
      "Vega",
      "Theta",
      "Rho",
      "Delta"
    ],
    "correct": 0,
    "explanation": "Vega measures the rate of change in option price for a 1% change in implied volatility. (Delta measures price sensitivity, Theta measures time decay, Rho measures interest rate sensitivity). (Ref: CIRE Syllabus outcome 8.2 - Futures, forwards, swaps, and contracts for difference (CFDs))."
  },
  {
    "id": "CIRE-E8-055",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Apply",
    "question": "Practical Application: In an advisory relationship between Beacon Securities Ltd. and client Carlos Gomez: On which exchange are Canadian exchange-traded stock options and bond futures officially listed and traded?",
    "options": [
      "Cboe Canada",
      "Canadian Securities Exchange (CSE)",
      "Toronto Stock Exchange (TSX)",
      "Bourse de Montr\u00e9al (Montreal Exchange - MX)"
    ],
    "correct": 3,
    "explanation": "The Bourse de Montr\u00e9al (MX) is Canada's dedicated financial derivatives exchange, where all exchange-traded options, index derivatives, and futures are listed. (Ref: CIRE Syllabus outcome 8.3 - Uses of derivatives: hedging, speculation, and arbitrage)."
  },
  {
    "id": "CIRE-E8-056",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Analyze",
    "question": "Regulatory Review: During a supervisory compliance check at Laurentian Direct Brokers regarding Priya Sharma: An investor owns 1,000 shares of BCE Inc. purchased at $52.00 and sells 10 BCE Oct 55 Call options at a premium of $1.80. What strategy is this, and what is the primary objective?",
    "options": [
      "Protective Put; designed to eliminate 100% of market downside risk",
      "Long Straddle; designed to profit from a massive volatility breakout in either direction",
      "Bear Call Spread; designed to capture maximum profit if the stock plunges to $0",
      "Covered Call Writing; designed to generate additional income and provide modest downside protection in a neutral-to-moderately-bullish market"
    ],
    "correct": 3,
    "explanation": "A covered call involves selling call options against long stock to earn premium income, capping upside profit at the strike price while providing downside cushion equal to the premium. (Ref: CIRE Syllabus outcome 8.4 - Transactional elements: intrinsic value, time value, volatility, mark-to-market)."
  },
  {
    "id": "CIRE-E8-057",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Remember",
    "question": "Client Inquiry: Client David Leblanc contacts Great North Capital regarding holdings in WCN. An investor holding 500 shares of a bank stock at $80.00 buys 5 Oct 75 Put options at $2.00. What is the maximum loss per share for the investor down to zero?",
    "options": [
      "$75.00 per share",
      "$2.00 per share",
      "$7.00 per share ($5.00 stock decline down to the $75 strike + $2.00 put premium)",
      "$80.00 per share if the company goes bankrupt"
    ],
    "correct": 2,
    "explanation": "The put guarantees a sale at $75. Loss on stock = $80 - $75 = $5. Plus $2 premium paid = $7 maximum loss per share, regardless of how far the stock falls. (Ref: CIRE Syllabus outcome 8.5 - Listed vs. over-the-counter (OTC) derivative markets)."
  },
  {
    "id": "CIRE-E8-058",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "Scenario: At Pacific Crest Securities, Registered Representative is reviewing the portfolio of Liam Tremblay. When would an options trader establish a 'Long Straddle' (buying a Call and a Put with the same strike price and expiration)?",
    "options": [
      "When the trader wishes to lock in an annual dividend payout",
      "When the trader wants to write naked options to collect income",
      "When the trader expects high volatility and a substantial price movement, but is uncertain of the direction",
      "When the trader expects the stock to remain completely flat with zero price movement"
    ],
    "correct": 2,
    "explanation": "A long straddle profits from sharp price swings in either direction, exceeding the combined cost of the call and put premiums. (Ref: CIRE Syllabus outcome 8.6 - Single and multi-legged strategies: covered calls, protective puts, spreads, straddles)."
  },
  {
    "id": "CIRE-E8-059",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Apply",
    "question": "Compliance Case Study: An audit at St. Lawrence Financial evaluates a recent transaction in TD for client Sophie Bouchard. Before an Approved Person can execute options trades for a client, who within the Investment Dealer must approve the Options Account Application?",
    "options": [
      "The firm's chief technology officer",
      "The head of the equity clearing department at CDS",
      "A designated Supervisory Principal / Branch Manager qualified as a Registered Options Principal (ROP)",
      "A hearing officer from the provincial securities commission"
    ],
    "correct": 2,
    "explanation": "Opening an options account requires prior review and written approval by a qualified supervisory principal / Registered Options Principal (ROP). (Ref: CIRE Syllabus outcome 8.7 - Administrative requirements: options agreements, risk disclosure statements)."
  },
  {
    "id": "CIRE-E8-060",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Analyze",
    "question": "Practical Application: In an advisory relationship between Trillium Investment Partners and client Rajesh Patel: An Approved Person notices that a client's derivative account has fallen undermargined following an overnight market drop. The representative allows the client to enter new speculative derivative positions before meeting the margin deficit. What is the regulatory consequence?",
    "options": [
      "Permitted provided the trades are executed on European-style index options",
      "Permitted if the representative covers the margin loan out of personal salary",
      "Strictly prohibited; dealers cannot execute new transactions that increase risk in an undermargined derivative account, and must demand immediate margin or liquidate positions",
      "Permitted if the client promises to wire funds within 30 calendar days"
    ],
    "correct": 2,
    "explanation": "CIRO rules strictly prohibit trading in undermargined derivative accounts. No new positions that increase margin requirements may be opened until the call is satisfied. (Ref: CIRE Syllabus outcome 8.8 - Prohibited derivative trading practices and undermargined trading)."
  },
  {
    "id": "CIRE-E8-061",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Regulatory Review: During a supervisory compliance check at Apex Capital Securities regarding Chloe Desjardins: What is the operational difference between an American-style option and a European-style option?",
    "options": [
      "An American-style option can be exercised at any time up to and including expiration; a European-style option can only be exercised on the expiration date",
      "American options cannot be sold before expiry; European options can be traded intraday",
      "American options apply only to commodities; European options apply only to equities",
      "American options are traded in US dollars; European options are traded in Euros"
    ],
    "correct": 0,
    "explanation": "American-style options allow early exercise on any business day up to expiration. European-style options may only be exercised at expiry. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  },
  {
    "id": "CIRE-E8-062",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "Client Inquiry: Client Dmitri Ivanov contacts Maple Leaf Wealth Partners regarding holdings in CNR. An investor purchases one XYZ Oct 50 Call option at a premium of $3.50. What right does this contract grant to the buyer?",
    "options": [
      "The obligation to sell 100 shares of XYZ at $50.00 per share immediately",
      "The right to receive quarterly dividends directly from XYZ Corp",
      "The right to sell 100 shares of XYZ at $53.50 per share",
      "The right (but not the obligation) to purchase 100 shares of XYZ at $50.00 per share on or before the October expiration date"
    ],
    "correct": 3,
    "explanation": "A call option grants the holder the right to buy the underlying shares at the specified strike price ($50) prior to expiration. (Ref: CIRE Syllabus outcome 8.2 - Futures, forwards, swaps, and contracts for difference (CFDs))."
  },
  {
    "id": "CIRE-E8-063",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Apply",
    "question": "Scenario: At Beacon Securities Ltd., Registered Representative is reviewing the portfolio of Amira Al-Mansoor. What is a primary distinction between an exchange-traded Futures contract and an Over-the-Counter (OTC) Forward contract?",
    "options": [
      "Futures have customized strike dates and contract sizes, whereas forwards are standardized",
      "Futures are illegal in Canada under provincial securities regulations",
      "Forwards require daily variation margin payments, whereas futures settle only at maturity",
      "Futures are standardized contracts cleared through a central clearinghouse (CDCC) with daily mark-to-market; forwards are customized bilateral agreements with counterparty credit risk"
    ],
    "correct": 3,
    "explanation": "Futures trade on organized exchanges with standardized terms and daily mark-to-market margin, eliminating counterparty risk. Forwards are non-standardized OTC contracts with counterparty risk. (Ref: CIRE Syllabus outcome 8.3 - Uses of derivatives: hedging, speculation, and arbitrage)."
  },
  {
    "id": "CIRE-E8-064",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Analyze",
    "question": "Compliance Case Study: An audit at Laurentian Direct Brokers evaluates a recent transaction in SHOP for client Marcus Campbell. What is the primary motivation of a portfolio manager who enters into a 'Hedging' transaction using derivatives?",
    "options": [
      "To guarantee a higher ranking in national mutual fund performance tables",
      "To maximize portfolio turnover and generate advisory commissions",
      "To reduce or eliminate the risk of adverse price movements in an existing portfolio holding",
      "To speculate on extreme short-term market volatility with high leverage"
    ],
    "correct": 2,
    "explanation": "Hedging involves taking an offsetting derivative position to protect against unfavorable price movements in an underlying asset. (Ref: CIRE Syllabus outcome 8.4 - Transactional elements: intrinsic value, time value, volatility, mark-to-market)."
  },
  {
    "id": "CIRE-E8-065",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Remember",
    "question": "Practical Application: In an advisory relationship between Great North Capital and client Helena Vance: A stock is trading at $58.00. What is the intrinsic value of a Call option with a strike price of $50.00 trading at a premium of $9.50?",
    "options": [
      "Intrinsic Value = $0.00; Time Value = $9.50",
      "Intrinsic Value = $9.50; Time Value = $0.00",
      "Intrinsic Value = $50.00; Time Value = $8.00",
      "Intrinsic Value = $8.00; Time Value = $1.50 ($9.50 total premium - $8.00 intrinsic value)"
    ],
    "correct": 3,
    "explanation": "Call Intrinsic Value = Market Price - Strike = $58 - $50 = $8.00. Time Value = Premium - Intrinsic Value = $9.50 - $8.00 = $1.50. (Ref: CIRE Syllabus outcome 8.5 - Listed vs. over-the-counter (OTC) derivative markets)."
  },
  {
    "id": "CIRE-E8-066",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "Regulatory Review: During a supervisory compliance check at Pacific Crest Securities regarding Wei Chen: Which option Greek measures the sensitivity of an option's premium to changes in the implied volatility of the underlying security?",
    "options": [
      "Theta",
      "Rho",
      "Delta",
      "Vega"
    ],
    "correct": 3,
    "explanation": "Vega measures the rate of change in option price for a 1% change in implied volatility. (Delta measures price sensitivity, Theta measures time decay, Rho measures interest rate sensitivity). (Ref: CIRE Syllabus outcome 8.6 - Single and multi-legged strategies: covered calls, protective puts, spreads, straddles)."
  },
  {
    "id": "CIRE-E8-067",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Apply",
    "question": "Client Inquiry: Client Sarah O'Connor contacts St. Lawrence Financial regarding holdings in SU. On which exchange are Canadian exchange-traded stock options and bond futures officially listed and traded?",
    "options": [
      "Cboe Canada",
      "Bourse de Montr\u00e9al (Montreal Exchange - MX)",
      "Canadian Securities Exchange (CSE)",
      "Toronto Stock Exchange (TSX)"
    ],
    "correct": 1,
    "explanation": "The Bourse de Montr\u00e9al (MX) is Canada's dedicated financial derivatives exchange, where all exchange-traded options, index derivatives, and futures are listed. (Ref: CIRE Syllabus outcome 8.7 - Administrative requirements: options agreements, risk disclosure statements)."
  },
  {
    "id": "CIRE-E8-068",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Analyze",
    "question": "Scenario: At Trillium Investment Partners, Registered Representative is reviewing the portfolio of Antoine Girard. An investor owns 1,000 shares of BCE Inc. purchased at $52.00 and sells 10 BCE Oct 55 Call options at a premium of $1.80. What strategy is this, and what is the primary objective?",
    "options": [
      "Long Straddle; designed to profit from a massive volatility breakout in either direction",
      "Covered Call Writing; designed to generate additional income and provide modest downside protection in a neutral-to-moderately-bullish market",
      "Bear Call Spread; designed to capture maximum profit if the stock plunges to $0",
      "Protective Put; designed to eliminate 100% of market downside risk"
    ],
    "correct": 1,
    "explanation": "A covered call involves selling call options against long stock to earn premium income, capping upside profit at the strike price while providing downside cushion equal to the premium. (Ref: CIRE Syllabus outcome 8.8 - Prohibited derivative trading practices and undermargined trading)."
  },
  {
    "id": "CIRE-E8-069",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Compliance Case Study: An audit at Apex Capital Securities evaluates a recent transaction in POW for client Fatima Zahra. An investor holding 500 shares of a bank stock at $80.00 buys 5 Oct 75 Put options at $2.00. What is the maximum loss per share for the investor down to zero?",
    "options": [
      "$80.00 per share if the company goes bankrupt",
      "$2.00 per share",
      "$75.00 per share",
      "$7.00 per share ($5.00 stock decline down to the $75 strike + $2.00 put premium)"
    ],
    "correct": 3,
    "explanation": "The put guarantees a sale at $75. Loss on stock = $80 - $75 = $5. Plus $2 premium paid = $7 maximum loss per share, regardless of how far the stock falls. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  },
  {
    "id": "CIRE-E8-070",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "Practical Application: In an advisory relationship between Maple Leaf Wealth Partners and client Carlos Gomez: When would an options trader establish a 'Long Straddle' (buying a Call and a Put with the same strike price and expiration)?",
    "options": [
      "When the trader expects the stock to remain completely flat with zero price movement",
      "When the trader wants to write naked options to collect income",
      "When the trader expects high volatility and a substantial price movement, but is uncertain of the direction",
      "When the trader wishes to lock in an annual dividend payout"
    ],
    "correct": 2,
    "explanation": "A long straddle profits from sharp price swings in either direction, exceeding the combined cost of the call and put premiums. (Ref: CIRE Syllabus outcome 8.2 - Futures, forwards, swaps, and contracts for difference (CFDs))."
  },
  {
    "id": "CIRE-E8-071",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Apply",
    "question": "Regulatory Review: During a supervisory compliance check at Beacon Securities Ltd. regarding Priya Sharma: Before an Approved Person can execute options trades for a client, who within the Investment Dealer must approve the Options Account Application?",
    "options": [
      "The head of the equity clearing department at CDS",
      "A designated Supervisory Principal / Branch Manager qualified as a Registered Options Principal (ROP)",
      "A hearing officer from the provincial securities commission",
      "The firm's chief technology officer"
    ],
    "correct": 1,
    "explanation": "Opening an options account requires prior review and written approval by a qualified supervisory principal / Registered Options Principal (ROP). (Ref: CIRE Syllabus outcome 8.3 - Uses of derivatives: hedging, speculation, and arbitrage)."
  },
  {
    "id": "CIRE-E8-072",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Analyze",
    "question": "Client Inquiry: Client David Leblanc contacts Laurentian Direct Brokers regarding holdings in WCN. An Approved Person notices that a client's derivative account has fallen undermargined following an overnight market drop. The representative allows the client to enter new speculative derivative positions before meeting the margin deficit. What is the regulatory consequence?",
    "options": [
      "Permitted if the client promises to wire funds within 30 calendar days",
      "Strictly prohibited; dealers cannot execute new transactions that increase risk in an undermargined derivative account, and must demand immediate margin or liquidate positions",
      "Permitted if the representative covers the margin loan out of personal salary",
      "Permitted provided the trades are executed on European-style index options"
    ],
    "correct": 1,
    "explanation": "CIRO rules strictly prohibit trading in undermargined derivative accounts. No new positions that increase margin requirements may be opened until the call is satisfied. (Ref: CIRE Syllabus outcome 8.4 - Transactional elements: intrinsic value, time value, volatility, mark-to-market)."
  },
  {
    "id": "CIRE-E8-073",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Remember",
    "question": "Scenario: At Great North Capital, Registered Representative is reviewing the portfolio of Liam Tremblay. What is the operational difference between an American-style option and a European-style option?",
    "options": [
      "American options cannot be sold before expiry; European options can be traded intraday",
      "American options apply only to commodities; European options apply only to equities",
      "An American-style option can be exercised at any time up to and including expiration; a European-style option can only be exercised on the expiration date",
      "American options are traded in US dollars; European options are traded in Euros"
    ],
    "correct": 2,
    "explanation": "American-style options allow early exercise on any business day up to expiration. European-style options may only be exercised at expiry. (Ref: CIRE Syllabus outcome 8.5 - Listed vs. over-the-counter (OTC) derivative markets)."
  },
  {
    "id": "CIRE-E8-074",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "Compliance Case Study: An audit at Pacific Crest Securities evaluates a recent transaction in TD for client Sophie Bouchard. An investor purchases one XYZ Oct 50 Call option at a premium of $3.50. What right does this contract grant to the buyer?",
    "options": [
      "The obligation to sell 100 shares of XYZ at $50.00 per share immediately",
      "The right to sell 100 shares of XYZ at $53.50 per share",
      "The right to receive quarterly dividends directly from XYZ Corp",
      "The right (but not the obligation) to purchase 100 shares of XYZ at $50.00 per share on or before the October expiration date"
    ],
    "correct": 3,
    "explanation": "A call option grants the holder the right to buy the underlying shares at the specified strike price ($50) prior to expiration. (Ref: CIRE Syllabus outcome 8.6 - Single and multi-legged strategies: covered calls, protective puts, spreads, straddles)."
  },
  {
    "id": "CIRE-E8-075",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Apply",
    "question": "Practical Application: In an advisory relationship between St. Lawrence Financial and client Rajesh Patel: What is a primary distinction between an exchange-traded Futures contract and an Over-the-Counter (OTC) Forward contract?",
    "options": [
      "Futures have customized strike dates and contract sizes, whereas forwards are standardized",
      "Futures are standardized contracts cleared through a central clearinghouse (CDCC) with daily mark-to-market; forwards are customized bilateral agreements with counterparty credit risk",
      "Futures are illegal in Canada under provincial securities regulations",
      "Forwards require daily variation margin payments, whereas futures settle only at maturity"
    ],
    "correct": 1,
    "explanation": "Futures trade on organized exchanges with standardized terms and daily mark-to-market margin, eliminating counterparty risk. Forwards are non-standardized OTC contracts with counterparty risk. (Ref: CIRE Syllabus outcome 8.7 - Administrative requirements: options agreements, risk disclosure statements)."
  },
  {
    "id": "CIRE-E8-076",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Analyze",
    "question": "Regulatory Review: During a supervisory compliance check at Trillium Investment Partners regarding Chloe Desjardins: What is the primary motivation of a portfolio manager who enters into a 'Hedging' transaction using derivatives?",
    "options": [
      "To reduce or eliminate the risk of adverse price movements in an existing portfolio holding",
      "To maximize portfolio turnover and generate advisory commissions",
      "To speculate on extreme short-term market volatility with high leverage",
      "To guarantee a higher ranking in national mutual fund performance tables"
    ],
    "correct": 0,
    "explanation": "Hedging involves taking an offsetting derivative position to protect against unfavorable price movements in an underlying asset. (Ref: CIRE Syllabus outcome 8.8 - Prohibited derivative trading practices and undermargined trading)."
  },
  {
    "id": "CIRE-E8-077",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Client Inquiry: Client Dmitri Ivanov contacts Apex Capital Securities regarding holdings in CNR. A stock is trading at $58.00. What is the intrinsic value of a Call option with a strike price of $50.00 trading at a premium of $9.50?",
    "options": [
      "Intrinsic Value = $8.00; Time Value = $1.50 ($9.50 total premium - $8.00 intrinsic value)",
      "Intrinsic Value = $9.50; Time Value = $0.00",
      "Intrinsic Value = $0.00; Time Value = $9.50",
      "Intrinsic Value = $50.00; Time Value = $8.00"
    ],
    "correct": 0,
    "explanation": "Call Intrinsic Value = Market Price - Strike = $58 - $50 = $8.00. Time Value = Premium - Intrinsic Value = $9.50 - $8.00 = $1.50. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  },
  {
    "id": "CIRE-E8-078",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "Scenario: At Maple Leaf Wealth Partners, Registered Representative is reviewing the portfolio of Amira Al-Mansoor. Which option Greek measures the sensitivity of an option's premium to changes in the implied volatility of the underlying security?",
    "options": [
      "Delta",
      "Vega",
      "Theta",
      "Rho"
    ],
    "correct": 1,
    "explanation": "Vega measures the rate of change in option price for a 1% change in implied volatility. (Delta measures price sensitivity, Theta measures time decay, Rho measures interest rate sensitivity). (Ref: CIRE Syllabus outcome 8.2 - Futures, forwards, swaps, and contracts for difference (CFDs))."
  },
  {
    "id": "CIRE-E8-079",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Apply",
    "question": "Compliance Case Study: An audit at Beacon Securities Ltd. evaluates a recent transaction in SHOP for client Marcus Campbell. On which exchange are Canadian exchange-traded stock options and bond futures officially listed and traded?",
    "options": [
      "Canadian Securities Exchange (CSE)",
      "Toronto Stock Exchange (TSX)",
      "Cboe Canada",
      "Bourse de Montr\u00e9al (Montreal Exchange - MX)"
    ],
    "correct": 3,
    "explanation": "The Bourse de Montr\u00e9al (MX) is Canada's dedicated financial derivatives exchange, where all exchange-traded options, index derivatives, and futures are listed. (Ref: CIRE Syllabus outcome 8.3 - Uses of derivatives: hedging, speculation, and arbitrage)."
  },
  {
    "id": "CIRE-E8-080",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Analyze",
    "question": "Practical Application: In an advisory relationship between Laurentian Direct Brokers and client Helena Vance: An investor owns 1,000 shares of BCE Inc. purchased at $52.00 and sells 10 BCE Oct 55 Call options at a premium of $1.80. What strategy is this, and what is the primary objective?",
    "options": [
      "Long Straddle; designed to profit from a massive volatility breakout in either direction",
      "Bear Call Spread; designed to capture maximum profit if the stock plunges to $0",
      "Covered Call Writing; designed to generate additional income and provide modest downside protection in a neutral-to-moderately-bullish market",
      "Protective Put; designed to eliminate 100% of market downside risk"
    ],
    "correct": 2,
    "explanation": "A covered call involves selling call options against long stock to earn premium income, capping upside profit at the strike price while providing downside cushion equal to the premium. (Ref: CIRE Syllabus outcome 8.4 - Transactional elements: intrinsic value, time value, volatility, mark-to-market)."
  },
  {
    "id": "CIRE-E8-081",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Remember",
    "question": "Regulatory Review: During a supervisory compliance check at Great North Capital regarding Wei Chen: An investor holding 500 shares of a bank stock at $80.00 buys 5 Oct 75 Put options at $2.00. What is the maximum loss per share for the investor down to zero?",
    "options": [
      "$2.00 per share",
      "$75.00 per share",
      "$80.00 per share if the company goes bankrupt",
      "$7.00 per share ($5.00 stock decline down to the $75 strike + $2.00 put premium)"
    ],
    "correct": 3,
    "explanation": "The put guarantees a sale at $75. Loss on stock = $80 - $75 = $5. Plus $2 premium paid = $7 maximum loss per share, regardless of how far the stock falls. (Ref: CIRE Syllabus outcome 8.5 - Listed vs. over-the-counter (OTC) derivative markets)."
  },
  {
    "id": "CIRE-E8-082",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "Client Inquiry: Client Sarah O'Connor contacts Pacific Crest Securities regarding holdings in SU. When would an options trader establish a 'Long Straddle' (buying a Call and a Put with the same strike price and expiration)?",
    "options": [
      "When the trader wishes to lock in an annual dividend payout",
      "When the trader wants to write naked options to collect income",
      "When the trader expects the stock to remain completely flat with zero price movement",
      "When the trader expects high volatility and a substantial price movement, but is uncertain of the direction"
    ],
    "correct": 3,
    "explanation": "A long straddle profits from sharp price swings in either direction, exceeding the combined cost of the call and put premiums. (Ref: CIRE Syllabus outcome 8.6 - Single and multi-legged strategies: covered calls, protective puts, spreads, straddles)."
  },
  {
    "id": "CIRE-E8-083",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Apply",
    "question": "Scenario: At St. Lawrence Financial, Registered Representative is reviewing the portfolio of Antoine Girard. Before an Approved Person can execute options trades for a client, who within the Investment Dealer must approve the Options Account Application?",
    "options": [
      "A designated Supervisory Principal / Branch Manager qualified as a Registered Options Principal (ROP)",
      "A hearing officer from the provincial securities commission",
      "The firm's chief technology officer",
      "The head of the equity clearing department at CDS"
    ],
    "correct": 0,
    "explanation": "Opening an options account requires prior review and written approval by a qualified supervisory principal / Registered Options Principal (ROP). (Ref: CIRE Syllabus outcome 8.7 - Administrative requirements: options agreements, risk disclosure statements)."
  },
  {
    "id": "CIRE-E8-084",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Analyze",
    "question": "Compliance Case Study: An audit at Trillium Investment Partners evaluates a recent transaction in POW for client Fatima Zahra. An Approved Person notices that a client's derivative account has fallen undermargined following an overnight market drop. The representative allows the client to enter new speculative derivative positions before meeting the margin deficit. What is the regulatory consequence?",
    "options": [
      "Permitted if the client promises to wire funds within 30 calendar days",
      "Permitted provided the trades are executed on European-style index options",
      "Strictly prohibited; dealers cannot execute new transactions that increase risk in an undermargined derivative account, and must demand immediate margin or liquidate positions",
      "Permitted if the representative covers the margin loan out of personal salary"
    ],
    "correct": 2,
    "explanation": "CIRO rules strictly prohibit trading in undermargined derivative accounts. No new positions that increase margin requirements may be opened until the call is satisfied. (Ref: CIRE Syllabus outcome 8.8 - Prohibited derivative trading practices and undermargined trading)."
  },
  {
    "id": "CIRE-E8-085",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Practical Application: In an advisory relationship between Apex Capital Securities and client Carlos Gomez: What is the operational difference between an American-style option and a European-style option?",
    "options": [
      "American options are traded in US dollars; European options are traded in Euros",
      "An American-style option can be exercised at any time up to and including expiration; a European-style option can only be exercised on the expiration date",
      "American options apply only to commodities; European options apply only to equities",
      "American options cannot be sold before expiry; European options can be traded intraday"
    ],
    "correct": 1,
    "explanation": "American-style options allow early exercise on any business day up to expiration. European-style options may only be exercised at expiry. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  },
  {
    "id": "CIRE-E8-086",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "Regulatory Review: During a supervisory compliance check at Maple Leaf Wealth Partners regarding Priya Sharma: An investor purchases one XYZ Oct 50 Call option at a premium of $3.50. What right does this contract grant to the buyer?",
    "options": [
      "The right to receive quarterly dividends directly from XYZ Corp",
      "The right to sell 100 shares of XYZ at $53.50 per share",
      "The right (but not the obligation) to purchase 100 shares of XYZ at $50.00 per share on or before the October expiration date",
      "The obligation to sell 100 shares of XYZ at $50.00 per share immediately"
    ],
    "correct": 2,
    "explanation": "A call option grants the holder the right to buy the underlying shares at the specified strike price ($50) prior to expiration. (Ref: CIRE Syllabus outcome 8.2 - Futures, forwards, swaps, and contracts for difference (CFDs))."
  },
  {
    "id": "CIRE-E8-087",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Apply",
    "question": "Client Inquiry: Client David Leblanc contacts Beacon Securities Ltd. regarding holdings in WCN. What is a primary distinction between an exchange-traded Futures contract and an Over-the-Counter (OTC) Forward contract?",
    "options": [
      "Futures are illegal in Canada under provincial securities regulations",
      "Futures have customized strike dates and contract sizes, whereas forwards are standardized",
      "Futures are standardized contracts cleared through a central clearinghouse (CDCC) with daily mark-to-market; forwards are customized bilateral agreements with counterparty credit risk",
      "Forwards require daily variation margin payments, whereas futures settle only at maturity"
    ],
    "correct": 2,
    "explanation": "Futures trade on organized exchanges with standardized terms and daily mark-to-market margin, eliminating counterparty risk. Forwards are non-standardized OTC contracts with counterparty risk. (Ref: CIRE Syllabus outcome 8.3 - Uses of derivatives: hedging, speculation, and arbitrage)."
  },
  {
    "id": "CIRE-E8-088",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Analyze",
    "question": "Scenario: At Laurentian Direct Brokers, Registered Representative is reviewing the portfolio of Liam Tremblay. What is the primary motivation of a portfolio manager who enters into a 'Hedging' transaction using derivatives?",
    "options": [
      "To guarantee a higher ranking in national mutual fund performance tables",
      "To reduce or eliminate the risk of adverse price movements in an existing portfolio holding",
      "To speculate on extreme short-term market volatility with high leverage",
      "To maximize portfolio turnover and generate advisory commissions"
    ],
    "correct": 1,
    "explanation": "Hedging involves taking an offsetting derivative position to protect against unfavorable price movements in an underlying asset. (Ref: CIRE Syllabus outcome 8.4 - Transactional elements: intrinsic value, time value, volatility, mark-to-market)."
  },
  {
    "id": "CIRE-E8-089",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Remember",
    "question": "Compliance Case Study: An audit at Great North Capital evaluates a recent transaction in TD for client Sophie Bouchard. A stock is trading at $58.00. What is the intrinsic value of a Call option with a strike price of $50.00 trading at a premium of $9.50?",
    "options": [
      "Intrinsic Value = $9.50; Time Value = $0.00",
      "Intrinsic Value = $8.00; Time Value = $1.50 ($9.50 total premium - $8.00 intrinsic value)",
      "Intrinsic Value = $0.00; Time Value = $9.50",
      "Intrinsic Value = $50.00; Time Value = $8.00"
    ],
    "correct": 1,
    "explanation": "Call Intrinsic Value = Market Price - Strike = $58 - $50 = $8.00. Time Value = Premium - Intrinsic Value = $9.50 - $8.00 = $1.50. (Ref: CIRE Syllabus outcome 8.5 - Listed vs. over-the-counter (OTC) derivative markets)."
  },
  {
    "id": "CIRE-E8-090",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "Practical Application: In an advisory relationship between Pacific Crest Securities and client Rajesh Patel: Which option Greek measures the sensitivity of an option's premium to changes in the implied volatility of the underlying security?",
    "options": [
      "Delta",
      "Theta",
      "Rho",
      "Vega"
    ],
    "correct": 3,
    "explanation": "Vega measures the rate of change in option price for a 1% change in implied volatility. (Delta measures price sensitivity, Theta measures time decay, Rho measures interest rate sensitivity). (Ref: CIRE Syllabus outcome 8.6 - Single and multi-legged strategies: covered calls, protective puts, spreads, straddles)."
  },
  {
    "id": "CIRE-E8-091",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Apply",
    "question": "Regulatory Review: During a supervisory compliance check at St. Lawrence Financial regarding Chloe Desjardins: On which exchange are Canadian exchange-traded stock options and bond futures officially listed and traded?",
    "options": [
      "Bourse de Montr\u00e9al (Montreal Exchange - MX)",
      "Cboe Canada",
      "Toronto Stock Exchange (TSX)",
      "Canadian Securities Exchange (CSE)"
    ],
    "correct": 0,
    "explanation": "The Bourse de Montr\u00e9al (MX) is Canada's dedicated financial derivatives exchange, where all exchange-traded options, index derivatives, and futures are listed. (Ref: CIRE Syllabus outcome 8.7 - Administrative requirements: options agreements, risk disclosure statements)."
  },
  {
    "id": "CIRE-E8-092",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Analyze",
    "question": "Client Inquiry: Client Dmitri Ivanov contacts Trillium Investment Partners regarding holdings in CNR. An investor owns 1,000 shares of BCE Inc. purchased at $52.00 and sells 10 BCE Oct 55 Call options at a premium of $1.80. What strategy is this, and what is the primary objective?",
    "options": [
      "Long Straddle; designed to profit from a massive volatility breakout in either direction",
      "Covered Call Writing; designed to generate additional income and provide modest downside protection in a neutral-to-moderately-bullish market",
      "Bear Call Spread; designed to capture maximum profit if the stock plunges to $0",
      "Protective Put; designed to eliminate 100% of market downside risk"
    ],
    "correct": 1,
    "explanation": "A covered call involves selling call options against long stock to earn premium income, capping upside profit at the strike price while providing downside cushion equal to the premium. (Ref: CIRE Syllabus outcome 8.8 - Prohibited derivative trading practices and undermargined trading)."
  },
  {
    "id": "CIRE-E8-093",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Scenario: At Apex Capital Securities, Registered Representative is reviewing the portfolio of Amira Al-Mansoor. An investor holding 500 shares of a bank stock at $80.00 buys 5 Oct 75 Put options at $2.00. What is the maximum loss per share for the investor down to zero?",
    "options": [
      "$2.00 per share",
      "$7.00 per share ($5.00 stock decline down to the $75 strike + $2.00 put premium)",
      "$80.00 per share if the company goes bankrupt",
      "$75.00 per share"
    ],
    "correct": 1,
    "explanation": "The put guarantees a sale at $75. Loss on stock = $80 - $75 = $5. Plus $2 premium paid = $7 maximum loss per share, regardless of how far the stock falls. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  },
  {
    "id": "CIRE-E8-094",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "Compliance Case Study: An audit at Maple Leaf Wealth Partners evaluates a recent transaction in SHOP for client Marcus Campbell. When would an options trader establish a 'Long Straddle' (buying a Call and a Put with the same strike price and expiration)?",
    "options": [
      "When the trader wishes to lock in an annual dividend payout",
      "When the trader wants to write naked options to collect income",
      "When the trader expects high volatility and a substantial price movement, but is uncertain of the direction",
      "When the trader expects the stock to remain completely flat with zero price movement"
    ],
    "correct": 2,
    "explanation": "A long straddle profits from sharp price swings in either direction, exceeding the combined cost of the call and put premiums. (Ref: CIRE Syllabus outcome 8.2 - Futures, forwards, swaps, and contracts for difference (CFDs))."
  },
  {
    "id": "CIRE-E8-095",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Apply",
    "question": "Practical Application: In an advisory relationship between Beacon Securities Ltd. and client Helena Vance: Before an Approved Person can execute options trades for a client, who within the Investment Dealer must approve the Options Account Application?",
    "options": [
      "The firm's chief technology officer",
      "A designated Supervisory Principal / Branch Manager qualified as a Registered Options Principal (ROP)",
      "The head of the equity clearing department at CDS",
      "A hearing officer from the provincial securities commission"
    ],
    "correct": 1,
    "explanation": "Opening an options account requires prior review and written approval by a qualified supervisory principal / Registered Options Principal (ROP). (Ref: CIRE Syllabus outcome 8.3 - Uses of derivatives: hedging, speculation, and arbitrage)."
  },
  {
    "id": "CIRE-E8-096",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Analyze",
    "question": "Regulatory Review: During a supervisory compliance check at Laurentian Direct Brokers regarding Wei Chen: An Approved Person notices that a client's derivative account has fallen undermargined following an overnight market drop. The representative allows the client to enter new speculative derivative positions before meeting the margin deficit. What is the regulatory consequence?",
    "options": [
      "Strictly prohibited; dealers cannot execute new transactions that increase risk in an undermargined derivative account, and must demand immediate margin or liquidate positions",
      "Permitted if the representative covers the margin loan out of personal salary",
      "Permitted if the client promises to wire funds within 30 calendar days",
      "Permitted provided the trades are executed on European-style index options"
    ],
    "correct": 0,
    "explanation": "CIRO rules strictly prohibit trading in undermargined derivative accounts. No new positions that increase margin requirements may be opened until the call is satisfied. (Ref: CIRE Syllabus outcome 8.4 - Transactional elements: intrinsic value, time value, volatility, mark-to-market)."
  },
  {
    "id": "CIRE-E8-097",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Remember",
    "question": "Client Inquiry: Client Sarah O'Connor contacts Great North Capital regarding holdings in SU. What is the operational difference between an American-style option and a European-style option?",
    "options": [
      "American options cannot be sold before expiry; European options can be traded intraday",
      "American options apply only to commodities; European options apply only to equities",
      "American options are traded in US dollars; European options are traded in Euros",
      "An American-style option can be exercised at any time up to and including expiration; a European-style option can only be exercised on the expiration date"
    ],
    "correct": 3,
    "explanation": "American-style options allow early exercise on any business day up to expiration. European-style options may only be exercised at expiry. (Ref: CIRE Syllabus outcome 8.5 - Listed vs. over-the-counter (OTC) derivative markets)."
  },
  {
    "id": "CIRE-E8-098",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "Scenario: At Pacific Crest Securities, Registered Representative is reviewing the portfolio of Antoine Girard. An investor purchases one XYZ Oct 50 Call option at a premium of $3.50. What right does this contract grant to the buyer?",
    "options": [
      "The right to sell 100 shares of XYZ at $53.50 per share",
      "The right (but not the obligation) to purchase 100 shares of XYZ at $50.00 per share on or before the October expiration date",
      "The obligation to sell 100 shares of XYZ at $50.00 per share immediately",
      "The right to receive quarterly dividends directly from XYZ Corp"
    ],
    "correct": 1,
    "explanation": "A call option grants the holder the right to buy the underlying shares at the specified strike price ($50) prior to expiration. (Ref: CIRE Syllabus outcome 8.6 - Single and multi-legged strategies: covered calls, protective puts, spreads, straddles)."
  },
  {
    "id": "CIRE-E8-099",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Apply",
    "question": "Compliance Case Study: An audit at St. Lawrence Financial evaluates a recent transaction in POW for client Fatima Zahra. What is a primary distinction between an exchange-traded Futures contract and an Over-the-Counter (OTC) Forward contract?",
    "options": [
      "Futures are illegal in Canada under provincial securities regulations",
      "Forwards require daily variation margin payments, whereas futures settle only at maturity",
      "Futures have customized strike dates and contract sizes, whereas forwards are standardized",
      "Futures are standardized contracts cleared through a central clearinghouse (CDCC) with daily mark-to-market; forwards are customized bilateral agreements with counterparty credit risk"
    ],
    "correct": 3,
    "explanation": "Futures trade on organized exchanges with standardized terms and daily mark-to-market margin, eliminating counterparty risk. Forwards are non-standardized OTC contracts with counterparty risk. (Ref: CIRE Syllabus outcome 8.7 - Administrative requirements: options agreements, risk disclosure statements)."
  },
  {
    "id": "CIRE-E8-100",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Analyze",
    "question": "Practical Application: In an advisory relationship between Trillium Investment Partners and client Carlos Gomez: What is the primary motivation of a portfolio manager who enters into a 'Hedging' transaction using derivatives?",
    "options": [
      "To reduce or eliminate the risk of adverse price movements in an existing portfolio holding",
      "To maximize portfolio turnover and generate advisory commissions",
      "To speculate on extreme short-term market volatility with high leverage",
      "To guarantee a higher ranking in national mutual fund performance tables"
    ],
    "correct": 0,
    "explanation": "Hedging involves taking an offsetting derivative position to protect against unfavorable price movements in an underlying asset. (Ref: CIRE Syllabus outcome 8.8 - Prohibited derivative trading practices and undermargined trading)."
  },
  {
    "id": "CIRE-E8-101",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Regulatory Review: During a supervisory compliance check at Apex Capital Securities regarding Priya Sharma: A stock is trading at $58.00. What is the intrinsic value of a Call option with a strike price of $50.00 trading at a premium of $9.50?",
    "options": [
      "Intrinsic Value = $9.50; Time Value = $0.00",
      "Intrinsic Value = $0.00; Time Value = $9.50",
      "Intrinsic Value = $8.00; Time Value = $1.50 ($9.50 total premium - $8.00 intrinsic value)",
      "Intrinsic Value = $50.00; Time Value = $8.00"
    ],
    "correct": 2,
    "explanation": "Call Intrinsic Value = Market Price - Strike = $58 - $50 = $8.00. Time Value = Premium - Intrinsic Value = $9.50 - $8.00 = $1.50. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  },
  {
    "id": "CIRE-E8-102",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "Client Inquiry: Client David Leblanc contacts Maple Leaf Wealth Partners regarding holdings in WCN. Which option Greek measures the sensitivity of an option's premium to changes in the implied volatility of the underlying security?",
    "options": [
      "Vega",
      "Rho",
      "Theta",
      "Delta"
    ],
    "correct": 0,
    "explanation": "Vega measures the rate of change in option price for a 1% change in implied volatility. (Delta measures price sensitivity, Theta measures time decay, Rho measures interest rate sensitivity). (Ref: CIRE Syllabus outcome 8.2 - Futures, forwards, swaps, and contracts for difference (CFDs))."
  },
  {
    "id": "CIRE-E8-103",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Apply",
    "question": "Scenario: At Beacon Securities Ltd., Registered Representative is reviewing the portfolio of Liam Tremblay. On which exchange are Canadian exchange-traded stock options and bond futures officially listed and traded?",
    "options": [
      "Cboe Canada",
      "Bourse de Montr\u00e9al (Montreal Exchange - MX)",
      "Toronto Stock Exchange (TSX)",
      "Canadian Securities Exchange (CSE)"
    ],
    "correct": 1,
    "explanation": "The Bourse de Montr\u00e9al (MX) is Canada's dedicated financial derivatives exchange, where all exchange-traded options, index derivatives, and futures are listed. (Ref: CIRE Syllabus outcome 8.3 - Uses of derivatives: hedging, speculation, and arbitrage)."
  },
  {
    "id": "CIRE-E8-104",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Analyze",
    "question": "Compliance Case Study: An audit at Laurentian Direct Brokers evaluates a recent transaction in TD for client Sophie Bouchard. An investor owns 1,000 shares of BCE Inc. purchased at $52.00 and sells 10 BCE Oct 55 Call options at a premium of $1.80. What strategy is this, and what is the primary objective?",
    "options": [
      "Long Straddle; designed to profit from a massive volatility breakout in either direction",
      "Protective Put; designed to eliminate 100% of market downside risk",
      "Bear Call Spread; designed to capture maximum profit if the stock plunges to $0",
      "Covered Call Writing; designed to generate additional income and provide modest downside protection in a neutral-to-moderately-bullish market"
    ],
    "correct": 3,
    "explanation": "A covered call involves selling call options against long stock to earn premium income, capping upside profit at the strike price while providing downside cushion equal to the premium. (Ref: CIRE Syllabus outcome 8.4 - Transactional elements: intrinsic value, time value, volatility, mark-to-market)."
  },
  {
    "id": "CIRE-E8-105",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Remember",
    "question": "Practical Application: In an advisory relationship between Great North Capital and client Rajesh Patel: An investor holding 500 shares of a bank stock at $80.00 buys 5 Oct 75 Put options at $2.00. What is the maximum loss per share for the investor down to zero?",
    "options": [
      "$80.00 per share if the company goes bankrupt",
      "$75.00 per share",
      "$2.00 per share",
      "$7.00 per share ($5.00 stock decline down to the $75 strike + $2.00 put premium)"
    ],
    "correct": 3,
    "explanation": "The put guarantees a sale at $75. Loss on stock = $80 - $75 = $5. Plus $2 premium paid = $7 maximum loss per share, regardless of how far the stock falls. (Ref: CIRE Syllabus outcome 8.5 - Listed vs. over-the-counter (OTC) derivative markets)."
  },
  {
    "id": "CIRE-E8-106",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "Regulatory Review: During a supervisory compliance check at Pacific Crest Securities regarding Chloe Desjardins: When would an options trader establish a 'Long Straddle' (buying a Call and a Put with the same strike price and expiration)?",
    "options": [
      "When the trader wishes to lock in an annual dividend payout",
      "When the trader expects the stock to remain completely flat with zero price movement",
      "When the trader expects high volatility and a substantial price movement, but is uncertain of the direction",
      "When the trader wants to write naked options to collect income"
    ],
    "correct": 2,
    "explanation": "A long straddle profits from sharp price swings in either direction, exceeding the combined cost of the call and put premiums. (Ref: CIRE Syllabus outcome 8.6 - Single and multi-legged strategies: covered calls, protective puts, spreads, straddles)."
  },
  {
    "id": "CIRE-E8-107",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Apply",
    "question": "Client Inquiry: Client Dmitri Ivanov contacts St. Lawrence Financial regarding holdings in CNR. Before an Approved Person can execute options trades for a client, who within the Investment Dealer must approve the Options Account Application?",
    "options": [
      "A hearing officer from the provincial securities commission",
      "A designated Supervisory Principal / Branch Manager qualified as a Registered Options Principal (ROP)",
      "The head of the equity clearing department at CDS",
      "The firm's chief technology officer"
    ],
    "correct": 1,
    "explanation": "Opening an options account requires prior review and written approval by a qualified supervisory principal / Registered Options Principal (ROP). (Ref: CIRE Syllabus outcome 8.7 - Administrative requirements: options agreements, risk disclosure statements)."
  },
  {
    "id": "CIRE-E8-108",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Analyze",
    "question": "Scenario: At Trillium Investment Partners, Registered Representative is reviewing the portfolio of Amira Al-Mansoor. An Approved Person notices that a client's derivative account has fallen undermargined following an overnight market drop. The representative allows the client to enter new speculative derivative positions before meeting the margin deficit. What is the regulatory consequence?",
    "options": [
      "Permitted if the representative covers the margin loan out of personal salary",
      "Permitted if the client promises to wire funds within 30 calendar days",
      "Permitted provided the trades are executed on European-style index options",
      "Strictly prohibited; dealers cannot execute new transactions that increase risk in an undermargined derivative account, and must demand immediate margin or liquidate positions"
    ],
    "correct": 3,
    "explanation": "CIRO rules strictly prohibit trading in undermargined derivative accounts. No new positions that increase margin requirements may be opened until the call is satisfied. (Ref: CIRE Syllabus outcome 8.8 - Prohibited derivative trading practices and undermargined trading)."
  },
  {
    "id": "CIRE-E8-109",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Compliance Case Study: An audit at Apex Capital Securities evaluates a recent transaction in SHOP for client Marcus Campbell. What is the operational difference between an American-style option and a European-style option?",
    "options": [
      "An American-style option can be exercised at any time up to and including expiration; a European-style option can only be exercised on the expiration date",
      "American options apply only to commodities; European options apply only to equities",
      "American options cannot be sold before expiry; European options can be traded intraday",
      "American options are traded in US dollars; European options are traded in Euros"
    ],
    "correct": 0,
    "explanation": "American-style options allow early exercise on any business day up to expiration. European-style options may only be exercised at expiry. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  },
  {
    "id": "CIRE-E8-110",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "Practical Application: In an advisory relationship between Maple Leaf Wealth Partners and client Helena Vance: An investor purchases one XYZ Oct 50 Call option at a premium of $3.50. What right does this contract grant to the buyer?",
    "options": [
      "The right to sell 100 shares of XYZ at $53.50 per share",
      "The right to receive quarterly dividends directly from XYZ Corp",
      "The right (but not the obligation) to purchase 100 shares of XYZ at $50.00 per share on or before the October expiration date",
      "The obligation to sell 100 shares of XYZ at $50.00 per share immediately"
    ],
    "correct": 2,
    "explanation": "A call option grants the holder the right to buy the underlying shares at the specified strike price ($50) prior to expiration. (Ref: CIRE Syllabus outcome 8.2 - Futures, forwards, swaps, and contracts for difference (CFDs))."
  },
  {
    "id": "CIRE-E8-111",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Apply",
    "question": "Regulatory Review: During a supervisory compliance check at Beacon Securities Ltd. regarding Wei Chen: What is a primary distinction between an exchange-traded Futures contract and an Over-the-Counter (OTC) Forward contract?",
    "options": [
      "Futures are illegal in Canada under provincial securities regulations",
      "Futures are standardized contracts cleared through a central clearinghouse (CDCC) with daily mark-to-market; forwards are customized bilateral agreements with counterparty credit risk",
      "Futures have customized strike dates and contract sizes, whereas forwards are standardized",
      "Forwards require daily variation margin payments, whereas futures settle only at maturity"
    ],
    "correct": 1,
    "explanation": "Futures trade on organized exchanges with standardized terms and daily mark-to-market margin, eliminating counterparty risk. Forwards are non-standardized OTC contracts with counterparty risk. (Ref: CIRE Syllabus outcome 8.3 - Uses of derivatives: hedging, speculation, and arbitrage)."
  },
  {
    "id": "CIRE-E8-112",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Analyze",
    "question": "Client Inquiry: Client Sarah O'Connor contacts Laurentian Direct Brokers regarding holdings in SU. What is the primary motivation of a portfolio manager who enters into a 'Hedging' transaction using derivatives?",
    "options": [
      "To speculate on extreme short-term market volatility with high leverage",
      "To guarantee a higher ranking in national mutual fund performance tables",
      "To reduce or eliminate the risk of adverse price movements in an existing portfolio holding",
      "To maximize portfolio turnover and generate advisory commissions"
    ],
    "correct": 2,
    "explanation": "Hedging involves taking an offsetting derivative position to protect against unfavorable price movements in an underlying asset. (Ref: CIRE Syllabus outcome 8.4 - Transactional elements: intrinsic value, time value, volatility, mark-to-market)."
  },
  {
    "id": "CIRE-E8-113",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Remember",
    "question": "Scenario: At Great North Capital, Registered Representative is reviewing the portfolio of Antoine Girard. A stock is trading at $58.00. What is the intrinsic value of a Call option with a strike price of $50.00 trading at a premium of $9.50?",
    "options": [
      "Intrinsic Value = $0.00; Time Value = $9.50",
      "Intrinsic Value = $8.00; Time Value = $1.50 ($9.50 total premium - $8.00 intrinsic value)",
      "Intrinsic Value = $9.50; Time Value = $0.00",
      "Intrinsic Value = $50.00; Time Value = $8.00"
    ],
    "correct": 1,
    "explanation": "Call Intrinsic Value = Market Price - Strike = $58 - $50 = $8.00. Time Value = Premium - Intrinsic Value = $9.50 - $8.00 = $1.50. (Ref: CIRE Syllabus outcome 8.5 - Listed vs. over-the-counter (OTC) derivative markets)."
  },
  {
    "id": "CIRE-E8-114",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "Compliance Case Study: An audit at Pacific Crest Securities evaluates a recent transaction in POW for client Fatima Zahra. Which option Greek measures the sensitivity of an option's premium to changes in the implied volatility of the underlying security?",
    "options": [
      "Theta",
      "Delta",
      "Rho",
      "Vega"
    ],
    "correct": 3,
    "explanation": "Vega measures the rate of change in option price for a 1% change in implied volatility. (Delta measures price sensitivity, Theta measures time decay, Rho measures interest rate sensitivity). (Ref: CIRE Syllabus outcome 8.6 - Single and multi-legged strategies: covered calls, protective puts, spreads, straddles)."
  },
  {
    "id": "CIRE-E8-115",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Apply",
    "question": "Practical Application: In an advisory relationship between St. Lawrence Financial and client Carlos Gomez: On which exchange are Canadian exchange-traded stock options and bond futures officially listed and traded?",
    "options": [
      "Canadian Securities Exchange (CSE)",
      "Toronto Stock Exchange (TSX)",
      "Bourse de Montr\u00e9al (Montreal Exchange - MX)",
      "Cboe Canada"
    ],
    "correct": 2,
    "explanation": "The Bourse de Montr\u00e9al (MX) is Canada's dedicated financial derivatives exchange, where all exchange-traded options, index derivatives, and futures are listed. (Ref: CIRE Syllabus outcome 8.7 - Administrative requirements: options agreements, risk disclosure statements)."
  },
  {
    "id": "CIRE-E8-116",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Analyze",
    "question": "Regulatory Review: During a supervisory compliance check at Trillium Investment Partners regarding Priya Sharma: An investor owns 1,000 shares of BCE Inc. purchased at $52.00 and sells 10 BCE Oct 55 Call options at a premium of $1.80. What strategy is this, and what is the primary objective?",
    "options": [
      "Protective Put; designed to eliminate 100% of market downside risk",
      "Covered Call Writing; designed to generate additional income and provide modest downside protection in a neutral-to-moderately-bullish market",
      "Long Straddle; designed to profit from a massive volatility breakout in either direction",
      "Bear Call Spread; designed to capture maximum profit if the stock plunges to $0"
    ],
    "correct": 1,
    "explanation": "A covered call involves selling call options against long stock to earn premium income, capping upside profit at the strike price while providing downside cushion equal to the premium. (Ref: CIRE Syllabus outcome 8.8 - Prohibited derivative trading practices and undermargined trading)."
  },
  {
    "id": "CIRE-E8-117",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Client Inquiry: Client David Leblanc contacts Apex Capital Securities regarding holdings in WCN. An investor holding 500 shares of a bank stock at $80.00 buys 5 Oct 75 Put options at $2.00. What is the maximum loss per share for the investor down to zero?",
    "options": [
      "$7.00 per share ($5.00 stock decline down to the $75 strike + $2.00 put premium)",
      "$2.00 per share",
      "$80.00 per share if the company goes bankrupt",
      "$75.00 per share"
    ],
    "correct": 0,
    "explanation": "The put guarantees a sale at $75. Loss on stock = $80 - $75 = $5. Plus $2 premium paid = $7 maximum loss per share, regardless of how far the stock falls. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  },
  {
    "id": "CIRE-E8-118",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "Scenario: At Maple Leaf Wealth Partners, Registered Representative is reviewing the portfolio of Liam Tremblay. When would an options trader establish a 'Long Straddle' (buying a Call and a Put with the same strike price and expiration)?",
    "options": [
      "When the trader expects the stock to remain completely flat with zero price movement",
      "When the trader expects high volatility and a substantial price movement, but is uncertain of the direction",
      "When the trader wants to write naked options to collect income",
      "When the trader wishes to lock in an annual dividend payout"
    ],
    "correct": 1,
    "explanation": "A long straddle profits from sharp price swings in either direction, exceeding the combined cost of the call and put premiums. (Ref: CIRE Syllabus outcome 8.2 - Futures, forwards, swaps, and contracts for difference (CFDs))."
  },
  {
    "id": "CIRE-E8-119",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Apply",
    "question": "Compliance Case Study: An audit at Beacon Securities Ltd. evaluates a recent transaction in TD for client Sophie Bouchard. Before an Approved Person can execute options trades for a client, who within the Investment Dealer must approve the Options Account Application?",
    "options": [
      "A hearing officer from the provincial securities commission",
      "A designated Supervisory Principal / Branch Manager qualified as a Registered Options Principal (ROP)",
      "The firm's chief technology officer",
      "The head of the equity clearing department at CDS"
    ],
    "correct": 1,
    "explanation": "Opening an options account requires prior review and written approval by a qualified supervisory principal / Registered Options Principal (ROP). (Ref: CIRE Syllabus outcome 8.3 - Uses of derivatives: hedging, speculation, and arbitrage)."
  },
  {
    "id": "CIRE-E8-120",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Analyze",
    "question": "Practical Application: In an advisory relationship between Laurentian Direct Brokers and client Rajesh Patel: An Approved Person notices that a client's derivative account has fallen undermargined following an overnight market drop. The representative allows the client to enter new speculative derivative positions before meeting the margin deficit. What is the regulatory consequence?",
    "options": [
      "Permitted if the representative covers the margin loan out of personal salary",
      "Permitted if the client promises to wire funds within 30 calendar days",
      "Strictly prohibited; dealers cannot execute new transactions that increase risk in an undermargined derivative account, and must demand immediate margin or liquidate positions",
      "Permitted provided the trades are executed on European-style index options"
    ],
    "correct": 2,
    "explanation": "CIRO rules strictly prohibit trading in undermargined derivative accounts. No new positions that increase margin requirements may be opened until the call is satisfied. (Ref: CIRE Syllabus outcome 8.4 - Transactional elements: intrinsic value, time value, volatility, mark-to-market)."
  },
  {
    "id": "CIRE-E8-121",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Remember",
    "question": "Regulatory Review: During a supervisory compliance check at Great North Capital regarding Chloe Desjardins: What is the operational difference between an American-style option and a European-style option?",
    "options": [
      "American options apply only to commodities; European options apply only to equities",
      "American options cannot be sold before expiry; European options can be traded intraday",
      "American options are traded in US dollars; European options are traded in Euros",
      "An American-style option can be exercised at any time up to and including expiration; a European-style option can only be exercised on the expiration date"
    ],
    "correct": 3,
    "explanation": "American-style options allow early exercise on any business day up to expiration. European-style options may only be exercised at expiry. (Ref: CIRE Syllabus outcome 8.5 - Listed vs. over-the-counter (OTC) derivative markets)."
  },
  {
    "id": "CIRE-E8-122",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "Client Inquiry: Client Dmitri Ivanov contacts Pacific Crest Securities regarding holdings in CNR. An investor purchases one XYZ Oct 50 Call option at a premium of $3.50. What right does this contract grant to the buyer?",
    "options": [
      "The right to receive quarterly dividends directly from XYZ Corp",
      "The obligation to sell 100 shares of XYZ at $50.00 per share immediately",
      "The right (but not the obligation) to purchase 100 shares of XYZ at $50.00 per share on or before the October expiration date",
      "The right to sell 100 shares of XYZ at $53.50 per share"
    ],
    "correct": 2,
    "explanation": "A call option grants the holder the right to buy the underlying shares at the specified strike price ($50) prior to expiration. (Ref: CIRE Syllabus outcome 8.6 - Single and multi-legged strategies: covered calls, protective puts, spreads, straddles)."
  },
  {
    "id": "CIRE-E8-123",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Apply",
    "question": "Scenario: At St. Lawrence Financial, Registered Representative is reviewing the portfolio of Amira Al-Mansoor. What is a primary distinction between an exchange-traded Futures contract and an Over-the-Counter (OTC) Forward contract?",
    "options": [
      "Futures are illegal in Canada under provincial securities regulations",
      "Forwards require daily variation margin payments, whereas futures settle only at maturity",
      "Futures are standardized contracts cleared through a central clearinghouse (CDCC) with daily mark-to-market; forwards are customized bilateral agreements with counterparty credit risk",
      "Futures have customized strike dates and contract sizes, whereas forwards are standardized"
    ],
    "correct": 2,
    "explanation": "Futures trade on organized exchanges with standardized terms and daily mark-to-market margin, eliminating counterparty risk. Forwards are non-standardized OTC contracts with counterparty risk. (Ref: CIRE Syllabus outcome 8.7 - Administrative requirements: options agreements, risk disclosure statements)."
  },
  {
    "id": "CIRE-E8-124",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Analyze",
    "question": "Compliance Case Study: An audit at Trillium Investment Partners evaluates a recent transaction in SHOP for client Marcus Campbell. What is the primary motivation of a portfolio manager who enters into a 'Hedging' transaction using derivatives?",
    "options": [
      "To guarantee a higher ranking in national mutual fund performance tables",
      "To reduce or eliminate the risk of adverse price movements in an existing portfolio holding",
      "To maximize portfolio turnover and generate advisory commissions",
      "To speculate on extreme short-term market volatility with high leverage"
    ],
    "correct": 1,
    "explanation": "Hedging involves taking an offsetting derivative position to protect against unfavorable price movements in an underlying asset. (Ref: CIRE Syllabus outcome 8.8 - Prohibited derivative trading practices and undermargined trading)."
  },
  {
    "id": "CIRE-E8-125",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Practical Application: In an advisory relationship between Apex Capital Securities and client Helena Vance: A stock is trading at $58.00. What is the intrinsic value of a Call option with a strike price of $50.00 trading at a premium of $9.50?",
    "options": [
      "Intrinsic Value = $8.00; Time Value = $1.50 ($9.50 total premium - $8.00 intrinsic value)",
      "Intrinsic Value = $9.50; Time Value = $0.00",
      "Intrinsic Value = $50.00; Time Value = $8.00",
      "Intrinsic Value = $0.00; Time Value = $9.50"
    ],
    "correct": 0,
    "explanation": "Call Intrinsic Value = Market Price - Strike = $58 - $50 = $8.00. Time Value = Premium - Intrinsic Value = $9.50 - $8.00 = $1.50. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  },
  {
    "id": "CIRE-E8-126",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "Regulatory Review: During a supervisory compliance check at Maple Leaf Wealth Partners regarding Wei Chen: Which option Greek measures the sensitivity of an option's premium to changes in the implied volatility of the underlying security?",
    "options": [
      "Rho",
      "Delta",
      "Vega",
      "Theta"
    ],
    "correct": 2,
    "explanation": "Vega measures the rate of change in option price for a 1% change in implied volatility. (Delta measures price sensitivity, Theta measures time decay, Rho measures interest rate sensitivity). (Ref: CIRE Syllabus outcome 8.2 - Futures, forwards, swaps, and contracts for difference (CFDs))."
  },
  {
    "id": "CIRE-E8-127",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Apply",
    "question": "Client Inquiry: Client Sarah O'Connor contacts Beacon Securities Ltd. regarding holdings in SU. On which exchange are Canadian exchange-traded stock options and bond futures officially listed and traded?",
    "options": [
      "Bourse de Montr\u00e9al (Montreal Exchange - MX)",
      "Cboe Canada",
      "Toronto Stock Exchange (TSX)",
      "Canadian Securities Exchange (CSE)"
    ],
    "correct": 0,
    "explanation": "The Bourse de Montr\u00e9al (MX) is Canada's dedicated financial derivatives exchange, where all exchange-traded options, index derivatives, and futures are listed. (Ref: CIRE Syllabus outcome 8.3 - Uses of derivatives: hedging, speculation, and arbitrage)."
  },
  {
    "id": "CIRE-E8-128",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Analyze",
    "question": "Scenario: At Laurentian Direct Brokers, Registered Representative is reviewing the portfolio of Antoine Girard. An investor owns 1,000 shares of BCE Inc. purchased at $52.00 and sells 10 BCE Oct 55 Call options at a premium of $1.80. What strategy is this, and what is the primary objective?",
    "options": [
      "Protective Put; designed to eliminate 100% of market downside risk",
      "Bear Call Spread; designed to capture maximum profit if the stock plunges to $0",
      "Long Straddle; designed to profit from a massive volatility breakout in either direction",
      "Covered Call Writing; designed to generate additional income and provide modest downside protection in a neutral-to-moderately-bullish market"
    ],
    "correct": 3,
    "explanation": "A covered call involves selling call options against long stock to earn premium income, capping upside profit at the strike price while providing downside cushion equal to the premium. (Ref: CIRE Syllabus outcome 8.4 - Transactional elements: intrinsic value, time value, volatility, mark-to-market)."
  },
  {
    "id": "CIRE-E8-129",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Remember",
    "question": "Compliance Case Study: An audit at Great North Capital evaluates a recent transaction in POW for client Fatima Zahra. An investor holding 500 shares of a bank stock at $80.00 buys 5 Oct 75 Put options at $2.00. What is the maximum loss per share for the investor down to zero?",
    "options": [
      "$80.00 per share if the company goes bankrupt",
      "$2.00 per share",
      "$7.00 per share ($5.00 stock decline down to the $75 strike + $2.00 put premium)",
      "$75.00 per share"
    ],
    "correct": 2,
    "explanation": "The put guarantees a sale at $75. Loss on stock = $80 - $75 = $5. Plus $2 premium paid = $7 maximum loss per share, regardless of how far the stock falls. (Ref: CIRE Syllabus outcome 8.5 - Listed vs. over-the-counter (OTC) derivative markets)."
  },
  {
    "id": "CIRE-E8-130",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "Practical Application: In an advisory relationship between Pacific Crest Securities and client Carlos Gomez: When would an options trader establish a 'Long Straddle' (buying a Call and a Put with the same strike price and expiration)?",
    "options": [
      "When the trader expects high volatility and a substantial price movement, but is uncertain of the direction",
      "When the trader wishes to lock in an annual dividend payout",
      "When the trader wants to write naked options to collect income",
      "When the trader expects the stock to remain completely flat with zero price movement"
    ],
    "correct": 0,
    "explanation": "A long straddle profits from sharp price swings in either direction, exceeding the combined cost of the call and put premiums. (Ref: CIRE Syllabus outcome 8.6 - Single and multi-legged strategies: covered calls, protective puts, spreads, straddles)."
  },
  {
    "id": "CIRE-E8-131",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Apply",
    "question": "Regulatory Review: During a supervisory compliance check at St. Lawrence Financial regarding Priya Sharma: Before an Approved Person can execute options trades for a client, who within the Investment Dealer must approve the Options Account Application?",
    "options": [
      "A designated Supervisory Principal / Branch Manager qualified as a Registered Options Principal (ROP)",
      "The firm's chief technology officer",
      "A hearing officer from the provincial securities commission",
      "The head of the equity clearing department at CDS"
    ],
    "correct": 0,
    "explanation": "Opening an options account requires prior review and written approval by a qualified supervisory principal / Registered Options Principal (ROP). (Ref: CIRE Syllabus outcome 8.7 - Administrative requirements: options agreements, risk disclosure statements)."
  },
  {
    "id": "CIRE-E8-132",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Analyze",
    "question": "Client Inquiry: Client David Leblanc contacts Trillium Investment Partners regarding holdings in WCN. An Approved Person notices that a client's derivative account has fallen undermargined following an overnight market drop. The representative allows the client to enter new speculative derivative positions before meeting the margin deficit. What is the regulatory consequence?",
    "options": [
      "Permitted if the client promises to wire funds within 30 calendar days",
      "Permitted if the representative covers the margin loan out of personal salary",
      "Permitted provided the trades are executed on European-style index options",
      "Strictly prohibited; dealers cannot execute new transactions that increase risk in an undermargined derivative account, and must demand immediate margin or liquidate positions"
    ],
    "correct": 3,
    "explanation": "CIRO rules strictly prohibit trading in undermargined derivative accounts. No new positions that increase margin requirements may be opened until the call is satisfied. (Ref: CIRE Syllabus outcome 8.8 - Prohibited derivative trading practices and undermargined trading)."
  },
  {
    "id": "CIRE-E8-133",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Scenario: At Apex Capital Securities, Registered Representative is reviewing the portfolio of Liam Tremblay. What is the operational difference between an American-style option and a European-style option?",
    "options": [
      "American options are traded in US dollars; European options are traded in Euros",
      "American options cannot be sold before expiry; European options can be traded intraday",
      "An American-style option can be exercised at any time up to and including expiration; a European-style option can only be exercised on the expiration date",
      "American options apply only to commodities; European options apply only to equities"
    ],
    "correct": 2,
    "explanation": "American-style options allow early exercise on any business day up to expiration. European-style options may only be exercised at expiry. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  },
  {
    "id": "CIRE-E8-134",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "Compliance Case Study: An audit at Maple Leaf Wealth Partners evaluates a recent transaction in TD for client Sophie Bouchard. An investor purchases one XYZ Oct 50 Call option at a premium of $3.50. What right does this contract grant to the buyer?",
    "options": [
      "The right (but not the obligation) to purchase 100 shares of XYZ at $50.00 per share on or before the October expiration date",
      "The obligation to sell 100 shares of XYZ at $50.00 per share immediately",
      "The right to sell 100 shares of XYZ at $53.50 per share",
      "The right to receive quarterly dividends directly from XYZ Corp"
    ],
    "correct": 0,
    "explanation": "A call option grants the holder the right to buy the underlying shares at the specified strike price ($50) prior to expiration. (Ref: CIRE Syllabus outcome 8.2 - Futures, forwards, swaps, and contracts for difference (CFDs))."
  },
  {
    "id": "CIRE-E8-135",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Apply",
    "question": "Practical Application: In an advisory relationship between Beacon Securities Ltd. and client Rajesh Patel: What is a primary distinction between an exchange-traded Futures contract and an Over-the-Counter (OTC) Forward contract?",
    "options": [
      "Futures have customized strike dates and contract sizes, whereas forwards are standardized",
      "Forwards require daily variation margin payments, whereas futures settle only at maturity",
      "Futures are standardized contracts cleared through a central clearinghouse (CDCC) with daily mark-to-market; forwards are customized bilateral agreements with counterparty credit risk",
      "Futures are illegal in Canada under provincial securities regulations"
    ],
    "correct": 2,
    "explanation": "Futures trade on organized exchanges with standardized terms and daily mark-to-market margin, eliminating counterparty risk. Forwards are non-standardized OTC contracts with counterparty risk. (Ref: CIRE Syllabus outcome 8.3 - Uses of derivatives: hedging, speculation, and arbitrage)."
  },
  {
    "id": "CIRE-E8-136",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Analyze",
    "question": "Regulatory Review: During a supervisory compliance check at Laurentian Direct Brokers regarding Chloe Desjardins: What is the primary motivation of a portfolio manager who enters into a 'Hedging' transaction using derivatives?",
    "options": [
      "To maximize portfolio turnover and generate advisory commissions",
      "To reduce or eliminate the risk of adverse price movements in an existing portfolio holding",
      "To guarantee a higher ranking in national mutual fund performance tables",
      "To speculate on extreme short-term market volatility with high leverage"
    ],
    "correct": 1,
    "explanation": "Hedging involves taking an offsetting derivative position to protect against unfavorable price movements in an underlying asset. (Ref: CIRE Syllabus outcome 8.4 - Transactional elements: intrinsic value, time value, volatility, mark-to-market)."
  },
  {
    "id": "CIRE-E8-137",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Remember",
    "question": "Client Inquiry: Client Dmitri Ivanov contacts Great North Capital regarding holdings in CNR. A stock is trading at $58.00. What is the intrinsic value of a Call option with a strike price of $50.00 trading at a premium of $9.50?",
    "options": [
      "Intrinsic Value = $0.00; Time Value = $9.50",
      "Intrinsic Value = $8.00; Time Value = $1.50 ($9.50 total premium - $8.00 intrinsic value)",
      "Intrinsic Value = $50.00; Time Value = $8.00",
      "Intrinsic Value = $9.50; Time Value = $0.00"
    ],
    "correct": 1,
    "explanation": "Call Intrinsic Value = Market Price - Strike = $58 - $50 = $8.00. Time Value = Premium - Intrinsic Value = $9.50 - $8.00 = $1.50. (Ref: CIRE Syllabus outcome 8.5 - Listed vs. over-the-counter (OTC) derivative markets)."
  },
  {
    "id": "CIRE-E8-138",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "Scenario: At Pacific Crest Securities, Registered Representative is reviewing the portfolio of Amira Al-Mansoor. Which option Greek measures the sensitivity of an option's premium to changes in the implied volatility of the underlying security?",
    "options": [
      "Delta",
      "Rho",
      "Vega",
      "Theta"
    ],
    "correct": 2,
    "explanation": "Vega measures the rate of change in option price for a 1% change in implied volatility. (Delta measures price sensitivity, Theta measures time decay, Rho measures interest rate sensitivity). (Ref: CIRE Syllabus outcome 8.6 - Single and multi-legged strategies: covered calls, protective puts, spreads, straddles)."
  },
  {
    "id": "CIRE-E8-139",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Apply",
    "question": "Compliance Case Study: An audit at St. Lawrence Financial evaluates a recent transaction in SHOP for client Marcus Campbell. On which exchange are Canadian exchange-traded stock options and bond futures officially listed and traded?",
    "options": [
      "Bourse de Montr\u00e9al (Montreal Exchange - MX)",
      "Toronto Stock Exchange (TSX)",
      "Canadian Securities Exchange (CSE)",
      "Cboe Canada"
    ],
    "correct": 0,
    "explanation": "The Bourse de Montr\u00e9al (MX) is Canada's dedicated financial derivatives exchange, where all exchange-traded options, index derivatives, and futures are listed. (Ref: CIRE Syllabus outcome 8.7 - Administrative requirements: options agreements, risk disclosure statements)."
  },
  {
    "id": "CIRE-E8-140",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Analyze",
    "question": "Practical Application: In an advisory relationship between Trillium Investment Partners and client Helena Vance: An investor owns 1,000 shares of BCE Inc. purchased at $52.00 and sells 10 BCE Oct 55 Call options at a premium of $1.80. What strategy is this, and what is the primary objective?",
    "options": [
      "Bear Call Spread; designed to capture maximum profit if the stock plunges to $0",
      "Covered Call Writing; designed to generate additional income and provide modest downside protection in a neutral-to-moderately-bullish market",
      "Protective Put; designed to eliminate 100% of market downside risk",
      "Long Straddle; designed to profit from a massive volatility breakout in either direction"
    ],
    "correct": 1,
    "explanation": "A covered call involves selling call options against long stock to earn premium income, capping upside profit at the strike price while providing downside cushion equal to the premium. (Ref: CIRE Syllabus outcome 8.8 - Prohibited derivative trading practices and undermargined trading)."
  },
  {
    "id": "CIRE-E8-141",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Regulatory Review: During a supervisory compliance check at Apex Capital Securities regarding Wei Chen: An investor holding 500 shares of a bank stock at $80.00 buys 5 Oct 75 Put options at $2.00. What is the maximum loss per share for the investor down to zero?",
    "options": [
      "$75.00 per share",
      "$80.00 per share if the company goes bankrupt",
      "$2.00 per share",
      "$7.00 per share ($5.00 stock decline down to the $75 strike + $2.00 put premium)"
    ],
    "correct": 3,
    "explanation": "The put guarantees a sale at $75. Loss on stock = $80 - $75 = $5. Plus $2 premium paid = $7 maximum loss per share, regardless of how far the stock falls. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  },
  {
    "id": "CIRE-E8-142",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "Client Inquiry: Client Sarah O'Connor contacts Maple Leaf Wealth Partners regarding holdings in SU. When would an options trader establish a 'Long Straddle' (buying a Call and a Put with the same strike price and expiration)?",
    "options": [
      "When the trader wants to write naked options to collect income",
      "When the trader expects high volatility and a substantial price movement, but is uncertain of the direction",
      "When the trader wishes to lock in an annual dividend payout",
      "When the trader expects the stock to remain completely flat with zero price movement"
    ],
    "correct": 1,
    "explanation": "A long straddle profits from sharp price swings in either direction, exceeding the combined cost of the call and put premiums. (Ref: CIRE Syllabus outcome 8.2 - Futures, forwards, swaps, and contracts for difference (CFDs))."
  },
  {
    "id": "CIRE-E8-143",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Apply",
    "question": "Scenario: At Beacon Securities Ltd., Registered Representative is reviewing the portfolio of Antoine Girard. Before an Approved Person can execute options trades for a client, who within the Investment Dealer must approve the Options Account Application?",
    "options": [
      "The firm's chief technology officer",
      "A designated Supervisory Principal / Branch Manager qualified as a Registered Options Principal (ROP)",
      "A hearing officer from the provincial securities commission",
      "The head of the equity clearing department at CDS"
    ],
    "correct": 1,
    "explanation": "Opening an options account requires prior review and written approval by a qualified supervisory principal / Registered Options Principal (ROP). (Ref: CIRE Syllabus outcome 8.3 - Uses of derivatives: hedging, speculation, and arbitrage)."
  },
  {
    "id": "CIRE-E8-144",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Analyze",
    "question": "Compliance Case Study: An audit at Laurentian Direct Brokers evaluates a recent transaction in POW for client Fatima Zahra. An Approved Person notices that a client's derivative account has fallen undermargined following an overnight market drop. The representative allows the client to enter new speculative derivative positions before meeting the margin deficit. What is the regulatory consequence?",
    "options": [
      "Permitted if the representative covers the margin loan out of personal salary",
      "Permitted if the client promises to wire funds within 30 calendar days",
      "Strictly prohibited; dealers cannot execute new transactions that increase risk in an undermargined derivative account, and must demand immediate margin or liquidate positions",
      "Permitted provided the trades are executed on European-style index options"
    ],
    "correct": 2,
    "explanation": "CIRO rules strictly prohibit trading in undermargined derivative accounts. No new positions that increase margin requirements may be opened until the call is satisfied. (Ref: CIRE Syllabus outcome 8.4 - Transactional elements: intrinsic value, time value, volatility, mark-to-market)."
  },
  {
    "id": "CIRE-E8-145",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Remember",
    "question": "Practical Application: In an advisory relationship between Great North Capital and client Carlos Gomez: What is the operational difference between an American-style option and a European-style option?",
    "options": [
      "American options are traded in US dollars; European options are traded in Euros",
      "American options apply only to commodities; European options apply only to equities",
      "American options cannot be sold before expiry; European options can be traded intraday",
      "An American-style option can be exercised at any time up to and including expiration; a European-style option can only be exercised on the expiration date"
    ],
    "correct": 3,
    "explanation": "American-style options allow early exercise on any business day up to expiration. European-style options may only be exercised at expiry. (Ref: CIRE Syllabus outcome 8.5 - Listed vs. over-the-counter (OTC) derivative markets)."
  },
  {
    "id": "CIRE-E8-146",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "Regulatory Review: During a supervisory compliance check at Pacific Crest Securities regarding Priya Sharma: An investor purchases one XYZ Oct 50 Call option at a premium of $3.50. What right does this contract grant to the buyer?",
    "options": [
      "The right to receive quarterly dividends directly from XYZ Corp",
      "The right to sell 100 shares of XYZ at $53.50 per share",
      "The obligation to sell 100 shares of XYZ at $50.00 per share immediately",
      "The right (but not the obligation) to purchase 100 shares of XYZ at $50.00 per share on or before the October expiration date"
    ],
    "correct": 3,
    "explanation": "A call option grants the holder the right to buy the underlying shares at the specified strike price ($50) prior to expiration. (Ref: CIRE Syllabus outcome 8.6 - Single and multi-legged strategies: covered calls, protective puts, spreads, straddles)."
  },
  {
    "id": "CIRE-E8-147",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Apply",
    "question": "Client Inquiry: Client David Leblanc contacts St. Lawrence Financial regarding holdings in WCN. What is a primary distinction between an exchange-traded Futures contract and an Over-the-Counter (OTC) Forward contract?",
    "options": [
      "Futures are standardized contracts cleared through a central clearinghouse (CDCC) with daily mark-to-market; forwards are customized bilateral agreements with counterparty credit risk",
      "Futures are illegal in Canada under provincial securities regulations",
      "Forwards require daily variation margin payments, whereas futures settle only at maturity",
      "Futures have customized strike dates and contract sizes, whereas forwards are standardized"
    ],
    "correct": 0,
    "explanation": "Futures trade on organized exchanges with standardized terms and daily mark-to-market margin, eliminating counterparty risk. Forwards are non-standardized OTC contracts with counterparty risk. (Ref: CIRE Syllabus outcome 8.7 - Administrative requirements: options agreements, risk disclosure statements)."
  },
  {
    "id": "CIRE-E8-148",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Analyze",
    "question": "Scenario: At Trillium Investment Partners, Registered Representative is reviewing the portfolio of Liam Tremblay. What is the primary motivation of a portfolio manager who enters into a 'Hedging' transaction using derivatives?",
    "options": [
      "To guarantee a higher ranking in national mutual fund performance tables",
      "To reduce or eliminate the risk of adverse price movements in an existing portfolio holding",
      "To maximize portfolio turnover and generate advisory commissions",
      "To speculate on extreme short-term market volatility with high leverage"
    ],
    "correct": 1,
    "explanation": "Hedging involves taking an offsetting derivative position to protect against unfavorable price movements in an underlying asset. (Ref: CIRE Syllabus outcome 8.8 - Prohibited derivative trading practices and undermargined trading)."
  },
  {
    "id": "CIRE-E8-149",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Compliance Case Study: An audit at Apex Capital Securities evaluates a recent transaction in TD for client Sophie Bouchard. A stock is trading at $58.00. What is the intrinsic value of a Call option with a strike price of $50.00 trading at a premium of $9.50?",
    "options": [
      "Intrinsic Value = $9.50; Time Value = $0.00",
      "Intrinsic Value = $50.00; Time Value = $8.00",
      "Intrinsic Value = $8.00; Time Value = $1.50 ($9.50 total premium - $8.00 intrinsic value)",
      "Intrinsic Value = $0.00; Time Value = $9.50"
    ],
    "correct": 2,
    "explanation": "Call Intrinsic Value = Market Price - Strike = $58 - $50 = $8.00. Time Value = Premium - Intrinsic Value = $9.50 - $8.00 = $1.50. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  },
  {
    "id": "CIRE-E8-150",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "Practical Application: In an advisory relationship between Maple Leaf Wealth Partners and client Rajesh Patel: Which option Greek measures the sensitivity of an option's premium to changes in the implied volatility of the underlying security?",
    "options": [
      "Theta",
      "Rho",
      "Vega",
      "Delta"
    ],
    "correct": 2,
    "explanation": "Vega measures the rate of change in option price for a 1% change in implied volatility. (Delta measures price sensitivity, Theta measures time decay, Rho measures interest rate sensitivity). (Ref: CIRE Syllabus outcome 8.2 - Futures, forwards, swaps, and contracts for difference (CFDs))."
  },
  {
    "id": "CIRE-E8-151",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Apply",
    "question": "Regulatory Review: During a supervisory compliance check at Beacon Securities Ltd. regarding Chloe Desjardins: On which exchange are Canadian exchange-traded stock options and bond futures officially listed and traded?",
    "options": [
      "Toronto Stock Exchange (TSX)",
      "Cboe Canada",
      "Canadian Securities Exchange (CSE)",
      "Bourse de Montr\u00e9al (Montreal Exchange - MX)"
    ],
    "correct": 3,
    "explanation": "The Bourse de Montr\u00e9al (MX) is Canada's dedicated financial derivatives exchange, where all exchange-traded options, index derivatives, and futures are listed. (Ref: CIRE Syllabus outcome 8.3 - Uses of derivatives: hedging, speculation, and arbitrage)."
  },
  {
    "id": "CIRE-E8-152",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Analyze",
    "question": "Client Inquiry: Client Dmitri Ivanov contacts Laurentian Direct Brokers regarding holdings in CNR. An investor owns 1,000 shares of BCE Inc. purchased at $52.00 and sells 10 BCE Oct 55 Call options at a premium of $1.80. What strategy is this, and what is the primary objective?",
    "options": [
      "Bear Call Spread; designed to capture maximum profit if the stock plunges to $0",
      "Long Straddle; designed to profit from a massive volatility breakout in either direction",
      "Covered Call Writing; designed to generate additional income and provide modest downside protection in a neutral-to-moderately-bullish market",
      "Protective Put; designed to eliminate 100% of market downside risk"
    ],
    "correct": 2,
    "explanation": "A covered call involves selling call options against long stock to earn premium income, capping upside profit at the strike price while providing downside cushion equal to the premium. (Ref: CIRE Syllabus outcome 8.4 - Transactional elements: intrinsic value, time value, volatility, mark-to-market)."
  },
  {
    "id": "CIRE-E8-153",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Remember",
    "question": "Scenario: At Great North Capital, Registered Representative is reviewing the portfolio of Amira Al-Mansoor. An investor holding 500 shares of a bank stock at $80.00 buys 5 Oct 75 Put options at $2.00. What is the maximum loss per share for the investor down to zero?",
    "options": [
      "$7.00 per share ($5.00 stock decline down to the $75 strike + $2.00 put premium)",
      "$2.00 per share",
      "$80.00 per share if the company goes bankrupt",
      "$75.00 per share"
    ],
    "correct": 0,
    "explanation": "The put guarantees a sale at $75. Loss on stock = $80 - $75 = $5. Plus $2 premium paid = $7 maximum loss per share, regardless of how far the stock falls. (Ref: CIRE Syllabus outcome 8.5 - Listed vs. over-the-counter (OTC) derivative markets)."
  },
  {
    "id": "CIRE-E8-154",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "Compliance Case Study: An audit at Pacific Crest Securities evaluates a recent transaction in SHOP for client Marcus Campbell. When would an options trader establish a 'Long Straddle' (buying a Call and a Put with the same strike price and expiration)?",
    "options": [
      "When the trader wishes to lock in an annual dividend payout",
      "When the trader expects the stock to remain completely flat with zero price movement",
      "When the trader expects high volatility and a substantial price movement, but is uncertain of the direction",
      "When the trader wants to write naked options to collect income"
    ],
    "correct": 2,
    "explanation": "A long straddle profits from sharp price swings in either direction, exceeding the combined cost of the call and put premiums. (Ref: CIRE Syllabus outcome 8.6 - Single and multi-legged strategies: covered calls, protective puts, spreads, straddles)."
  },
  {
    "id": "CIRE-E8-155",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Apply",
    "question": "Practical Application: In an advisory relationship between St. Lawrence Financial and client Helena Vance: Before an Approved Person can execute options trades for a client, who within the Investment Dealer must approve the Options Account Application?",
    "options": [
      "A designated Supervisory Principal / Branch Manager qualified as a Registered Options Principal (ROP)",
      "The head of the equity clearing department at CDS",
      "A hearing officer from the provincial securities commission",
      "The firm's chief technology officer"
    ],
    "correct": 0,
    "explanation": "Opening an options account requires prior review and written approval by a qualified supervisory principal / Registered Options Principal (ROP). (Ref: CIRE Syllabus outcome 8.7 - Administrative requirements: options agreements, risk disclosure statements)."
  },
  {
    "id": "CIRE-E8-156",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Analyze",
    "question": "Regulatory Review: During a supervisory compliance check at Trillium Investment Partners regarding Wei Chen: An Approved Person notices that a client's derivative account has fallen undermargined following an overnight market drop. The representative allows the client to enter new speculative derivative positions before meeting the margin deficit. What is the regulatory consequence?",
    "options": [
      "Permitted if the representative covers the margin loan out of personal salary",
      "Permitted provided the trades are executed on European-style index options",
      "Permitted if the client promises to wire funds within 30 calendar days",
      "Strictly prohibited; dealers cannot execute new transactions that increase risk in an undermargined derivative account, and must demand immediate margin or liquidate positions"
    ],
    "correct": 3,
    "explanation": "CIRO rules strictly prohibit trading in undermargined derivative accounts. No new positions that increase margin requirements may be opened until the call is satisfied. (Ref: CIRE Syllabus outcome 8.8 - Prohibited derivative trading practices and undermargined trading)."
  },
  {
    "id": "CIRE-E8-157",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Client Inquiry: Client Sarah O'Connor contacts Apex Capital Securities regarding holdings in SU. What is the operational difference between an American-style option and a European-style option?",
    "options": [
      "American options apply only to commodities; European options apply only to equities",
      "American options are traded in US dollars; European options are traded in Euros",
      "An American-style option can be exercised at any time up to and including expiration; a European-style option can only be exercised on the expiration date",
      "American options cannot be sold before expiry; European options can be traded intraday"
    ],
    "correct": 2,
    "explanation": "American-style options allow early exercise on any business day up to expiration. European-style options may only be exercised at expiry. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  },
  {
    "id": "CIRE-E8-158",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.2",
    "subOutcomeTitle": "Futures, forwards, swaps, and contracts for difference (CFDs)",
    "cognitiveLevel": "Understand",
    "question": "Scenario: At Maple Leaf Wealth Partners, Registered Representative is reviewing the portfolio of Antoine Girard. An investor purchases one XYZ Oct 50 Call option at a premium of $3.50. What right does this contract grant to the buyer?",
    "options": [
      "The obligation to sell 100 shares of XYZ at $50.00 per share immediately",
      "The right to receive quarterly dividends directly from XYZ Corp",
      "The right (but not the obligation) to purchase 100 shares of XYZ at $50.00 per share on or before the October expiration date",
      "The right to sell 100 shares of XYZ at $53.50 per share"
    ],
    "correct": 2,
    "explanation": "A call option grants the holder the right to buy the underlying shares at the specified strike price ($50) prior to expiration. (Ref: CIRE Syllabus outcome 8.2 - Futures, forwards, swaps, and contracts for difference (CFDs))."
  },
  {
    "id": "CIRE-E8-159",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.3",
    "subOutcomeTitle": "Uses of derivatives: hedging, speculation, and arbitrage",
    "cognitiveLevel": "Apply",
    "question": "Compliance Case Study: An audit at Beacon Securities Ltd. evaluates a recent transaction in POW for client Fatima Zahra. What is a primary distinction between an exchange-traded Futures contract and an Over-the-Counter (OTC) Forward contract?",
    "options": [
      "Futures are illegal in Canada under provincial securities regulations",
      "Forwards require daily variation margin payments, whereas futures settle only at maturity",
      "Futures have customized strike dates and contract sizes, whereas forwards are standardized",
      "Futures are standardized contracts cleared through a central clearinghouse (CDCC) with daily mark-to-market; forwards are customized bilateral agreements with counterparty credit risk"
    ],
    "correct": 3,
    "explanation": "Futures trade on organized exchanges with standardized terms and daily mark-to-market margin, eliminating counterparty risk. Forwards are non-standardized OTC contracts with counterparty risk. (Ref: CIRE Syllabus outcome 8.3 - Uses of derivatives: hedging, speculation, and arbitrage)."
  },
  {
    "id": "CIRE-E8-160",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.4",
    "subOutcomeTitle": "Transactional elements: intrinsic value, time value, volatility, mark-to-market",
    "cognitiveLevel": "Analyze",
    "question": "Practical Application: In an advisory relationship between Laurentian Direct Brokers and client Carlos Gomez: What is the primary motivation of a portfolio manager who enters into a 'Hedging' transaction using derivatives?",
    "options": [
      "To speculate on extreme short-term market volatility with high leverage",
      "To reduce or eliminate the risk of adverse price movements in an existing portfolio holding",
      "To maximize portfolio turnover and generate advisory commissions",
      "To guarantee a higher ranking in national mutual fund performance tables"
    ],
    "correct": 1,
    "explanation": "Hedging involves taking an offsetting derivative position to protect against unfavorable price movements in an underlying asset. (Ref: CIRE Syllabus outcome 8.4 - Transactional elements: intrinsic value, time value, volatility, mark-to-market)."
  },
  {
    "id": "CIRE-E8-161",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.5",
    "subOutcomeTitle": "Listed vs. over-the-counter (OTC) derivative markets",
    "cognitiveLevel": "Remember",
    "question": "Regulatory Review: During a supervisory compliance check at Great North Capital regarding Priya Sharma: A stock is trading at $58.00. What is the intrinsic value of a Call option with a strike price of $50.00 trading at a premium of $9.50?",
    "options": [
      "Intrinsic Value = $0.00; Time Value = $9.50",
      "Intrinsic Value = $9.50; Time Value = $0.00",
      "Intrinsic Value = $50.00; Time Value = $8.00",
      "Intrinsic Value = $8.00; Time Value = $1.50 ($9.50 total premium - $8.00 intrinsic value)"
    ],
    "correct": 3,
    "explanation": "Call Intrinsic Value = Market Price - Strike = $58 - $50 = $8.00. Time Value = Premium - Intrinsic Value = $9.50 - $8.00 = $1.50. (Ref: CIRE Syllabus outcome 8.5 - Listed vs. over-the-counter (OTC) derivative markets)."
  },
  {
    "id": "CIRE-E8-162",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.6",
    "subOutcomeTitle": "Single and multi-legged strategies: covered calls, protective puts, spreads, straddles",
    "cognitiveLevel": "Understand",
    "question": "Client Inquiry: Client David Leblanc contacts Pacific Crest Securities regarding holdings in WCN. Which option Greek measures the sensitivity of an option's premium to changes in the implied volatility of the underlying security?",
    "options": [
      "Theta",
      "Delta",
      "Vega",
      "Rho"
    ],
    "correct": 2,
    "explanation": "Vega measures the rate of change in option price for a 1% change in implied volatility. (Delta measures price sensitivity, Theta measures time decay, Rho measures interest rate sensitivity). (Ref: CIRE Syllabus outcome 8.6 - Single and multi-legged strategies: covered calls, protective puts, spreads, straddles)."
  },
  {
    "id": "CIRE-E8-163",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.7",
    "subOutcomeTitle": "Administrative requirements: options agreements, risk disclosure statements",
    "cognitiveLevel": "Apply",
    "question": "Scenario: At St. Lawrence Financial, Registered Representative is reviewing the portfolio of Liam Tremblay. On which exchange are Canadian exchange-traded stock options and bond futures officially listed and traded?",
    "options": [
      "Canadian Securities Exchange (CSE)",
      "Toronto Stock Exchange (TSX)",
      "Bourse de Montr\u00e9al (Montreal Exchange - MX)",
      "Cboe Canada"
    ],
    "correct": 2,
    "explanation": "The Bourse de Montr\u00e9al (MX) is Canada's dedicated financial derivatives exchange, where all exchange-traded options, index derivatives, and futures are listed. (Ref: CIRE Syllabus outcome 8.7 - Administrative requirements: options agreements, risk disclosure statements)."
  },
  {
    "id": "CIRE-E8-164",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.8",
    "subOutcomeTitle": "Prohibited derivative trading practices and undermargined trading",
    "cognitiveLevel": "Analyze",
    "question": "Compliance Case Study: An audit at Trillium Investment Partners evaluates a recent transaction in TD for client Sophie Bouchard. An investor owns 1,000 shares of BCE Inc. purchased at $52.00 and sells 10 BCE Oct 55 Call options at a premium of $1.80. What strategy is this, and what is the primary objective?",
    "options": [
      "Covered Call Writing; designed to generate additional income and provide modest downside protection in a neutral-to-moderately-bullish market",
      "Long Straddle; designed to profit from a massive volatility breakout in either direction",
      "Bear Call Spread; designed to capture maximum profit if the stock plunges to $0",
      "Protective Put; designed to eliminate 100% of market downside risk"
    ],
    "correct": 0,
    "explanation": "A covered call involves selling call options against long stock to earn premium income, capping upside profit at the strike price while providing downside cushion equal to the premium. (Ref: CIRE Syllabus outcome 8.8 - Prohibited derivative trading practices and undermargined trading)."
  },
  {
    "id": "CIRE-E8-165",
    "element": 8,
    "elementTitle": "Derivatives",
    "subOutcome": "8.1",
    "subOutcomeTitle": "Options contract types: calls, puts, American vs. European style",
    "cognitiveLevel": "Remember",
    "question": "Practical Application: In an advisory relationship between Apex Capital Securities and client Rajesh Patel: An investor holding 500 shares of a bank stock at $80.00 buys 5 Oct 75 Put options at $2.00. What is the maximum loss per share for the investor down to zero?",
    "options": [
      "$2.00 per share",
      "$80.00 per share if the company goes bankrupt",
      "$7.00 per share ($5.00 stock decline down to the $75 strike + $2.00 put premium)",
      "$75.00 per share"
    ],
    "correct": 2,
    "explanation": "The put guarantees a sale at $75. Loss on stock = $80 - $75 = $5. Plus $2 premium paid = $7 maximum loss per share, regardless of how far the stock falls. (Ref: CIRE Syllabus outcome 8.1 - Options contract types: calls, puts, American vs. European style)."
  }
];
