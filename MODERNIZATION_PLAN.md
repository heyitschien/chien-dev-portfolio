# Tech Stack Modernization Plan

**Branch:** `modernize/update-stack`  
**Date:** January 2025  
**Goal:** Modernize portfolio tech stack for production readiness, better DX, and maintainability

---

## 🔍 Current State Analysis

### ✅ What's Good

- **React 19.1.0** - Latest React version
- **TypeScript 5.7.2** - Modern TypeScript
- **Vite 6.2.0** - Fast build tool
- Clean component architecture

### ⚠️ What Needs Modernization

#### 1. **Tailwind CSS** - Currently via CDN

- **Issue**: Using CDN (`cdn.tailwindcss.com`) instead of npm package
- **Problems**:
  - No tree-shaking (loads entire Tailwind)
  - No JIT compilation
  - Slower builds
  - No IntelliSense/autocomplete
  - Larger bundle size
- **Solution**: Install `tailwindcss` via npm with proper PostCSS setup

#### 2. **Icons** - Font Awesome via CDN

- **Current**: Font Awesome 6.4.2 via CDN
- **Issues**:
  - Loads entire icon library (~100KB+)
  - Not tree-shakeable
  - External dependency (CDN)
  - Not React-optimized
- **Solution**: Migrate to **Lucide React**
  - Tree-shakeable (only imports what you use)
  - React components (better DX)
  - Smaller bundle size
  - Modern, consistent design
  - Better TypeScript support

#### 3. **Code Quality Tools** - Missing

- **ESLint**: Not configured
- **Prettier**: Not configured
- **Issue**: No code formatting/linting standards
- **Solution**: Set up ESLint + Prettier with React/TypeScript configs

#### 4. **Utility Functions** - Missing

- **clsx/cn**: No className utility for conditional classes
- **Issue**: Manual string concatenation for className logic
- **Solution**: Add `clsx` + `tailwind-merge` (or use `cn` from shadcn)

#### 5. **Shadcn/ui** - Not Installed

- **Current**: Custom components built from scratch
- **Consideration**:
  - **Pros**: Pre-built accessible components, consistent design system
  - **Cons**: Might be overkill if you want full custom control
- **Recommendation**: **Optional** - Consider for Button, Card, Dialog components if you want to speed up development

#### 6. **Routing** - Hash-based (Basic)

- **Current**: Manual hash routing
- **Issue**: Not SEO-friendly, limited features
- **Solution**: Consider React Router (but can keep hash routing if SEO isn't priority)

#### 7. **Testing** - Not Set Up

- **Mentioned in skills**: Playwright, Vitest, Testing Library
- **Current**: Not configured
- **Solution**: Set up Vitest + Testing Library for component tests

---

## 📊 Font Awesome vs Lucide Icons

### Font Awesome (Current)

```html
<!-- Via CDN - loads entire library -->
<i className="fa-solid fa-moon"></i>
<i className="fa-brands fa-github"></i>
```

**Pros:**

- Huge icon library (2000+ icons)
- Well-known, widely used
- Good browser support

**Cons:**

- ❌ Loads entire library (~100KB+)
- ❌ Not tree-shakeable
- ❌ External CDN dependency
- ❌ Not React-optimized (HTML elements)
- ❌ Slower page loads

### Lucide React (Recommended)

```tsx
import { Moon, Github } from 'lucide-react';

<Moon className="w-5 h-5" />
<Github className="w-5 h-5" />
```

**Pros:**

- ✅ Tree-shakeable (only imports what you use)
- ✅ React components (better DX)
- ✅ Smaller bundle (~2-5KB per icon)
- ✅ Modern, consistent design
- ✅ Better TypeScript support
- ✅ Can customize size, color, stroke-width
- ✅ SVG-based (scalable, customizable)

**Cons:**

- Smaller icon library (~1000 icons vs 2000+)
- Different naming conventions (might need to update)

**Migration Impact:**

- ~15-20 icon usages to update
- Estimated bundle size reduction: **~80-90KB**

---

## 🎯 Modernization Checklist

### Phase 1: Core Infrastructure (High Priority)

#### 1.1 Install Tailwind CSS Properly

- [ ] Install `tailwindcss`, `postcss`, `autoprefixer`
- [ ] Create `tailwind.config.js` with proper config
- [ ] Create `postcss.config.js`
- [ ] Create `src/index.css` with Tailwind directives
- [ ] Remove Tailwind CDN from `index.html`
- [ ] Update Vite config if needed
- [ ] Test build and dev server

#### 1.2 Set Up ESLint + Prettier

- [ ] Install ESLint + React/TypeScript plugins
- [ ] Install Prettier
- [ ] Create `.eslintrc.cjs` config
- [ ] Create `.prettierrc` config
- [ ] Create `.prettierignore`
- [ ] Add format/lint scripts to `package.json`
- [ ] Set up VS Code settings (`.vscode/settings.json`)
- [ ] Run initial format on all files

#### 1.3 Add Utility Functions

- [ ] Install `clsx` and `tailwind-merge`
- [ ] Create `lib/utils.ts` with `cn()` helper
- [ ] Update components to use `cn()` where needed

### Phase 2: Icon Migration (Medium Priority)

#### 2.1 Migrate to Lucide React

- [ ] Install `lucide-react`
- [ ] Audit all Font Awesome icon usage
- [ ] Create icon mapping document (FA → Lucide)
- [ ] Replace icons component by component
- [ ] Remove Font Awesome CDN from `index.html`
- [ ] Test all icon displays
- [ ] Verify bundle size reduction

**Icon Mapping Examples:**

- `fa-moon` → `Moon` (lucide-react)
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
- `fa-react` → `Atom` (or custom React icon)
- `fa-js-square` → `FileCode` (or custom JS icon)
- `fa-html5` → `FileCode` (or custom HTML icon)
- `fa-css3-alt` → `Palette` (or custom CSS icon)
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

### Phase 3: Optional Enhancements (Low Priority)

#### 3.1 Consider Shadcn/ui

- [ ] Evaluate if you need pre-built components
- [ ] If yes: Initialize shadcn/ui
- [ ] Migrate Button, Card components if beneficial
- [ ] Keep custom components where needed

#### 3.2 Testing Setup

- [ ] Install Vitest + Testing Library
- [ ] Create `vitest.config.ts`
- [ ] Set up test utilities
- [ ] Write initial component tests
- [ ] Add test scripts

#### 3.3 React Router (Optional)

- [ ] Evaluate SEO needs
- [ ] If needed: Install React Router
- [ ] Migrate hash routing to React Router
- [ ] Set up proper routes

---

## 📦 Recommended Package Additions

### Core Dependencies

```json
{
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "lucide-react": "^0.344.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@types/react": "^19.1.10",
    "@types/react-dom": "^19.1.7",
    "typescript": "~5.7.2",
    "vite": "^6.2.0",

    // Tailwind CSS
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.35",
    "autoprefixer": "^10.4.17",

    // Code Quality
    "eslint": "^8.57.0",
    "@typescript-eslint/eslint-plugin": "^7.0.0",
    "@typescript-eslint/parser": "^7.0.0",
    "eslint-plugin-react": "^7.34.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "prettier": "^3.2.5",
    "prettier-plugin-tailwindcss": "^0.5.11",

    // Testing (Optional)
    "vitest": "^1.2.0",
    "@testing-library/react": "^14.1.2",
    "@testing-library/jest-dom": "^6.2.0",
    "@testing-library/user-event": "^14.5.1"
  }
}
```

---

## 🚀 Implementation Priority

### Must Have (Do First)

1. ✅ **Tailwind CSS** - Production-ready setup
2. ✅ **ESLint + Prettier** - Code quality
3. ✅ **clsx/cn utility** - Better DX

### Should Have (Do Next)

4. ✅ **Lucide Icons** - Performance + DX improvement
5. ⚠️ **Testing Setup** - If you want to showcase testing skills

### Nice to Have (Consider Later)

6. ⚠️ **Shadcn/ui** - Only if you want pre-built components
7. ⚠️ **React Router** - Only if SEO is important

---

## 📈 Expected Improvements

### Bundle Size

- **Current**: ~100KB+ (Tailwind + Font Awesome CDN)
- **After**: ~20-30KB (tree-shaken Tailwind + Lucide icons)
- **Reduction**: ~70-80KB (~70-80% smaller)

### Performance

- ✅ Faster initial load (no CDN dependencies)
- ✅ Better tree-shaking
- ✅ Smaller bundle size
- ✅ Better caching

### Developer Experience

- ✅ Tailwind IntelliSense
- ✅ Icon autocomplete
- ✅ Consistent code formatting
- ✅ Better TypeScript support
- ✅ Faster builds

---

## 🎯 Next Steps

1. **Review this plan** - Confirm priorities
2. **Start with Phase 1** - Core infrastructure
3. **Test thoroughly** - Ensure nothing breaks
4. **Commit incrementally** - Small, focused commits
5. **Update CURRENT_STATUS.md** - Document changes

---

**Ready to proceed?** Let me know which phase you'd like to start with!
