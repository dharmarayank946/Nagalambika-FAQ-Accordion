# VEDA Technology Web Development Internship Task 10 — FAQ Accordion

A modern, responsive, and accessible interactive **FAQ Accordion** built strictly using **HTML5**, **CSS3**, and **Vanilla JavaScript**. This project features 10 comprehensive web development and programming questions designed with a clean light theme, soft pastel blue accents, single-open accordion behavior, SVG plus/minus icon state toggles, and full keyboard accessibility.

---

## 📌 Project Overview
- **Task Title:** Task 10 — FAQ Accordion
- **Internship Program:** VEDA Technology Web Development Internship
- **Developer:** Nagalambika D Koralli
- **Topic:** Web Development & Programming Learning Fundamentals
- **Design Theme:** Light & Clean Professional Theme with Soft Pastel Blue Accents
- **Color Palette:** White (`#FFFFFF`), Soft Slate (`#F8FAFC`), Pastel Blue (`#E0F2FE`, `#0284C7`), Dark Slate Text (`#0F172A`)

---

## 🎯 Objectives
1. Build an interactive FAQ accordion section with 10 questions and answers covering core web development concepts.
2. Implement **Single-Open behavior**: opening a new question automatically collapses the previously opened answer panel.
3. Ensure user interaction occurs strictly via clickable `<button>` elements.
4. Utilize JavaScript `addEventListener` and `classList.toggle` / `classList.add` / `classList.remove` for dynamic state changes.
5. Provide clear active state visual styling (`.active`) for the currently expanded question card and trigger button.
6. Display a dynamic SVG **Plus (+) icon** when a question is closed and a **Minus (-) icon** when it is expanded.
7. Implement mobile-first, fully responsive layout suitable for smartphones, tablets, and desktop displays.
8. Enforce web accessibility (a11y) using semantic HTML5, `aria-expanded`, `aria-controls`, `role="region"`, and keyboard navigation support.

---

## 🛠️ Technologies Used
- **HTML5:** Semantic document markup (`<header>`, `<main>`, `<section>`, `<article>`, `<button>`, `<footer>`), custom data/ARIA attributes (`aria-expanded`, `aria-controls`, `role="region"`).
- **CSS3:** Responsive mobile-first styling, CSS custom properties (variables), custom borders, soft box-shadows, SVG line transforms for icon state morphing, and smooth CSS height/opacity transitions.
- **Vanilla JavaScript (ES6+):** Event delegation, DOM manipulation, ARIA attribute toggling, dynamic height calculation (`scrollHeight`), single-open state management, and keyboard arrow key navigation.
- **Google Fonts:** `Plus Jakarta Sans` & `Inter` for clean, highly readable typography.

---

## ✨ Features
- ❓ **10 Web Development & Programming Questions:** Clear, informative, and beginner-friendly answers.
- 🔄 **Single-Open Accordion Logic:** Expanding a new accordion item automatically closes any previously open question, keeping screen clutter low.
- ➕➖ **Dynamic Plus/Minus Icons:** Inline SVG icons seamlessly transition between Plus (`+`) when collapsed and Minus (`-`) when expanded.
- 🎨 **Light & Pastel Blue Visual Design:**
  - Clean white cards with rounded corners (`border-radius: 12px`).
  - Dark blue-slate readable text (`#0F172A`).
  - Pastel blue highlights (`#E0F2FE`, `#0284C7`) on hover and active states.
  - No heavy dark themes, no excessive gradients, no slow or complex animations.
- 📱 **Mobile-First Responsive Layout:** Large touch-friendly tap targets (minimum 60px height) and adaptable padding for mobile screens.
- ⌨️ **Keyboard Accessibility (a11y):**
  - Full keyboard focus via `Tab` key.
  - Native activation with `Enter` or `Space`.
  - Arrow navigation: `ArrowDown` and `ArrowUp` move focus between questions. `Home` jumps to the first item, `End` jumps to the last item.
- ⚡ **Zero External Dependencies:** No React, npm, Node.js, or build commands required. Works natively in any modern browser by opening `index.html`.

---

## 🔍 How the Accordion Works
1. **Triggering an Accordion Panel:** Clicking any question button triggers an event listener registered via JavaScript `addEventListener()`.
2. **Checking Current State:** JavaScript inspects the `aria-expanded` attribute (`"true"` vs `"false"`).
3. **Single-Open Enforcement:**
   - JavaScript iterates over all trigger buttons.
   - For every trigger *other* than the clicked button, it resets `aria-expanded="false"`, removes `.active` class names, sets `max-height: 0` and `opacity: 0`, and applies the `hidden` attribute.
4. **Expanding the Target Panel:**
   - The clicked trigger receives `aria-expanded="true"`.
   - `.active` class is toggled on both the parent `.faq-item` container and `.faq-trigger` button.
   - The SVG vertical line opacity drops to 0, morphing the Plus icon into a Minus icon.
   - The panel's `hidden` attribute is removed, and `max-height` is dynamically assigned based on `panel.scrollHeight + 'px'` to produce a smooth slide-down effect.

---

## 🚀 How to Run the Project
Since this project is built using pure static web technologies (HTML5, CSS3, JavaScript):

1. **Direct Local Run:**
   - Clone or download this repository.
   - Navigate to the `Task10-FAQ-Accordion` directory.
   - Double-click `index.html` to open it directly in any web browser (Chrome, Edge, Firefox, Safari).

2. **Local HTTP Server (Optional):**
   - You can also serve the directory via any basic local server (e.g., Python `python -m http.server 8000` or VS Code Live Server).

---

## 🌐 GitHub Pages Deployment Instructions
To host and deploy this static project on GitHub Pages:

1. Push the code repository to GitHub.
2. In your GitHub repository, navigate to **Settings** > **Pages** (under the Code and automation section).
3. Under **Build and deployment**:
   - Source: Select **Deploy from a branch**.
   - Branch: Select **main** (or `master`) branch and set folder to `/ (root)` or `/Task10-FAQ-Accordion`.
   - Click **Save**.
4. GitHub Pages will build and deploy your site automatically within 1 to 2 minutes.
5. Access your live website at:
   `https://<your-username>.github.io/<repository-name>/Task10-FAQ-Accordion/`

---

## 🧪 Verification & Checklist
- [x] At least 8 FAQ questions present (10 included).
- [x] Clicking a question expands its answer.
- [x] Clicking the same question collapses its answer.
- [x] Opening another question automatically closes the previous one (Single-Open).
- [x] Plus (+) and Minus (-) icons update correctly upon expansion.
- [x] Active card styling (`.active`) updates properly.
- [x] Fully responsive on mobile, tablet, and desktop viewports.
- [x] Clean browser console with zero JavaScript errors.
- [x] Native keyboard accessibility (`Tab`, `Enter`, `Space`, `ArrowUp`, `ArrowDown`).
