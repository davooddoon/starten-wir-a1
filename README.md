\# 🇩🇪 Starten wir! A1 — Vocabulary \& Grammar Trainer



A standalone, offline-capable Progressive Web Application (PWA) designed for mastering German at the \*\*A1 level\*\*, structured around the \*Starten wir! A1\* curriculum.



!\[HTML5](https://img.shields.io/badge/HTML5-Single--File-orange?style=flat-square)

!\[PWA](https://img.shields.io/badge/PWA-Offline--Ready-blue?style=flat-square)

!\[License](https://img.shields.io/badge/License-MIT-green?style=flat-square)



\---



\## ✨ Features



\- \*\*⚡ Standalone Single-File Architecture:\*\* Fully self-contained inside `index.html` with inline Service Worker caching.

\- \*\*📱 True Offline Capability:\*\* Works seamlessly without an active internet connection once installed/cached.

\- \*\*🃏 Leitner Box Spaced Repetition:\*\* Smart flashcards with gender-coded color schemes (`der` blue, `die` pink, `das` emerald).

\- \*\*🌍 Multi-Language Translation Fallback:\*\* Supports distinct translation columns for English (EN), Persian (FA), French (FR), Spanish (ES), Turkish (TR), Arabic (AR), and Russian (RU) with real-time UI switching and an automated English fallback.

\- \*\*📊 Interactive Grammar \& Mastery Drills:\*\* Covers all 12 lessons with article rules, plural drills, and spelling challenges.

\- \*\*📥 Excel Deck Import:\*\* One-click integration with GitHub-hosted `a1\\\_words.xlsx` or custom spreadsheet uploads.



\---



\## 🚀 Getting Started



\### Online Demo

Visit the live application at:

`https://davooddoon.github.io/starten-wir-a1/`



\### File Structure

```text

📁 starten-wir-a1/

├── index.html            # Core application

├── a1\\\_words.xlsx         # Official 12-lesson vocabulary deck

├── xlsx.full.min.js      # Offline Excel parser

├── sw.js                 # Service worker

└── fonts/                # Local font assets (optional)


