# CIRE Master - Canadian Investment Regulatory Exam Prep Platform
### 3,000 Questions • Full Proctored Mock Exams • Topic Drills • GitHub Pages Ready

A complete, responsive web platform designed to prepare candidates for the **Canadian Investment Regulatory Exam (CIRE)**, officially governed by the **Canadian Investment Regulatory Organization (CIRO / OCRI)** and supported by **Fitch Learning** (January 2025 Syllabus).

---

## 🎯 Key Features

1. **3,000 Comprehensive Multiple Choice Questions**:
   - Mapped across all 9 syllabus elements and 4 cognitive levels (*Remember, Understand, Apply, Analyze*).
   - Detailed regulatory rationales and rule citations (CIRO IDPC Rules, UMIR, CSA National Instruments, CIPF, PCMLTFA, OBSI).

2. **Official Timed Mock Exam Mode**:
   - **110 Questions**, **120-minute (2 hour) countdown timer**.
   - Strict adherence to official syllabus element indicative weightings:
     - Element 1: Regulatory Framework (11 Qs)
     - Element 2: Prospective Client Relationships (11 Qs)
     - Element 3: Scope of Client Relationships (17 Qs)
     - Element 4: Client Complaints Handling (6 Qs)
     - Element 5: Market & Company Analysis (9 Qs)
     - Element 6: Market Integrity & Trading (13 Qs)
     - Element 7: Securities & Managed Products (21 Qs)
     - Element 8: Derivatives (6 Qs)
     - Element 9: Conflicts of Interest & Ethics (16 Qs)
   - Real-time question navigator (answered, unanswered, flagged for review).
   - 60% Passing score evaluation with Element-by-Element diagnostic score report.

3. **Topic Practice & Syllabus Drilling**:
   - Drill into any of the 9 Elements or specific learning outcomes.
   - Immediate feedback with full rationales.

4. **Flashcards Mode**:
   - Interactive 3D flip cards to test memory on essential rules, thresholds, and calculations.

5. **Searchable 3,000 Question Bank Explorer**:
   - Search by keyword, statute, or sub-outcome.
   - Filter by Element, Cognitive Level, and Status (Unseen, Correct, Incorrect, Flagged).

6. **Local Persistence & Zero Cloud Dependency**:
   - All your progress is stored in your browser (`localStorage`).
   - One-click JSON backup export and restore.

---

## 🚀 How to Host on GitHub Pages in 2 Minutes

This website is **100% static client-side code** (HTML5, modern CSS3, Vanilla JS). It requires no Node.js backend, database, or build pipeline.

### Step 1: Create a GitHub Repository
1. Log in to your [GitHub](https://github.com) account.
2. Click **New Repository**.
3. Name your repository (e.g., `ciro-cire-exam-prep`).
4. Set it to **Public** (or **Private** with GitHub Pro/Student) and click **Create repository**.

### Step 2: Push Your Files
Open your terminal/command prompt in this folder and run:
```bash
git init
git add .
git commit -m "Deploy CIRE 3,000 question prep platform"
git branch -M main
git remote add origin https://github.com/<your-username>/ciro-cire-exam-prep.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub and click **Settings**.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment > Branch**:
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click **Save**.
4. In about 30–60 seconds, GitHub will provide your live URL:
   `https://<your-username>.github.io/ciro-cire-exam-prep/`

---

## 💻 Local Offline Usage
You can also run the application completely offline without an internet connection:
- Simply double-click `index.html` to open it in Google Chrome, Microsoft Edge, Firefox, or Safari!
- Alternatively, run a local python web server:
  ```bash
  python -m http.server 8080
  ```
  Then visit `http://localhost:8080` in your browser.

---

## 📊 Syllabus Breakdown & Indicative Exam Weights

| Element | Title | Indicative Qs (Exam) | Bank Questions |
|:-------:|:------|:--------------------:|:--------------:|
| **1** | Overview of Canadian Securities Regulatory Framework | 11 | 300 |
| **2** | Prospective Client Relationships | 11 | 300 |
| **3** | Scope of Client Relationships | 17 | 465 |
| **4** | Client Complaint Handling and Reporting | 6 | 165 |
| **5** | Market and Company Analysis | 9 | 245 |
| **6** | Market Integrity, Trade Execution and Settlement | 13 | 355 |
| **7** | Securities, Managed Products and Mutual Funds | 21 | 575 |
| **8** | Derivatives | 6 | 165 |
| **9** | Conflicts of Interest and Ethics | 16 | 430 |
| **Total** | **Full CIRE Curriculum** | **110** | **3,000** |
