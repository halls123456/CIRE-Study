/* Independent CIRE practice: Element 6 */
window.CIRE_QUESTIONS_E6 = [
  {
    "id": "CIRE-E6-002",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.1",
    "subOutcomeTitle": "UMIR: Best execution, manipulative practices, front running, DEA, principal trading",
    "cognitiveLevel": "Remember",
    "question": "An Approved Person receives a client market order to purchase 250,000 shares of a TSX stock. Before entering the client order, the representative buys 2,000 shares in their personal account. Which UMIR rule is violated?",
    "options": [
      "Rule 4.1 Front Running (trading ahead of a client order that can reasonably be expected to affect market price)",
      "Rule 5.2 Best Execution of non-protected orders",
      "Rule 6.3 Cross trading restrictions",
      "Rule 8.1 Margin calculation guidelines"
    ],
    "correct": 0,
    "explanation": "Front running under UMIR Rule 4.1 occurs when a participant trades ahead of a client order that can reasonably affect market price, taking advantage of the client's market impact.",
    "provenance": "retained-original"
  },
  {
    "id": "CIRE-E6-004",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.3",
    "subOutcomeTitle": "Applying gatekeeping: suspicious transactions, insider trading, whistleblowers",
    "cognitiveLevel": "Understand",
    "question": "A trader repeatedly buys and sells shares of a small-cap company between two accounts owned by the same beneficial owner with no change in beneficial ownership. What manipulative practice is this?",
    "options": [
      "Pre-Hedging",
      "Wash Trading",
      "Iceberg Splitting",
      "Front Running"
    ],
    "correct": 1,
    "explanation": "Wash trading involves transactions that create a false or misleading appearance of active trading without any genuine change in beneficial ownership.",
    "provenance": "retained-original"
  },
  {
    "id": "CIRE-E6-005",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.3",
    "subOutcomeTitle": "Applying gatekeeping: suspicious transactions, insider trading, whistleblowers",
    "cognitiveLevel": "Remember",
    "question": "A market participant enters large limit buy orders with the intention of cancelling them immediately before execution, aiming to create a false appearance of demand and drive up the price. What is this illegal practice called?",
    "options": [
      "Spoofing / Layering",
      "Marking the Close",
      "Cornering the Float",
      "High-Closing"
    ],
    "correct": 0,
    "explanation": "Spoofing and layering involve submitting non-bona fide orders that the trader intends to cancel before execution to manipulate market perception and prices.",
    "provenance": "retained-original"
  },
  {
    "id": "CIRE-E6-006",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.4",
    "subOutcomeTitle": "Basic function and purpose of investment banking, research, corporate finance",
    "cognitiveLevel": "Understand",
    "question": "Why must an Investment Dealer maintain an 'Information Barrier' (Chinese Wall) between its Investment Banking division and its Equity Research/Retail Trading desks?",
    "options": [
      "To ensure that retail representatives do not share computer software licenses",
      "To prevent research analysts from knowing current market stock prices",
      "To prevent material non-public inside information regarding pending mergers or underwritings from leaking to trading desks or retail advisers",
      "To comply with federal labor union collective bargaining rules"
    ],
    "correct": 2,
    "explanation": "Information barriers physically and electronically separate corporate finance/M&A from research and sales to prevent the misuse of material non-public information.",
    "provenance": "retained-original"
  },
  {
    "id": "CIRE-E6-007",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.5",
    "subOutcomeTitle": "Order entry, trading desks, algorithmic trading, and T+1 settlement",
    "cognitiveLevel": "Remember",
    "question": "What is the standard clearing and settlement cycle for Canadian equity and corporate bond transactions in Canada (harmonized with the US in May 2024)?",
    "options": [
      "T+2 (Trade date plus two business days)",
      "T+3 (Trade date plus three business days)",
      "T+0 (Immediate real-time gross settlement)",
      "T+1 (Trade date plus one business day)"
    ],
    "correct": 3,
    "explanation": "In May 2024, Canada and the US transitioned the standard settlement cycle for equities, corporate debt, and unit trusts to T+1 (one business day after trade date).",
    "provenance": "retained-original"
  },
  {
    "id": "CIRE-E6-008",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.6",
    "subOutcomeTitle": "Features of order types: market, limit, IOC, FOK, stop, iceberg, short sales",
    "cognitiveLevel": "Understand",
    "question": "A client holds shares of ABC Corp trading at $45. To protect against a sharp decline, the client enters an order: 'Sell 500 shares if the price falls to $40.' What type of order is this?",
    "options": [
      "An Iceberg Reserve Order",
      "A Fill-or-Kill (FOK) Order",
      "A Stop-Loss (On-Stop) Order",
      "A Limit Buy Order"
    ],
    "correct": 2,
    "explanation": "A stop-loss order becomes a market order once the stop price ($40) is reached or breached, designed to limit downside loss.",
    "provenance": "retained-original"
  },
  {
    "id": "CIRE-E6-009",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.6",
    "subOutcomeTitle": "Features of order types: market, limit, IOC, FOK, stop, iceberg, short sales",
    "cognitiveLevel": "Remember",
    "question": "What is an 'Iceberg' (or reserve) order?",
    "options": [
      "An order that can only be executed during winter months on the Montreal Exchange",
      "A large order where only a small portion is displayed on the public order book, while the remainder remains hidden until the displayed portion executes",
      "An order that freezes trading across the entire exchange for 15 minutes",
      "An order that guarantees zero execution commission"
    ],
    "correct": 1,
    "explanation": "Iceberg orders allow institutional traders to enter large-volume orders while publicly displaying only a small disclosed tranche, mitigating adverse market impact.",
    "provenance": "retained-original"
  },
  {
    "id": "CIRE-E6-010",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.7",
    "subOutcomeTitle": "Handling order variations, cancellations, and trade corrections",
    "cognitiveLevel": "Understand",
    "question": "If an Approved Person mistakenly buys 1,000 shares of the wrong security for a client account, how must the trade correction be resolved?",
    "options": [
      "Force the client to accept the erroneous trade if the price later rises",
      "Transfer the error to the firm's error account with designated supervisory approval, absorb any loss at the dealer level, and execute the correct order for the client",
      "Secretly sell the shares in another client's account without logging an error",
      "Ask the exchange floor governor to delete the transaction from national records"
    ],
    "correct": 1,
    "explanation": "Trade errors must be moved to the dealer's designated error account with supervisory approval. Clients must not suffer financial loss from firm trade errors.",
    "provenance": "retained-original"
  },
  {
    "id": "CIRE-E6-012",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.9",
    "subOutcomeTitle": "Account features: advisory, OEO, managed, discretionary, and margin",
    "cognitiveLevel": "Understand",
    "question": "Under CIRO rules, for what maximum period can an Approved Person exercise discretionary trading authority over a client account due to temporary client absence or illness?",
    "options": [
      "Up to 30 calendar days only",
      "Up to a maximum of 12 months with prior written client authorization and supervisory approval",
      "Discretionary authority can never be granted under any circumstance",
      "Indefinitely without supervisory oversight"
    ],
    "correct": 1,
    "explanation": "Temporary discretionary authority granted due to absence or illness is capped at 12 months, requiring written client authorization and supervisory review.",
    "provenance": "retained-original"
  },
  {
    "id": "CIRE-E6-013",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.10",
    "subOutcomeTitle": "Margin requirements: long and short margin calculations and calls",
    "cognitiveLevel": "Remember",
    "question": "A client buys $10,000 of shares in a senior TSX-listed company trading at $25.00 (eligible for reduced margin of 30%). What is the minimum margin deposit required from the client, and what is the maximum loan value provided by the dealer?",
    "options": [
      "Client deposit = $10,000 (100%); Maximum dealer loan value = $0 (0%)",
      "Client deposit = $1,000 (10%); Maximum dealer loan value = $9,000 (90%)",
      "Client deposit = $5,000 (50%); Maximum dealer loan value = $5,000 (50%)",
      "Client deposit = $3,000 (30%); Maximum dealer loan value = $7,000 (70%)"
    ],
    "correct": 3,
    "explanation": "For securities >= $2.00 eligible for reduced margin, the margin requirement is 30% ($3,000) and the maximum loan value provided by the dealer is 70% ($7,000).",
    "provenance": "retained-original"
  },
  {
    "id": "CIRE-E6-014",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.10",
    "subOutcomeTitle": "Margin requirements: long and short margin calculations and calls",
    "cognitiveLevel": "Apply",
    "question": "A client purchases 1,000 shares at $20.00 using $6,000 of own equity and $14,000 margin loan (30% margin rate). The share price drops to $15.00. The market value is now $15,000, loan is $14,000, leaving equity of $1,000. Required margin is 30% of $15,000 = $4,500. What is the margin call amount?",
    "options": [
      "$5,000",
      "$3,500 ($4,500 required margin minus $1,000 current equity)",
      "$14,000",
      "$1,000"
    ],
    "correct": 1,
    "explanation": "Required equity is 30% of $15,000 = $4,500. Current equity is $15,000 - $14,000 = $1,000. The margin deficit (call) is $4,500 - $1,000 = $3,500.",
    "provenance": "retained-original"
  },
  {
    "id": "CIRE-E6-N001",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.1",
    "subOutcomeTitle": "UMIR: Best execution, manipulative practices, front running, DEA, principal trading",
    "cognitiveLevel": "Understand",
    "question": "A dealer routes every order to the venue paying the largest rebate without considering execution quality. What is the concern?",
    "options": [
      "The largest rebate always proves best execution.",
      "Client execution costs are irrelevant if the dealer earns a rebate.",
      "Routing decisions are exempt from dealer oversight.",
      "Routing incentives may conflict with obtaining advantageous execution terms for clients."
    ],
    "correct": 3,
    "explanation": "Execution quality involves relevant factors such as price and cost. A dealer benefit alone does not establish a good client outcome.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus",
      "bestExecution",
      "umir"
    ]
  },
  {
    "id": "CIRE-E6-N002",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.2",
    "subOutcomeTitle": "UMIR gatekeeping obligations: purpose, application, requirements",
    "cognitiveLevel": "Understand",
    "question": "A high-volume client says suspicious orders must be accepted because commissions fund the branch. What should the dealer do?",
    "options": [
      "Apply its gatekeeping controls and escalate concerns despite the commercial pressure.",
      "Suspend controls for profitable clients.",
      "Wait for a client admission of manipulation before reviewing.",
      "Treat commission volume as proof of legitimacy."
    ],
    "correct": 0,
    "explanation": "Gatekeeping does not depend on a client's profitability. Suspicious activity needs appropriate review and action.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus",
      "umir"
    ]
  },
  {
    "id": "CIRE-E6-N003",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.3",
    "subOutcomeTitle": "Applying gatekeeping: suspicious transactions, insider trading, whistleblowers",
    "cognitiveLevel": "Apply",
    "question": "A client suddenly places large trades just before repeated takeover announcements, unlike their normal pattern. What should the representative do?",
    "options": [
      "Tell colleagues to copy the trades.",
      "Escalate the pattern through the dealer's surveillance or compliance process for review.",
      "Assume the client must have excellent public research.",
      "Promise the client no records will be kept."
    ],
    "correct": 1,
    "explanation": "The pattern is a red flag requiring review, not proof of wrongdoing. Escalation enables the dealer to assess facts and reporting duties.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus",
      "umir"
    ]
  },
  {
    "id": "CIRE-E6-N004",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.4",
    "subOutcomeTitle": "Basic function and purpose of investment banking, research, corporate finance",
    "cognitiveLevel": "Remember",
    "question": "What is a research department's principal function within an investment dealer?",
    "options": [
      "Holding the central bank's settlement balances.",
      "Adjudicating all client lawsuits.",
      "Analyzing issuers and markets to produce investment research.",
      "Guaranteeing underwriting profits."
    ],
    "correct": 2,
    "explanation": "Research develops analysis and views. Corporate finance and trading perform different functions, with controls needed around information flows.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus",
      "rules"
    ]
  },
  {
    "id": "CIRE-E6-N005",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.5",
    "subOutcomeTitle": "Order entry, trading desks, algorithmic trading, and T+1 settlement",
    "cognitiveLevel": "Apply",
    "question": "A normal T+1 trade executes on a Friday and the following Monday is a market settlement holiday. When is settlement normally due?",
    "options": [
      "Saturday.",
      "Sunday.",
      "Monday despite the holiday.",
      "Tuesday."
    ],
    "correct": 3,
    "explanation": "T+1 means one settlement business day after the trade date. The weekend and settlement holiday are excluded.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus",
      "rules"
    ]
  },
  {
    "id": "CIRE-E6-N006",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.6",
    "subOutcomeTitle": "Features of order types: market, limit, IOC, FOK, stop, iceberg, short sales",
    "cognitiveLevel": "Apply",
    "question": "A client places an immediate-or-cancel order for 1,000 shares. Only 400 can be executed immediately within its limit. What happens?",
    "options": [
      "400 execute and the remaining 600 are cancelled.",
      "All 1,000 must execute or none can.",
      "The remaining 600 automatically stay open until month-end.",
      "All shares execute at any price regardless of the limit."
    ],
    "correct": 0,
    "explanation": "IOC permits an immediate partial fill and cancels the unfilled balance. Fill-or-kill instead requires immediate full execution.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus",
      "rules"
    ]
  },
  {
    "id": "CIRE-E6-N007",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.7",
    "subOutcomeTitle": "Handling order variations, cancellations, and trade corrections",
    "cognitiveLevel": "Understand",
    "question": "A client requests cancellation, but the order executes before cancellation reaches the market. Which statement is correct?",
    "options": [
      "The execution automatically disappears.",
      "A cancellation request does not guarantee that an already executing order can be cancelled.",
      "The dealer may erase the trade record.",
      "The client can keep any gain while rejecting any loss."
    ],
    "correct": 1,
    "explanation": "Timing and confirmed order status matter. The dealer should explain and document the actual outcome using its order-handling procedures.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus",
      "rules"
    ]
  },
  {
    "id": "CIRE-E6-N008",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.8",
    "subOutcomeTitle": "Trade confirmation requirements, fees, and commissions disclosure",
    "cognitiveLevel": "Apply",
    "question": "A client buys 200 shares at $24 and pays a $12 commission with no other charges. What total purchase amount should the confirmation reflect?",
    "options": [
      "$4,800.",
      "$4,788.",
      "$4,812.",
      "$4,824."
    ],
    "correct": 2,
    "explanation": "The shares cost 200 times $24, or $4,800. Add the $12 commission to obtain the total debit.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus",
      "rules"
    ]
  },
  {
    "id": "CIRE-E6-N009",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.9",
    "subOutcomeTitle": "Account features: advisory, OEO, managed, discretionary, and margin",
    "cognitiveLevel": "Understand",
    "question": "What distinguishes a margin account from an otherwise similar cash account?",
    "options": [
      "It guarantees that losses cannot exceed the cash deposited.",
      "It automatically gives the representative discretion.",
      "It removes the obligation to repay a loan after a market decline.",
      "It permits approved borrowing against eligible securities under margin terms."
    ],
    "correct": 3,
    "explanation": "Margin introduces leverage and financing obligations. It is distinct from who makes the investment decisions.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus",
      "rules"
    ]
  },
  {
    "id": "CIRE-E6-N010",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.10",
    "subOutcomeTitle": "Margin requirements: long and short margin calculations and calls",
    "cognitiveLevel": "Apply",
    "question": "An account holds $40,000 of securities against a $22,000 loan. The applicable maintenance equity requirement is 50% of market value. What is the equity deficiency?",
    "options": [
      "$2,000.",
      "$18,000.",
      "$20,000.",
      "$22,000."
    ],
    "correct": 0,
    "explanation": "Actual equity is $18,000. Required equity is $20,000. The shortfall is $2,000 under the stated requirement.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus",
      "rules"
    ]
  },
  {
    "id": "CIRE-E6-N011",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.11",
    "subOutcomeTitle": "Specialized trading agreements for derivative accounts",
    "cognitiveLevel": "Understand",
    "question": "A client with an ordinary cash account asks to begin futures trading immediately. What is the relevant account-administration issue?",
    "options": [
      "The cash-account signature automatically approves every derivative.",
      "The dealer must complete the applicable derivatives account approval, agreements and disclosure requirements.",
      "Only the client's occupation matters.",
      "Derivatives agreements are needed only after a loss."
    ],
    "correct": 1,
    "explanation": "Trading permissions depend on the approved account and product. Existing securities access does not establish derivatives authorization.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus",
      "rules"
    ]
  },
  {
    "id": "CIRE-E6-N012",
    "element": 6,
    "elementTitle": "Market Integrity, Trade Execution and Settlement",
    "subOutcome": "6.12",
    "subOutcomeTitle": "Reporting obligations to firms and regulators",
    "cognitiveLevel": "Understand",
    "question": "A representative identifies potentially reportable misconduct but lacks authority to submit the dealer's regulatory report. What should they do?",
    "options": [
      "Ignore it because they are not the filing officer.",
      "Wait until the next annual performance review.",
      "Promptly report it through the designated internal channel so the dealer can assess and meet its obligations.",
      "Ask the client whether regulators should be informed."
    ],
    "correct": 2,
    "explanation": "Internal escalation and external filing are different responsibilities. Lack of filing authority is not a reason to withhold relevant information.",
    "provenance": "original-2026-09",
    "references": [
      "syllabus",
      "rules"
    ]
  }
];
