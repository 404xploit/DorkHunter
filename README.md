

# DorkHunter - Google Dork Platform for Bug Bounty

<img src="https://github.com/404xploit/DorkHunter/blob/main/DorkHunter.png?raw=true" width="400" alt="DorkHunter Logo" />

**DorkHunter** is a powerful local web platform built with **TypeScript**, designed for **bug bounty hunters** and **security researchers** to efficiently uncover potential vulnerabilities using **Google Dork** queries.

---

## 🚀 Features

* **📚 12,000+ Google Dorks**
  Access a growing catalog of **12,847+ pre-built Google Dork queries**.

* **🔍 Search & Results Management**

  * Save and organize your custom dork queries
  * Import and analyze search result links

* **📊 Personal Dashboard**
  Track your searches and saved queries in a clean, centralized interface.

* **⚡ Live Search Mode**
  Test queries in real-time with instant feedback.

* **🎯 Bug Bounty Focus**
  Includes dorks optimized for:

  * HackerOne disclosed reports
  * Sensitive file leaks
  * Admin panel exposure
  * Misconfigurations and common CVEs

---

## 🧪 Example Dork Queries

<img src="https://github.com/404xploit/DorkHunter/blob/main/DorkHunter2.png?raw=true" width="1000" alt="Main Interface" />

Sample Google Dorks:

* `intitle:"Index of" admin`
* `filetype:sql password`
* `inurl:wp-content/uploads site:*.edu`
* `"HackerOne disclosed report" site:hackerone.com`

---

## 🛠 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/404xploit/DorkHunter.git
cd DorkHunter
```

### 2. Install dependencies

Make sure you have **Node.js** and **npm** installed.

```bash
npm install
```

### 3. Configure environment (if required)

If the project uses a `.env` file or config, set it up as needed (see example or documentation).

### 4. Run the app locally

```bash
npm run dev
```

Then open your browser and go to:

```
http://localhost:3000
```

> The app will run locally as a web platform. All search features are available via your browser.

---

## 🤝 Contribution

Contributions are welcome to improve DorkHunter!
You can help by submitting pull requests that include:

* ✅ New Google Dork queries
* 🎨 UI/UX improvements
* 🐞 Bug fixes
* 📈 Performance or feature enhancements

---

## 📄 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for more information.

---

## ⚠️ Disclaimer

**DorkHunter is intended for ethical hacking, legal security research, and bug bounty hunting only.**
Always obtain **explicit permission** before testing any system or domain.

