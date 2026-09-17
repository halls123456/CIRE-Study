# Question-bank cleanup

Original entries: 3000. Underlying questions: 124. Removed verified duplicates: 2876. Retired misleading or insufficiently qualified originals: 41. Added original practice questions: 110. Live total: **193**.

All 99 numbered outcomes have at least one new question. This is outcome coverage, not a claim that every syllabus bullet is exhausted. New material includes explicit calculation assumptions, comparative reasoning and concrete scenarios; it does not reproduce official exam questions. Learning-level labels describe the exercise, including some practice above the syllabus minimum.

The official syllabus remains the January 2025 edition linked by CIRO at review on September 16, 2026. New explanations include curriculum links and relevant background reading. A syllabus link indicates scope, not independent verification of an answer. General US investor-education links support product mechanics only, never Canadian regulatory requirements. Some elementary economic and arithmetic exercises are original explanatory examples and have curriculum links only. The retained original questions were screened for obvious issues but have not undergone a full independent specialist validation.

## Method and traceability

Every removed duplicate had the complete canonical question as its suffix, the same answer options disregarding order, and the same correct answer text. The extra client names, tickers and introductions did not change the decision. The audit in data/bank-audit.json lists each removed ID and its canonical ID. Identical option sets alone never authorize deletion.

The archive records each retired original and the specific issue. Retired questions are not loaded by the app. In particular, the Bank of Canada's operating-band answer was obsolete: the Bank describes a 30-basis-point band from January 30, 2025, rather than the old 50-basis-point midpoint framework. See [Bank of Canada framework](https://www.bankofcanada.ca/markets/market-operations-liquidity-provision/framework-market-operations-liquidity-provision/).

Surviving original IDs and option order are unchanged. Read-time progress mapping translates duplicate answer positions to the canonical positions and recalculates correctness. The latest timestamp wins when several copies were answered. Retired IDs do not count as active progress. Raw old records remain available in backup exports. Historical mock results remain historical; they are not regraded against the new bank.

## Verification

Run `node scripts/validate-bank.cjs` and `node --test tests/bank.test.cjs`. Validation rejects repeated IDs, normalized stems, verified wrapper copies, invalid answer indices, repeated options, missing explanations, invalid outcome mappings, missing new-question references, incorrect counts and insufficient mock-exam pools. It flags reused option sets and unusually similar stems for editorial review; semantic uniqueness still needs human judgment.

## Coverage

| Outcome | Live questions | New questions |
| --- | ---: | ---: |
| 1.1 | 3 | 1 |
| 1.2 | 2 | 1 |
| 1.3 | 3 | 1 |
| 1.4 | 1 | 1 |
| 1.5 | 2 | 1 |
| 1.6 | 1 | 1 |
| 1.7 | 2 | 1 |
| 1.8 | 2 | 1 |
| 1.9 | 1 | 1 |
| 1.10 | 2 | 1 |
| 1.11 | 1 | 1 |
| 2.1 | 2 | 1 |
| 2.2 | 3 | 1 |
| 2.3 | 1 | 1 |
| 2.4 | 3 | 1 |
| 2.5 | 1 | 1 |
| 2.6 | 2 | 1 |
| 2.7 | 2 | 1 |
| 2.8 | 2 | 1 |
| 2.9 | 2 | 1 |
| 2.10 | 1 | 1 |
| 2.11 | 1 | 1 |
| 3.1 | 2 | 1 |
| 3.2 | 2 | 1 |
| 3.3 | 1 | 1 |
| 3.4 | 2 | 1 |
| 3.5 | 2 | 1 |
| 3.6 | 2 | 1 |
| 3.7 | 2 | 1 |
| 3.8 | 1 | 1 |
| 3.9 | 2 | 1 |
| 3.10 | 2 | 1 |
| 3.11 | 2 | 1 |
| 3.12 | 1 | 1 |
| 3.13 | 1 | 1 |
| 3.14 | 2 | 1 |
| 3.15 | 2 | 1 |
| 3.16 | 2 | 1 |
| 3.17 | 1 | 1 |
| 4.1 | 1 | 1 |
| 4.2 | 2 | 1 |
| 4.3 | 2 | 1 |
| 4.4 | 1 | 1 |
| 4.5 | 1 | 1 |
| 4.6 | 2 | 1 |
| 4.7 | 2 | 1 |
| 5.1 | 3 | 1 |
| 5.2 | 2 | 1 |
| 5.3 | 3 | 1 |
| 5.4 | 2 | 1 |
| 5.5 | 2 | 1 |
| 5.6 | 3 | 1 |
| 5.7 | 4 | 1 |
| 5.8 | 2 | 1 |
| 5.9 | 2 | 1 |
| 6.1 | 2 | 1 |
| 6.2 | 1 | 1 |
| 6.3 | 3 | 1 |
| 6.4 | 2 | 1 |
| 6.5 | 2 | 1 |
| 6.6 | 3 | 1 |
| 6.7 | 2 | 1 |
| 6.8 | 1 | 1 |
| 6.9 | 2 | 1 |
| 6.10 | 3 | 1 |
| 6.11 | 1 | 1 |
| 6.12 | 1 | 1 |
| 7.1 | 1 | 1 |
| 7.2 | 3 | 2 |
| 7.3 | 3 | 1 |
| 7.4 | 3 | 2 |
| 7.5 | 4 | 2 |
| 7.6 | 2 | 1 |
| 7.7 | 2 | 1 |
| 7.8 | 2 | 2 |
| 7.9 | 2 | 1 |
| 7.10 | 2 | 2 |
| 7.11 | 2 | 2 |
| 7.12 | 2 | 1 |
| 8.1 | 2 | 1 |
| 8.2 | 1 | 1 |
| 8.3 | 2 | 1 |
| 8.4 | 3 | 1 |
| 8.5 | 1 | 1 |
| 8.6 | 4 | 1 |
| 8.7 | 1 | 1 |
| 8.8 | 1 | 1 |
| 9.1 | 2 | 1 |
| 9.2 | 3 | 2 |
| 9.3 | 1 | 1 |
| 9.4 | 2 | 1 |
| 9.5 | 2 | 2 |
| 9.6 | 2 | 1 |
| 9.7 | 1 | 1 |
| 9.8 | 2 | 1 |
| 9.9 | 2 | 2 |
| 9.10 | 3 | 2 |
| 9.11 | 1 | 1 |
| 9.12 | 3 | 2 |
