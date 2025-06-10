# 🔍 DorkHunter - Google Dork Platform for Bug Bounty

<img src="https://github.com/404xploit/DorkHunter/blob/main/DorkHunter.png?raw=true" width="400" alt="DorkHunter Logo" />

A powerful local web platform for security researchers to discover vulnerabilities using Google Dork queries.

---

## ✨ Features

### 🗃️ Extensive Dork Database
- **12,847+ pre-built Google Dork queries** (and growing!)
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

### 📊 Personal Dashboard
- Track your search history
- Manage saved queries
- Visualize your findings

---



<img src="https://github.com/404xploit/DorkHunter/blob/main/DorkHunter2.png?raw=true" width="1400" alt="Main Interface" />

---

## 🚀 Quick Start

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

## ⚠️ Important Disclaimer

**⚠️ Use Responsibly**  
This tool is intended for:
- Ethical hacking
- Legal security research
- Bug bounty programs

**Always obtain proper authorization** before testing any system or domain.

---

## 💙 Credits

Created by [404xploit](https://github.com/404xploit)  
If you find this useful, consider starring ⭐ the repo!
