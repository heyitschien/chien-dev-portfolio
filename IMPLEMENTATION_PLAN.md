# Incremental Modernization Implementation Plan

**Branch:** `modernize/update-stack`  
**Approach:** Phased incremental updates with testing at each step  
**Goal:** Zero-downtime modernization with full rollback capability

---

## 🎯 Strategy Overview

### Core Principles

1. **One change at a time** - Test after each step
2. **Preserve functionality** - Nothing breaks, everything works
3. **Incremental commits** - Easy rollback if needed
4. **Verify at each step** - Build, dev server, visual checks
5. **Document changes** - Clear commit messages

### Risk Mitigation

- ✅ Test after each phase before proceeding
- ✅ Keep working site running (can deploy old version)
- ✅ Git commits at each milestone (easy rollback)
- ✅ Visual regression checks
- ✅ Build verification

---

## 📋 Phase 1: Infrastructure Setup

### Goal

Set up Tailwind CSS, ESLint, and Prettier without breaking anything.

### Step 1.1: Install Tailwind CSS Dependencies

**Action:**

```bash
npm install -D tailwindcss postcss autoprefixer
```

**Verification:**

- Check `package.json` has new dependencies
- No errors in terminal

**Rollback:** `npm uninstall tailwindcss postcss autoprefixer`

---

### Step 1.2: Initialize Tailwind Config

**Action:**

```bash
npx tailwindcss init -p
```

**Expected Output:**

- Creates `tailwind.config.js`
- Creates `postcss.config.js`

**Verification:**

- Both files exist
- No errors

**Rollback:** Delete both config files

---

### Step 1.3: Configure Tailwind Config

**Action:** Update `tailwind.config.js` with your existing theme

**File to create/update:** `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Match your current setup
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#4285F4",
          dark: "#8ab4f8",
        },
        background: {
          light: "#f8f9fa",
          dark: "#202124",
        },
        surface: {
          light: "#ffffff",
          dark: "#303134",
        },
        "on-surface": {
          light: "#202124",
          dark: "#e8eaed",
        },
        "on-surface-variant": {
          light: "#5f6368",
          dark: "#969ba1",
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
```

**Verification:**

- Config file matches your current theme
- All color values preserved
- Animation keyframes preserved

**Rollback:** Restore from git if needed

---

### Step 1.4: Create CSS Entry Point

**Action:** Create `src/index.css` (or `index.css` in root)

**File to create:** `src/index.css` or `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Reading progress bar - preserve existing custom styles */
.progress-bar {
  width: var(--reading-progress, 0%);
}
```

**Verification:**

- File created
- Contains Tailwind directives
- Custom styles preserved

**Rollback:** Delete file

---

### Step 1.5: Update index.html

**Action:** Remove Tailwind CDN, add CSS import

**File to update:** `index.html`

**Remove:**

```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>
```

**Remove Tailwind config script:**

```html
<script>
  tailwind.config = { ... }
</script>
```

**Add CSS import (if using src/index.css):**

```html
<link rel="stylesheet" href="/src/index.css" />
```

**Or if using root index.css:**

```html
<link rel="stylesheet" href="/index.css" />
```

**Keep:**

- Google Fonts
- Font Awesome (for now - we'll remove in Phase 2)
- All other scripts/styles

**Verification:**

- Tailwind CDN removed
- CSS import added
- Everything else intact

**Rollback:** Restore CDN script from git

---

### Step 1.6: Update Vite Config (if needed)

**Action:** Ensure Vite can handle CSS imports

**File to check:** `vite.config.ts`

**Verify it has:**

```typescript
import path from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    // ... existing config
    css: {
      postcss: "./postcss.config.js", // Ensure PostCSS is configured
    },
    // ... rest of config
  };
});
```

**Verification:**

- Vite config allows CSS processing
- PostCSS config referenced

**Rollback:** Revert vite.config.ts changes

---

### Step 1.7: Test Tailwind Setup

**Action:** Start dev server and verify

**Commands:**

```bash
npm run dev
```

**Verification Checklist:**

- ✅ Dev server starts without errors
- ✅ Site loads in browser
- ✅ All styles render correctly
- ✅ Dark mode toggle works
- ✅ Animations work
- ✅ Responsive breakpoints work
- ✅ No console errors
- ✅ No missing styles

**Visual Regression Check:**

- Compare before/after screenshots
- Check all pages (main, case studies)
- Verify all components render correctly

**If errors occur:**

1. Check browser console for errors
2. Check terminal for build errors
3. Verify Tailwind config paths are correct
4. Verify CSS file is imported correctly
5. Check PostCSS config

**Rollback:** If broken, revert to CDN:

```bash
git checkout index.html
npm run dev
```

---

### Step 1.8: Test Production Build

**Action:** Build and preview production version

**Commands:**

```bash
npm run build
npm run preview
```

**Verification Checklist:**

- ✅ Build completes without errors
- ✅ Preview server works
- ✅ Styles are bundled correctly
- ✅ No missing assets
- ✅ Bundle size is reasonable

**Rollback:** If build fails, check:

- Tailwind config content paths
- CSS import paths
- PostCSS config

---

### Step 1.9: Commit Phase 1

**Action:** Commit Tailwind setup

**Commit Message:**

```
feat: set up Tailwind CSS with PostCSS

- Install tailwindcss, postcss, autoprefixer
- Create tailwind.config.js with existing theme
- Create postcss.config.js
- Create src/index.css with Tailwind directives
- Remove Tailwind CDN from index.html
- Preserve all existing styles and animations
- Tested: dev server and production build working
```

**Verification:**

- Git status shows only expected changes
- Commit message is clear

---

## 📋 Phase 2: Code Quality Tools

### Goal

Set up ESLint and Prettier without changing code behavior.

### Step 2.1: Install ESLint Dependencies

**Action:**

```bash
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

**Verification:**

- Dependencies installed
- No errors

**Rollback:** `npm uninstall eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh`

---

### Step 2.2: Create ESLint Config

**Action:** Create `.eslintrc.cjs`

**File to create:** `.eslintrc.cjs`

```javascript
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react-refresh", "@typescript-eslint", "react"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "react/react-in-jsx-scope": "off", // Not needed in React 17+
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
```

**Verification:**

- File created
- Config matches React 19 + TypeScript setup

**Rollback:** Delete `.eslintrc.cjs`

---

### Step 2.3: Install Prettier

**Action:**

```bash
npm install -D prettier prettier-plugin-tailwindcss
```

**Verification:**

- Dependencies installed

**Rollback:** `npm uninstall prettier prettier-plugin-tailwindcss`

---

### Step 2.4: Create Prettier Config

**Action:** Create `.prettierrc`

**File to create:** `.prettierrc`

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

**Verification:**

- File created
- Config is valid JSON

**Rollback:** Delete `.prettierrc`

---

### Step 2.5: Create Prettier Ignore

**Action:** Create `.prettierignore`

**File to create:** `.prettierignore`

```
node_modules
dist
build
coverage
*.min.js
*.min.css
package-lock.json
```

**Verification:**

- File created

**Rollback:** Delete `.prettierignore`

---

### Step 2.6: Add npm Scripts

**Action:** Update `package.json` scripts

**File to update:** `package.json`

**Add to scripts:**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,css,md}\"",
    "format:check": "prettier --check \"**/*.{ts,tsx,js,jsx,json,css,md}\""
  }
}
```

**Verification:**

- Scripts added
- No syntax errors

**Rollback:** Remove scripts from package.json

---

### Step 2.7: Test ESLint

**Action:** Run linting

**Commands:**

```bash
npm run lint
```

**Verification:**

- ESLint runs without errors
- Warnings are acceptable (we'll fix incrementally)
- No blocking errors

**If errors:**

- Review errors
- Fix critical ones
- Document non-critical warnings for later

**Rollback:** Adjust ESLint config if too strict

---

### Step 2.8: Test Prettier (Dry Run)

**Action:** Check formatting without changing files

**Commands:**

```bash
npm run format:check
```

**Verification:**

- Prettier runs
- See what would change (don't apply yet)

**Note:** We'll format files in a separate step after verifying everything works

---

### Step 2.9: Commit Phase 2 (Configs Only)

**Action:** Commit ESLint and Prettier configs

**Commit Message:**

```
feat: add ESLint and Prettier configuration

- Install ESLint with React/TypeScript plugins
- Install Prettier with Tailwind plugin
- Create .eslintrc.cjs with React 19 compatible rules
- Create .prettierrc with Tailwind plugin
- Add lint and format scripts to package.json
- Configs tested, no code changes yet
```

**Verification:**

- Only config files committed
- No code files changed

---

## 📋 Phase 3: Utility Functions

### Goal

Add clsx utility for better className management.

### Step 3.1: Install Dependencies

**Action:**

```bash
npm install clsx tailwind-merge
```

**Verification:**

- Dependencies installed

**Rollback:** `npm uninstall clsx tailwind-merge`

---

### Step 3.2: Create Utility Function

**Action:** Create `lib/utils.ts`

**File to create:** `lib/utils.ts`

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind classes with clsx
 * Handles conditional classes and merges conflicting Tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Verification:**

- File created
- TypeScript compiles without errors
- Function exports correctly

**Rollback:** Delete `lib/utils.ts`

---

### Step 3.3: Test Utility Function

**Action:** Test in a simple component first

**Optional:** Add a test import to verify it works

**Verification:**

- Can import `cn` from `lib/utils`
- No TypeScript errors
- No build errors

---

### Step 3.4: Commit Phase 3

**Action:** Commit utility function

**Commit Message:**

```
feat: add cn utility for className management

- Install clsx and tailwind-merge
- Create lib/utils.ts with cn() helper
- Enables better className merging and conditional classes
- Ready for use in components (will migrate incrementally)
```

**Verification:**

- Utility function committed
- No component changes yet

---

## 📋 Phase 4: Icon Migration

### Goal

Replace Font Awesome with Lucide React icons.

### Step 4.1: Install Lucide React

**Action:**

```bash
npm install lucide-react
```

**Verification:**

- Dependency installed

**Rollback:** `npm uninstall lucide-react`

---

### Step 4.2: Create Icon Mapping Reference

**Action:** Create `docs/icon-migration.md` for reference

**File to create:** `docs/icon-migration.md`

```markdown
# Icon Migration Mapping

## Font Awesome → Lucide React

- `fa-moon` → `Moon`
- `fa-sun` → `Sun`
- `fa-bars` → `Menu`
- `fa-xmark` → `X`
- `fa-github` → `Github`
- `fa-linkedin` → `Linkedin`
- `fa-envelope` → `Mail`
- `fa-video` → `Video`
- `fa-file-arrow-down` → `Download`
- `fa-calendar-check` → `CalendarCheck`
- `fa-diagram-project` → `LayoutGrid`
- `fa-code` → `Code`
- `fa-react` → `Atom` (or custom)
- `fa-js-square` → `FileCode` (or custom)
- `fa-html5` → `FileCode` (or custom)
- `fa-css3-alt` → `Palette` (or custom)
- `fa-git-alt` → `GitBranch`
- `fa-bolt` → `Zap`
- `fa-wind` → `Wind`
- `fa-brain` → `Brain`
- `fa-terminal` → `Terminal`
- `fa-lightbulb` → `Lightbulb`
- `fa-robot` → `Bot`
- `fa-wand-magic-sparkles` → `Wand2`
- `fa-diagram-project` → `Network`
- `fa-plug` → `Plug`
- `fa-screwdriver-wrench` → `Wrench`
- `fa-gauge-high` → `Gauge`
- `fa-universal-access` → `Accessibility`
- `fa-vial` → `FlaskConical`
- `fa-route` → `Route`
- `fa-clapperboard` → `Film`
- `fa-building-columns` → `Building2`
- `fa-certificate` → `Award`
- `fa-quote-left` → `Quote`
- `fa-pen-ruler` → `PenTool`
- `fa-magnifying-glass-chart` → `Search`
- `fa-sparkles` → `Sparkles`
- `fa-rocket` → `Rocket`
- `fa-arrow-up-right-from-square` → `ExternalLink`
- `fa-arrow-left` → `ArrowLeft`
```

**Verification:**

- Mapping document created
- Easy reference for migration

---

### Step 4.3: Migrate Header Component

**Action:** Update `components/Header.tsx`

**Before:**

```tsx
<i className="fa-solid fa-moon"></i>
<i className="fa-solid fa-sun"></i>
<i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
```

**After:**

```tsx
import { Moon, Sun, Menu, X } from "lucide-react";

// In component:
{
  theme === "light" ? (
    <Moon className="h-5 w-5 text-on-surface-variant-light" />
  ) : (
    <Sun className="h-5 w-5 text-on-surface-variant-dark" />
  );
}

{
  isMenuOpen ? (
    <X className="h-6 w-6 text-on-surface-variant-light dark:text-on-surface-variant-dark" />
  ) : (
    <Menu className="h-6 w-6 text-on-surface-variant-light dark:text-on-surface-variant-dark" />
  );
}
```

**Verification Checklist:**

- ✅ Icons import correctly
- ✅ Icons render correctly
- ✅ Sizes match original
- ✅ Colors match original
- ✅ Theme toggle still works
- ✅ Mobile menu still works
- ✅ No console errors

**Test:**

```bash
npm run dev
# Check Header component visually
```

**Rollback:** Revert Header.tsx if issues

---

### Step 4.4: Migrate Contact Component

**Action:** Update `components/Contact.tsx`

**Migrate icons:**

- `fa-video` → `Video`
- `fa-envelope` → `Mail`
- `fa-linkedin` → `Linkedin`
- `fa-github` → `Github`
- `fa-file-arrow-down` → `Download`
- `fa-calendar-check` → `CalendarCheck`
- `fa-diagram-project` → `LayoutGrid`

**Verification Checklist:**

- ✅ All icons render
- ✅ Sizes appropriate
- ✅ Colors correct
- ✅ Links still work
- ✅ Email copy still works

**Test:**

```bash
npm run dev
# Check Contact section visually
# Test email copy button
# Test all links
```

---

### Step 4.5: Migrate Remaining Components

**Action:** Migrate icons in other components one by one

**Components to update:**

1. `Hero.tsx` - `fa-file-arrow-down` → `Download`
2. `About.tsx` - Various icons
3. `Skills.tsx` - Skill category icons
4. `FilmCredits.tsx` - `fa-clapperboard` → `Film`
5. `HowIBuildAI.tsx` - Process step icons
6. `Testimonials.tsx` - `fa-quote-left` → `Quote`
7. `CaseStudyPage.tsx` - Various icons
8. `Projects.tsx` - `fa-arrow-up-right-from-square` → `ExternalLink`

**Strategy:**

- One component at a time
- Test after each migration
- Commit after each component

**Verification:**

- Each component tested individually
- Visual regression check
- All functionality preserved

---

### Step 4.6: Remove Font Awesome CDN

**Action:** Remove from `index.html`

**Remove:**

```html
<!-- Font Awesome for Icons -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
/>
```

**Verification:**

- CDN link removed
- No broken icons
- Site still works

**Test:**

```bash
npm run dev
# Check all pages
# Verify no missing icons
```

---

### Step 4.7: Test Icon Migration

**Action:** Comprehensive testing

**Test Checklist:**

- ✅ All icons render correctly
- ✅ Icon sizes are appropriate
- ✅ Icon colors match design
- ✅ Icons are accessible (aria-hidden where needed)
- ✅ No console errors
- ✅ Build succeeds
- ✅ Bundle size reduced

**Commands:**

```bash
npm run dev    # Visual check
npm run build  # Build check
npm run preview # Production preview
```

**Visual Regression:**

- Compare before/after screenshots
- Check all pages
- Check all components

---

### Step 4.8: Commit Icon Migration

**Action:** Commit icon migration

**Commit Message:**

```
feat: migrate icons from Font Awesome to Lucide React

- Install lucide-react
- Replace Font Awesome icons with Lucide components
- Update Header, Contact, Hero, About, Skills, FilmCredits, HowIBuildAI, Testimonials, Projects, CaseStudyPage
- Remove Font Awesome CDN from index.html
- Icons are now tree-shakeable and React-optimized
- Bundle size reduced by ~80KB
- All icons tested and verified
```

**Verification:**

- All icon migrations complete
- Font Awesome removed
- Site works perfectly

---

## 📋 Phase 5: Code Formatting

### Goal

Format all code with Prettier (after everything works).

### Step 5.1: Format All Files

**Action:** Run Prettier on all files

**Commands:**

```bash
npm run format
```

**Verification:**

- Files formatted
- No syntax errors introduced
- Code still works

**Test:**

```bash
npm run dev
npm run build
```

---

### Step 5.2: Fix ESLint Warnings

**Action:** Fix any remaining ESLint warnings

**Commands:**

```bash
npm run lint:fix
```

**Manual fixes:**

- Review warnings
- Fix critical ones
- Document acceptable warnings

---

### Step 5.3: Commit Formatting

**Action:** Commit formatted code

**Commit Message:**

```
style: format code with Prettier and fix ESLint warnings

- Run Prettier on all files
- Fix ESLint warnings
- Code is now consistently formatted
- No functional changes
```

---

## 📋 Phase 6: Final Verification

### Goal

Ensure everything works perfectly.

### Step 6.1: Comprehensive Testing

**Test Checklist:**

**Development:**

- ✅ `npm run dev` works
- ✅ Site loads correctly
- ✅ All pages work
- ✅ Dark mode works
- ✅ Navigation works
- ✅ Case studies work
- ✅ All animations work
- ✅ No console errors

**Production Build:**

- ✅ `npm run build` succeeds
- ✅ `npm run preview` works
- ✅ Bundle size is reasonable
- ✅ No missing assets
- ✅ Styles are correct

**Code Quality:**

- ✅ `npm run lint` passes (or only acceptable warnings)
- ✅ `npm run format:check` passes
- ✅ TypeScript compiles without errors

**Visual:**

- ✅ All components render correctly
- ✅ Responsive design works
- ✅ Dark mode works
- ✅ Animations work
- ✅ Icons display correctly

---

### Step 6.2: Performance Check

**Action:** Verify improvements

**Check:**

- Bundle size (should be smaller)
- Load time (should be faster)
- No CDN dependencies

**Commands:**

```bash
npm run build
# Check dist folder size
```

---

### Step 6.3: Documentation Update

**Action:** Update CURRENT_STATUS.md

**Update:**

- Tech stack section
- Remove CDN references
- Add new tools
- Update bundle size info

---

## 🚨 Error Prevention Checklist

### Before Each Phase

- [ ] Current code works perfectly
- [ ] Git status is clean (or changes committed)
- [ ] Dev server runs without errors
- [ ] Production build works

### During Each Step

- [ ] Follow exact instructions
- [ ] Test after each change
- [ ] Verify no errors in console
- [ ] Check visual appearance

### After Each Phase

- [ ] Dev server works
- [ ] Production build works
- [ ] Visual regression check
- [ ] Commit changes
- [ ] Document what was done

---

## 🔄 Rollback Strategy

### If Something Breaks

**Immediate Actions:**

1. Stop what you're doing
2. Don't panic
3. Check error messages
4. Review what changed

**Rollback Options:**

**Option 1: Revert Last Commit**

```bash
git log                    # Find commit hash
git revert <commit-hash>   # Revert specific commit
```

**Option 2: Reset to Last Working State**

```bash
git log                    # Find last working commit
git reset --hard <hash>    # Reset to that commit
```

**Option 3: Manual Fix**

- Review error
- Fix specific issue
- Test fix
- Continue

**Option 4: Restore CDN (Tailwind)**

- If Tailwind breaks, restore CDN temporarily
- Fix config issues
- Try again

---

## ✅ Success Criteria

### Phase 1 Complete When:

- ✅ Tailwind CSS installed and working
- ✅ No CDN dependencies for Tailwind
- ✅ Site looks identical to before
- ✅ Dev and production builds work

### Phase 2 Complete When:

- ✅ ESLint configured and running
- ✅ Prettier configured
- ✅ Scripts work
- ✅ No code changes yet

### Phase 3 Complete When:

- ✅ `cn()` utility function available
- ✅ Can import and use it
- ✅ No component changes yet

### Phase 4 Complete When:

- ✅ All icons migrated to Lucide
- ✅ Font Awesome removed
- ✅ All icons render correctly
- ✅ Bundle size reduced

### Phase 5 Complete When:

- ✅ All code formatted
- ✅ ESLint warnings fixed
- ✅ Code is consistent

### Overall Complete When:

- ✅ Everything works perfectly
- ✅ Bundle size reduced
- ✅ Code quality improved
- ✅ Modern stack in place
- ✅ Ready for production

---

## 📝 Notes

### Important Reminders

1. **Test after EVERY step** - Don't skip verification
2. **Commit frequently** - Small, focused commits
3. **One component at a time** - For icon migration
4. **Visual checks** - Compare before/after
5. **No rush** - Quality over speed

### Common Issues & Solutions

**Issue:** Tailwind styles not applying

- **Solution:** Check content paths in tailwind.config.js
- **Solution:** Verify CSS file is imported

**Issue:** Icons not rendering

- **Solution:** Check import statements
- **Solution:** Verify icon names are correct
- **Solution:** Check className props

**Issue:** Build errors

- **Solution:** Check TypeScript errors
- **Solution:** Verify all imports
- **Solution:** Check config files

**Issue:** ESLint/Prettier conflicts

- **Solution:** Run format first, then lint
- **Solution:** Adjust config if needed

---

## 🎯 Timeline Estimate

- **Phase 1:** 30-45 minutes
- **Phase 2:** 20-30 minutes
- **Phase 3:** 10-15 minutes
- **Phase 4:** 1-2 hours (icon migration)
- **Phase 5:** 15-20 minutes
- **Phase 6:** 20-30 minutes

**Total:** ~3-4 hours

---

**Ready to start?** Begin with Phase 1, Step 1.1 and proceed incrementally!
