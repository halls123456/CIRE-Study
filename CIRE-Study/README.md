# CIRE Study

Independent static exam-preparation website with **193 distinct questions**, including **110 newly authored exercises**, covering all **99 numbered outcomes** across the nine CIRE syllabus elements.

The former 3,000 entries contained only 124 underlying questions. This update removes 2,876 verified copies and retires 41 originals with misleading or insufficiently qualified claims. See [the review and coverage report](docs/BANK-REVIEW.md) and [machine-readable audit](data/bank-audit.json).

Topic practice, searchable questions, flashcards, local progress backups and weighted 110-question / 120-minute mock exams are supported. New explanations include curriculum and background source links. The 60% target is an app practice setting, not a verified official passing standard. This project is not endorsed by CIRO or Fitch Learning, and the exercises are not official exam questions.

## Run

Open index.html locally or serve this directory as a static website. No build or package installation is required.

## Validate changes

Use Node.js 22 or newer for the test runner.

```
node scripts/validate-bank.cjs
node --test tests/bank.test.cjs
```

Keep IDs stable when only editing labels. Use new IDs when replacing questions or changing answers. New questions should test a distinct decision or concept, include four plausible options and an explanation, and map to an existing outcome. Changing names, numerical inputs alone, or option order does not create a new learning objective. Automated checks cannot replace editorial review.

## Publish

Upload the complete site directory to the GitHub Pages source branch. Ensure index.html, js/ and data/ are deployed together, including the new source and alias scripts. The downloadable archive contains the complete site. Publishing requires access to the repository; local edits do not update the hosted site.

## Curriculum

[Official CIRO CIRE resources](https://www.ciro.ca/registered-individuals/proficiency/exam-hub/canadian-investment-regulatory-exam-cire) · [Syllabus](https://www.ciro.ca/media/12246/download)

| Element | Mock questions | Bank questions |
| --- | ---: | ---: |
| 1: Regulatory Framework | 11 | 20 |
| 2: Prospective Clients | 11 | 20 |
| 3: Scope of Relationship | 17 | 29 |
| 4: Complaint Handling | 6 | 11 |
| 5: Market & Company Analysis | 9 | 23 |
| 6: Market Integrity & Trading | 13 | 23 |
| 7: Securities & Products | 21 | 28 |
| 8: Derivatives | 6 | 15 |
| 9: Conflicts of Interest & Ethics | 16 | 24 |
