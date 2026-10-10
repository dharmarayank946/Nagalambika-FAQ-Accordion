/* ==========================================================================
   VEDA Technology Web Development Internship — Task 10 FAQ Accordion
   JavaScript Logic: Single-Open Accordion, Accessibility & Transitions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Query accordion trigger buttons and controls
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  const toggleAllBtn = document.getElementById('expand-collapse-btn');
  const toggleAllLabel = document.getElementById('toggle-all-label');

  /**
   * Helper function to open an accordion item
   * @param {HTMLButtonElement} trigger 
   */
  function openAccordion(trigger) {
    const faqItem = trigger.closest('.faq-item');
    const panelId = trigger.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);

    if (!faqItem || !panel) return;

    // 1. Update Accessibility state
    trigger.setAttribute('aria-expanded', 'true');
    
    // 2. Add Active styling classes
    faqItem.classList.add('active');
    trigger.classList.add('active');

    // 3. Reveal content panel
    panel.removeAttribute('hidden');
    
    // 4. Calculate dynamic height for smooth CSS transition
    panel.style.maxHeight = panel.scrollHeight + 'px';
    panel.style.opacity = '1';
  }

  /**
   * Helper function to close an accordion item
   * @param {HTMLButtonElement} trigger 
   */
  function closeAccordion(trigger) {
    const faqItem = trigger.closest('.faq-item');
    const panelId = trigger.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);

    if (!faqItem || !panel) return;

    // 1. Update Accessibility state
    trigger.setAttribute('aria-expanded', 'false');

    // 2. Remove Active styling classes
    faqItem.classList.remove('active');
    trigger.classList.remove('active');

    // 3. Smooth transition to height 0 and opacity 0
    panel.style.maxHeight = '0';
    panel.style.opacity = '0';

    // 4. Apply hidden attribute after transition completes
    setTimeout(() => {
      if (trigger.getAttribute('aria-expanded') === 'false') {
        panel.setAttribute('hidden', '');
      }
    }, 350);
  }

  /**
   * Attach Click and Keyboard Event Listeners to each FAQ Trigger
   */
  faqTriggers.forEach((trigger) => {
    // CLICK EVENT: Single-Open Accordion Behavior
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // SINGLE-OPEN BEHAVIOR: Close all other open accordion items
      faqTriggers.forEach((otherTrigger) => {
        if (otherTrigger !== trigger) {
          closeAccordion(otherTrigger);
        }
      });

      // Toggle clicked item (if open, close it; if closed, open it)
      if (isExpanded) {
        closeAccordion(trigger);
      } else {
        openAccordion(trigger);
      }

      updateToggleAllLabel();
    });

    // KEYBOARD ACCESSIBILITY: Arrow Key Navigation
    trigger.addEventListener('keydown', (e) => {
      const triggersArray = Array.from(faqTriggers);
      const currentIndex = triggersArray.indexOf(trigger);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % triggersArray.length;
        triggersArray[nextIndex].focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + triggersArray.length) % triggersArray.length;
        triggersArray[prevIndex].focus();
      } else if (e.key === 'Home') {
        e.preventDefault();
        triggersArray[0].focus();
      } else if (e.key === 'End') {
        e.preventDefault();
        triggersArray[triggersArray.length - 1].focus();
      }
    });
  });

  /**
   * Control Bar Toggle (Collapse All / Expand First) Action
   */
  if (toggleAllBtn) {
    toggleAllBtn.addEventListener('click', () => {
      const anyOpen = Array.from(faqTriggers).some(
        (t) => t.getAttribute('aria-expanded') === 'true'
      );

      if (anyOpen) {
        faqTriggers.forEach((trigger) => closeAccordion(trigger));
      } else {
        openAccordion(faqTriggers[0]);
      }
      updateToggleAllLabel();
    });
  }

  /**
   * Update action button text based on current accordion state
   */
  function updateToggleAllLabel() {
    if (!toggleAllLabel) return;
    const anyOpen = Array.from(faqTriggers).some(
      (t) => t.getAttribute('aria-expanded') === 'true'
    );
    toggleAllLabel.textContent = anyOpen ? 'Collapse All' : 'Expand First';
  }

  /**
   * Recalculate open panel heights on window resize for responsive layout changes
   */
  window.addEventListener('resize', () => {
    faqTriggers.forEach((trigger) => {
      if (trigger.getAttribute('aria-expanded') === 'true') {
        const panelId = trigger.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);
        if (panel) {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      }
    });
  });
});
