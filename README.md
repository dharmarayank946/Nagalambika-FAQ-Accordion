# SYNTECXHUB Front-End Development Internship
## Project 2 — FAQ Accordion Widget

An interactive, responsive, and accessible **FAQ Accordion Widget** built from scratch for the **SYNTECXHUB Front-End Development Internship**.

---

## 📌 Project Overview

This project satisfies all official requirements for SYNTECXHUB Project 2:
- **Collapsible Answers:** Interactive accordion items that expand and collapse cleanly upon interaction.
- **JavaScript Open/Close Functionality:** Robust state management with `aria-expanded` and active CSS classes.
- **Smooth Animations:** Butter-smooth height and opacity transitions using modern CSS Grid (`grid-template-rows: 0fr` to `1fr`) and rotating chevron icons.
- **Professional, Polished Design:** Clean typography (Google Font *Plus Jakarta Sans*), ambient glowing backdrops, card elevation, and intuitive visual hierarchy.
- **100% Mobile Responsiveness:** Flawlessly adapts from small mobile screens (320px) to ultra-wide displays.
- **Bonus Enhancements:**
  - 🔍 **Live Search Bar:** Instant keyword search across questions and answers.
  - 🏷️ **Category Filter Pills:** Filter FAQs by topic (General, Front-End, Accessibility, Internship).
  - 🔄 **Multi-Open Toggle Mode:** Switch between classic accordion (one open item at a time) and multi-expand mode.
  - 🌓 **Dark / Light Theme Switcher:** Smooth theme switching with user preference saved in `localStorage`.
  - ♿ **W3C WAI-ARIA Accessibility:** Native `<button>` triggers, ARIA labels, focus-visible indicators, and full keyboard navigation (Arrows, Home, End, Enter, Space).

---

## 🗂️ Project Structure

```text
syntecxhub-faq-accordion/
├── index.html        # Semantic HTML5 markup, ARIA roles, and structured FAQ items
├── style.css         # Modern CSS variables, grid transitions, dark/light themes & responsiveness
├── script.js         # Vanilla JavaScript for toggle mechanics, search, filtering & keyboard controls
└── README.md         # Comprehensive project documentation and setup instructions
```

---

## 🚀 How to Run and Test Locally

### Option 1: Direct Browser Launch
1. Navigate to the project folder:
   ```text
   D:\Projects\FAQ Accordion Widget\
   ```
2. Double-click **`index.html`** to open it directly in your default browser (Chrome, Edge, Firefox, Brave).

### Option 2: Using Local HTTP Server (Recommended)
You can start a lightweight local web server using Python or Node:

**Using Python:**
```bash
python -m http.server 3000
```
Then visit: `http://localhost:3000`

**Using Node `npx serve`:**
```bash
npx serve -l 3000 .
```

---

## ♿ Keyboard Navigation Guide

| Key | Action |
| :--- | :--- |
| **Tab** / **Shift + Tab** | Move focus into or out of accordion triggers and interactive elements |
| **Enter** / **Space** | Expand or collapse the currently focused FAQ item |
| **Arrow Down** | Move focus to the next visible FAQ question (loops to top) |
| **Arrow Up** | Move focus to the previous visible FAQ question (loops to bottom) |
| **Home** | Jump focus directly to the first FAQ question |
| **End** | Jump focus directly to the last FAQ question |

---

## 🧪 Verification & Testing Checklist

- [x] **Collapsible answers:** Clicking any question toggles open/close state.
- [x] **Single-open behavior:** Opening another item closes previous item (when Multi-open is OFF).
- [x] **Multi-open behavior:** Multiple items can expand simultaneously (when Multi-open is ON).
- [x] **Smooth CSS animations:** Grid height transitions fluidly without clipping or jumpy layouts.
- [x] **Live keyword search:** Filters matching questions instantly; displays clean empty state if no matches exist.
- [x] **Category filtering:** Smoothly shows only items belonging to the selected category.
- [x] **Dark / Light theme:** Toggles theme dynamically and persists selection via `localStorage`.
- [x] **Keyboard accessibility:** Full navigation via arrows, enter, space, home, and end keys with visible focus rings.
- [x] **Mobile responsiveness:** Tested across mobile, tablet, and desktop viewports.

---

## 📤 Publishing to a Brand-New GitHub Repository

To push this project to its own independent GitHub repository:

1. **Initialize Git in this folder**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for SYNTECXHUB Project 2 FAQ Accordion Widget"
   ```

2. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `syntecxhub-faq-accordion` (or `SYNTECXHUB-FAQ-Accordion-Widget`)
   - Description: *SYNTECXHUB Front-End Development Internship Project 2 — FAQ Accordion Widget*
   - Make it **Public**
   - Do NOT check "Initialize with README" (we already have one)
   - Click **Create repository**

3. **Link and Push**:
   ```bash
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/syntecxhub-faq-accordion.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy Free Live Demo (GitHub Pages)**:
   - In your new repository on GitHub, go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Branch**, select `main` / `root` and click **Save**.
   - Your live website will be published at `https://<YOUR_GITHUB_USERNAME>.github.io/syntecxhub-faq-accordion/`.

---

## 👤 Author
- **Intern:** Nagalambika Koralli
- **Internship:** SYNTECXHUB Front-End Web Development Internship
- **Deliverable:** Project 2 — FAQ Accordion Widget
