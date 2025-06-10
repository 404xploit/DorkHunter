# 🔍 DorkHunter - Google Dork Platform for Bug Bounty

<img src="https://github.com/404xploit/DorkHunter/blob/main/DorkHunter.png?raw=true" width="400" alt="DorkHunter Logo" />

A powerful local web platform for security researchers to discover vulnerabilities using Google Dork queries.


[![Node.js](https://img.shields.io/badge/node.js-14%2B-brightgreen?style=flat-square&logo=node.js)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## ✨ Features

### Extensive Dork Database
- **100+ pre-built Google Dork queries** (and growing!)
- Categorized by vulnerability type and target

### 🔎 Smart Search Tools
- Save and organize custom dork queries
- Import and analyze search results
- Live search with instant feedback

### 🎯 Bug Bounty Optimized
- Specialized dorks for:
  - HackerOne disclosed reports
  - Sensitive file exposure
  - Admin panel discovery
  - Common CVEs and misconfigurations

### Personal Dashboard
- Track your search history
- Manage saved queries
- Visualize your findings

---



<img src="https://github.com/404xploit/DorkHunter/blob/main/DorkHunter2.png?raw=true" width="1400" alt="Main Interface" />

---

## Quick Start

### Prerequisites
- Node.js (v14+ recommended)
- npm (comes with Node.js)

### Installation
```bash
git clone https://github.com/404xploit/DorkHunter.git
cd DorkHunter
npm install
```

### Running the Application
```bash
npm run dev
```
Then open your browser to:
```
http://localhost:3000
```

---

## 🧠 Example Dork Queries

```plaintext
intitle:"Index of" admin
filetype:sql password
inurl:wp-content/uploads site:*.edu
"HackerOne disclosed report" site:hackerone.com
```

---

## 🤝 How to Contribute

We welcome contributions! Here's how you can help:

1. **Add New Dorks** (submit your best Google Dork queries)
2. **Improve UI/UX** (make it prettier or more intuitive)
3. **Fix Bugs** (help squash those pesky issues)
4. **Enhance Features** (got a cool idea? share it!)

---

## 💙 Credits

Created by [404xploit](https://github.com/404xploit)  
If you find this useful, consider starring ⭐ the repo!
