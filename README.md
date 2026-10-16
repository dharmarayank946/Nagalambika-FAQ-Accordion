# Modern Interactive FAQ Accordion Widget

A clean, modern, accessible, and fully responsive **FAQ Accordion Widget** built from scratch with pure **HTML5**, **CSS3**, and **Vanilla JavaScript**.

---

## 📌 Project Overview

This component delivers a sleek, user-friendly help center and FAQ experience for modern web applications:
- **Collapsible Answers:** Smoothly expands and collapses questions upon interaction.
- **JavaScript State Management:** Robust open/close mechanics with synchronized `aria-expanded` attributes.
- **Fluid CSS Grid Animations:** Butter-smooth height transitions (`grid-template-rows: 0fr` to `1fr`) without jerky layout shifts or fixed-height constraints.
- **Clean, Modern Aesthetics:** Styled with Google Font *Plus Jakarta Sans*, subtle ambient glow backdrops, elevated cards, and rotating chevron indicators.
- **100% Mobile Responsive:** Optimized across mobile smartphones (320px+), tablets, and desktop displays with touch-friendly targets (>= 48px).
- **Interactive Features:**
  - 🔍 **Live Search Bar:** Instant keyword search across questions and answers.
  - 🏷️ **Category Filter Pills:** Quickly filter FAQs by category (General, Account, Billing, Features & Tech, Security).
  - 🔄 **Multi-Open Toggle Mode:** Switch between classic accordion (one item open at a time) and multi-expand mode.
  - 🌓 **Dark / Light Theme Switcher:** Smooth theme transition with user preference stored in `localStorage`.
  - ♿ **W3C WAI-ARIA Accessibility:** Semantic `<button>` triggers, clear focus-visible indicators, and full keyboard navigation (Arrows, Home, End, Enter, Space).

---

## 🗂️ Project Structure

```text
faq-accordion-widget/
├── index.html        # Semantic HTML5 markup, ARIA roles, and FAQ structure
├── style.css         # Modern CSS variables, CSS grid animations, dark/light themes & responsive layout
├── script.js         # Vanilla JavaScript for toggle mechanics, search, filtering & keyboard controls
└── README.md         # Project documentation, keyboard guide, and local setup
```

---

## 🚀 How to Run and Test Locally

### Option 1: Direct File Launch
Double-click **`index.html`** in your file manager to open it immediately in any web browser.

### Option 2: Using a Lightweight HTTP Server
You can serve the directory locally using Python or Node.js:

**Using Python:**
```bash
python -m http.server 3000
```
Then open: `http://localhost:3000`

**Using Node:**
```bash
npx serve -l 3000 .
```

---

## ♿ Keyboard Navigation Guide

| Key | Action |
| :--- | :--- |
| **Tab** / **Shift + Tab** | Move focus to the next or previous interactive element |
| **Enter** / **Space** | Expand or collapse the currently focused FAQ item |
| **Arrow Down** | Move focus to the next visible question (loops around to top) |
| **Arrow Up** | Move focus to the previous visible question (loops around to bottom) |
| **Home** | Jump focus directly to the first visible question |
| **End** | Jump focus directly to the last visible question |

---

## 🧪 Verified Features

- [x] **Collapsible answers:** Questions expand and collapse with fluid animations.
- [x] **Single-open accordion:** Opening another question automatically closes the previously opened one.
- [x] **Multi-open toggle:** Allows multiple questions to remain open simultaneously.
- [x] **Live keyword search:** Filters matching questions instantly with an empty-state reset.
- [x] **Category filtering:** Smoothly isolates questions by topic.
- [x] **Dark / Light mode:** Instant theme toggle with local storage persistence.
- [x] **Keyboard navigation:** Complete keyboard support following W3C WAI-ARIA standards.
- [x] **Mobile responsive:** Fluid layout with zero horizontal overflow on small devices.

---

## 👤 Author
- **Developer:** Nagalambika Koralli
