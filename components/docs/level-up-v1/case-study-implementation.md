---
Title: Case Study Page Implementation Plan
Author: Chien Escalera Duong
Date Created: 2025-08-20
Time Created: 20:18:30 PDT
Last Updated: 2025-08-20 20:18:30 PDT
Version: 1.0
---

# Scope
- Implement a polished Case Study page that matches the provided prototype `components/docs/prototype/case-study-prototype.html` as closely as possible in layout, styling, and interactions.
- Integrate with the existing hash-based router `#/case/:id` and wire it to existing "Read case study" links.
- Keep dark mode compatibility with the site's Tailwind config.
- Ensure accessibility and performance best practices.

# Architecture Overview
- Route: handled in `App.tsx` via `#/case/:id`. We will keep this.
- Page component: `components/CaseStudyPage.tsx` (enhanced to match prototype and render from `PROJECTS`).
- No global routing library; use in-page behaviors for TOC, progress, and keyboard navigation.
- Data source: `PROJECTS` in `constants.ts` and type `Project` in `types.ts`.

# Data Mapping
- Hero
  - Title: `project.title`
  - Subtitle/role/org/timeframe: `project.role`, `project.org`, `project.timeframe`
  - Stack badges: `project.stack`
- Meta Aside
  - Role, Timeline, Org from above
  - CTAs: `project.links.live`, `project.links.repo`, and a booking CTA linking to `#contact`
- Sections/IDs (for TOC + anchors)
  - overview, goals, solution, metrics, process, architecture, testing, lessons, results, gallery
- Metrics
  - Display 3 cards. Prefer using first three `project.impact` items if available; otherwise fallback placeholders (match prototype text).
- Gallery
  - Render up to 6 tiles. Use provided `project.images` (repeat if fewer than 6) or gray placeholders.

# Components & Hooks (within CaseStudyPage.tsx)
- useScrollProgress: compute scroll progression and set width of a top progress bar.
- useScrollSpy: observe sections and set active class in TOC.
- useJKNav: keyboard J/K navigation across section IDs.
- UI subcomponents: `MetaRow`, `Badge`, `TOC`, `MetricsGrid`, `ProcessSteps`, `AnchorHeading`.

# Interactions
- Reading progress: fixed top bar (z-index above header).
- Scrollspy: highlight active TOC link using IntersectionObserver.
- Keyboard nav: `j` go to next section; `k` go to previous.
- Anchor links: small `#` next to headings on hover for deep-linking.

# Theming
- Use Tailwind utility classes compatible with existing dark mode (class-based) and color tokens defined in `index.html` (primary, surface, on-surface variants).

# Accessibility
- Keep a skip link (existing in Header is fine).
- Use semantic headings and `nav[aria-label="On this page"]` for TOC.
- Links/CTAs have clear text and focus states.

# Performance
- Use `loading="lazy"` and `decoding="async"` for images.
- Avoid heavy runtime work in observers; use passive listeners.

# Implementation Steps
1. Update `components/CaseStudyPage.tsx` to:
   - Add hooks for progress, scrollspy, J/K.
   - Implement prototype layout sections and styles.
   - Map data from `PROJECTS` and add safe fallbacks.
2. Verify `Projects.tsx` links point to `#/case/:id` (already done). No change needed.
3. Smoke test: navigate to `#/case/relive`, `#/case/stanford-rna`, `#/case/little-lemon`.
4. QA for a11y (keyboard, focus, headings), dark mode, and responsiveness.

# Rollback Plan
- The change is isolated to `components/CaseStudyPage.tsx` and a new doc file. Revert that file to previous version if needed.

# Test Plan
- Manual: verify sections, TOC highlighting, J/K navigation, progress bar changes, CTAs open correctly, back link to `#projects`.
- Visual: compare with prototype for spacing and typography.

