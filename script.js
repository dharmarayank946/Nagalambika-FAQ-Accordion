/**
 * Interactive FAQ Accordion Widget
 * 
 * Features:
 * - Expandable / collapsible answers with silky smooth CSS grid transitions
 * - Single-open and Multi-open toggle mode
 * - Full W3C WAI-ARIA compliance & keyboard navigation (Arrows, Home, End, Enter, Space)
 * - Real-time keyword search & filtering
 * - Category pill filtering with active states
 * - Light / Dark theme toggler with localStorage memory
 */

function initAccordion() {
  // DOM Elements
  const accordion = document.getElementById('faq-accordion');
  const items = Array.from(accordion.querySelectorAll('.accordion-item'));
  const triggers = Array.from(accordion.querySelectorAll('.accordion-trigger'));
  const multiExpandToggle = document.getElementById('multi-expand-toggle');
  const searchInput = document.getElementById('faq-search-input');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const categoryChips = Array.from(document.querySelectorAll('.filter-chip'));
  const noResultsCard = document.getElementById('no-results');
  const resetSearchBtn = document.getElementById('reset-search-btn');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const htmlRoot = document.documentElement;

  // Active state variables
  let currentCategory = 'all';
  let searchQuery = '';

  /* --------------------------------------------------------------------------
     1. Theme Management (Light / Dark)
     -------------------------------------------------------------------------- */
  const savedTheme = localStorage.getItem('faq_accordion_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  htmlRoot.setAttribute('data-theme', initialTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlRoot.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlRoot.setAttribute('data-theme', nextTheme);
    localStorage.setItem('faq_accordion_theme', nextTheme);
  });

  /* --------------------------------------------------------------------------
     2. Accordion Expand / Collapse Mechanics
     -------------------------------------------------------------------------- */
  function toggleItem(item) {
    const trigger = item.querySelector('.accordion-trigger');
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    const isMultiMode = multiExpandToggle.checked;

    if (isExpanded) {
      // Collapse clicked item
      collapseItem(item, trigger);
    } else {
      // In single-expand mode, close all other open items first
      if (!isMultiMode) {
        items.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            const otherTrigger = otherItem.querySelector('.accordion-trigger');
            collapseItem(otherItem, otherTrigger);
          }
        });
      }
      // Expand clicked item
      expandItem(item, trigger);
    }
  }

  function expandItem(item, trigger) {
    item.classList.add('active');
    trigger.setAttribute('aria-expanded', 'true');
  }

  function collapseItem(item, trigger) {
    item.classList.remove('active');
    trigger.setAttribute('aria-expanded', 'false');
  }

  // Bind click event to accordion triggers
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parentItem = trigger.closest('.accordion-item');
      if (parentItem) {
        toggleItem(parentItem);
      }
    });
  });

  /* --------------------------------------------------------------------------
     3. Accessible Keyboard Navigation (WAI-ARIA Pattern)
     -------------------------------------------------------------------------- */
  triggers.forEach((trigger, index) => {
    trigger.addEventListener('keydown', (e) => {
      // Find currently visible triggers (not hidden by search or category filter)
      const visibleTriggers = triggers.filter(btn => {
        const item = btn.closest('.accordion-item');
        return item && !item.classList.contains('hidden');
      });

      const currentIndex = visibleTriggers.indexOf(trigger);

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          if (currentIndex < visibleTriggers.length - 1) {
            visibleTriggers[currentIndex + 1].focus();
          } else {
            visibleTriggers[0].focus(); // Loop to first
          }
          break;

        case 'ArrowUp':
          e.preventDefault();
          if (currentIndex > 0) {
            visibleTriggers[currentIndex - 1].focus();
          } else {
            visibleTriggers[visibleTriggers.length - 1].focus(); // Loop to last
          }
          break;

        case 'Home':
          e.preventDefault();
          if (visibleTriggers.length > 0) {
            visibleTriggers[0].focus();
          }
          break;

        case 'End':
          e.preventDefault();
          if (visibleTriggers.length > 0) {
            visibleTriggers[visibleTriggers.length - 1].focus();
          }
          break;

        default:
          break;
      }
    });
  });

  /* --------------------------------------------------------------------------
     4. Filtering & Search Logic
     -------------------------------------------------------------------------- */
  function filterFAQs() {
    let visibleCount = 0;
    const cleanQuery = searchQuery.trim().toLowerCase();

    items.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      const matchesCategory = currentCategory === 'all' || itemCategory === currentCategory;

      const triggerText = item.querySelector('.trigger-text')?.textContent.toLowerCase() || '';
      const panelText = item.querySelector('.panel-content')?.textContent.toLowerCase() || '';
      const matchesSearch = cleanQuery === '' || triggerText.includes(cleanQuery) || panelText.includes(cleanQuery);

      if (matchesCategory && matchesSearch) {
        item.classList.remove('hidden');
        visibleCount++;
      } else {
        item.classList.add('hidden');
        // Collapse hidden items to avoid invisible open state
        const trigger = item.querySelector('.accordion-trigger');
        if (trigger) collapseItem(item, trigger);
      }
    });

    // Handle Empty State
    if (visibleCount === 0) {
      noResultsCard.style.display = 'block';
    } else {
      noResultsCard.style.display = 'none';
    }
  }

  // Category Filter Pills Click
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-selected', 'false');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-selected', 'true');
      currentCategory = chip.getAttribute('data-category') || 'all';
      filterFAQs();
    });
  });

  // Search Input Handler
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    if (searchQuery.trim().length > 0) {
      searchClearBtn.style.display = 'block';
    } else {
      searchClearBtn.style.display = 'none';
    }
    filterFAQs();
  });

  // Clear Search Button
  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClearBtn.style.display = 'none';
    searchInput.focus();
    filterFAQs();
  });

  // Reset Filters Button inside No-Results State
  resetSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClearBtn.style.display = 'none';
    
    // Reset to "All Questions" category
    categoryChips.forEach(c => {
      c.classList.remove('active');
      c.setAttribute('aria-selected', 'false');
    });
    const allChip = document.getElementById('cat-all');
    if (allChip) {
      allChip.classList.add('active');
      allChip.setAttribute('aria-selected', 'true');
    }
    currentCategory = 'all';

    filterFAQs();
  });

  /* --------------------------------------------------------------------------
     5. Multi-expand Mode Toggle
     -------------------------------------------------------------------------- */
  multiExpandToggle.addEventListener('change', () => {
    if (!multiExpandToggle.checked) {
      // When switching back to single-expand, leave only the first active item open
      let keptFirst = false;
      items.forEach(item => {
        if (item.classList.contains('active')) {
          if (!keptFirst) {
            keptFirst = true;
          } else {
            const trigger = item.querySelector('.accordion-trigger');
            collapseItem(item, trigger);
          }
        }
      });
    }
  });

  // Initial setup: Open the first item by default for a warm greeting preview
  const firstItem = items[0];
  if (firstItem) {
    const firstTrigger = firstItem.querySelector('.accordion-trigger');
    expandItem(firstItem, firstTrigger);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAccordion);
} else {
  initAccordion();
}

