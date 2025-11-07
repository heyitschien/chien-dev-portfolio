# Portfolio Site - Current Status Document

**Last Updated:** January 2025  
**Project:** Chien Escalera Duong Portfolio Website  
**Branch:** `modernize/update-stack` ✅ **MODERNIZED**

---

## 🎯 What We're Building

A modern, animated portfolio website showcasing Chien Duong's work as a Front-End Developer and AI Builder. The site highlights his unique background transitioning from Hollywood stunt performer (Avatar 2, Disney, Warner Bros) to front-end engineering, emphasizing AI-accelerated development workflows.

### Core Purpose

- **Professional Portfolio**: Showcase projects, skills, and testimonials
- **Case Study Platform**: Detailed project deep-dives with interactive navigation
- **Contact Hub**: Multiple CTAs for scheduling calls and downloading resume
- **AI Workflow Showcase**: Demonstrate AI-powered development process

---

## 🛠️ Tech Stack

### Core Technologies

- **React 19.1.0** - UI framework
- **TypeScript 5.7.2** - Type safety
- **Vite 6.2.0** - Build tool and dev server
- **Tailwind CSS** (via CDN) - Utility-first styling
- **Font Awesome 6.4.2** - Icon library

### Development Tools

- **ESM Import Maps** - Module resolution
- **Google Fonts (Inter)** - Typography
- **Vercel** (implied) - Hosting/deployment

### Key Dependencies

```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "typescript": "~5.7.2",
  "vite": "^6.2.0"
}
```

---

## 🎨 UI/UX Design

### Design System

#### Color Palette

**Light Mode:**

- Primary: `#4285F4` (Google Blue)
- Background: `#f8f9fa` (Off-white)
- Surface: `#ffffff` (White)
- On Surface: `#202124` (Dark Gray)
- On Surface Variant: `#5f6368` (Medium Gray)

**Dark Mode:**

- Primary: `#8ab4f8` (Light Blue)
- Background: `#202124` (Google Dark Gray)
- Surface: `#303134` (Dark Surface)
- On Surface: `#e8eaed` (Light Text)
- On Surface Variant: `#969ba1` (Light Gray)

#### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Headings**: Extrabold (800) for hero, Bold (700) for sections

#### Animations

- **Fade-in-up**: Hero elements animate on load
- **Scroll Reveal**: Sections fade in on scroll (Intersection Observer)
- **Hover Effects**: Scale transforms, shadow transitions
- **Reading Progress Bar**: Fixed top bar for case study pages

### Layout Structure

#### Main Page Sections (in order):

1. **Header** - Sticky navigation with theme toggle
2. **Hero** - Headshot, title, CTAs, brand logos
3. **About** - Story + career highlights sidebar
4. **Projects** - Grid of project cards (3 columns desktop)
5. **Skills** - Categorized skill groups (Front-End, AI/Agentic, Tooling)
6. **Film Credits** - Hollywood credits showcase
7. **How I Build AI** - 5-step process visualization
8. **Testimonials** - Client quotes grid
9. **Contact** - Email, social links, intro video, CTAs
10. **Footer** - Copyright notice
11. **Sticky CTA** - Mobile-only floating button

#### Case Study Page Structure:

- **Hero Section** - Project title, summary, metadata sidebar
- **Table of Contents** - Sticky sidebar navigation (desktop)
- **Content Sections**:
  - Overview
  - Goals
  - Solution
  - Impact & Metrics
  - Process
  - Architecture Notes
  - Testing & Performance
  - Challenges & Lessons
  - Results
  - Gallery
- **Reading Progress Bar** - Top of page indicator
- **Keyboard Navigation** - J/K keys for section jumping

### Responsive Breakpoints

- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (≥ 768px)
- **Desktop**: `lg:` (≥ 1024px)

### Accessibility Features

- Skip to content link
- ARIA labels on interactive elements
- Semantic HTML structure
- Focus management
- Screen reader support
- Keyboard navigation (J/K keys on case studies)

---

## 📄 Content Structure

### Projects (3 Featured)

#### 1. Stanford RNA Department Website

- **ID**: `stanford-rna`
- **Role**: UX Consultant & Front-End
- **Org**: Stanford RNA Medicine
- **Timeline**: 2024
- **Stack**: React, Tailwind, Wix, Figma, Vercel Analytics
- **AI Involvement**: Gemini/GPT-assisted UX flows
- **Links**: Live site, Case study
- **Status**: Featured, Order 1

#### 2. Relive — AI Image-to-Video App

- **ID**: `relive`
- **Role**: Lead Front-End
- **Org**: AI Image-to-Video Startup
- **Timeline**: 2024–2025
- **Stack**: React Router, Tailwind v4, PostCSS, Autoprefixer, Sharp, Playwright, Vercel
- **AI Involvement**: Gemini/GPT via Google AI Studio
- **Links**: Live site, GitHub repo, Case study
- **Status**: Featured, Order 2

#### 3. Little Lemon — Restaurant App

- **ID**: `little-lemon`
- **Role**: Solo Developer
- **Org**: Capstone Project
- **Timeline**: 2024
- **Stack**: React, Yup, Vitest, Testing Library, axe, ESLint, Prettier
- **AI Involvement**: AI chatbot via Google AI Studio
- **Links**: Live site, GitHub repo, Case study
- **Status**: Not featured, Order 3

### Skills Categories

#### Front-End

- React, TypeScript, JavaScript (ES6+)
- HTML5, CSS3/Tailwind
- Vite
- State & routing: React Router, TanStack
- Testing: Playwright, Vitest, Testing Library
- a11y, SEO, analytics

#### AI / Agentic

- Prompt engineering & evaluation
- Agentic IDEs: Cursor, Windsurf, Cline
- LLMs: GPT, Claude, Gemini
- Patterns: RAG basics, tool-use/agents, test-time prompting
- Integration: Google AI Studio / OpenAI APIs

#### Tooling & Ops

- Git/GitHub, Vercel
- PostCSS/Autoprefixer, Sharp pipeline
- CI checks, perf budgets, Lighthouse

### Film Credits

1. **Avatar: The Way of Water** - Core MoCap Team (2.5 yrs, Lightstorm/20th Century)
2. **Disney Studios** - Stunt Performer
3. **Warner Bros** - Stunt Performer

### Testimonials (2)

- AI Image-to-Video Startup Founder
- Stanford RNA Program Coordinator

### Contact Information

- **Email**: chien.escalera.duong@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/chien-duong/
- **GitHub**: https://github.com/Chien-Duong
- **Calendly**: https://calendly.com/chien-duong/30min
- **Resume**: `/assets/resume/Chien-Escalera-Duong_Frontend-Engineer_Resume.pdf`
- **Intro Video**: YouTube link (https://www.youtube.com/watch?v=x_qm280q2e0)

---

## 🏗️ Architecture

### File Structure

```
/
├── App.tsx                    # Main app component with routing
├── index.tsx                  # React entry point
├── index.html                 # HTML template with Tailwind config
├── types.ts                   # TypeScript interfaces
├── constants.ts               # Project data, skills, testimonials
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
├── components/
│   ├── Header.tsx             # Navigation with theme toggle
│   ├── Hero.tsx               # Landing section
│   ├── About.tsx              # About section
│   ├── Projects.tsx           # Project grid
│   ├── Skills.tsx             # Skills showcase
│   ├── FilmCredits.tsx        # Film credits grid
│   ├── HowIBuildAI.tsx        # AI workflow process
│   ├── Testimonials.tsx       # Client testimonials
│   ├── Contact.tsx            # Contact section
│   ├── Footer.tsx             # Footer component
│   ├── Section.tsx            # Reusable section wrapper
│   ├── CaseStudyPage.tsx     # Detailed case study view
│   └── StickyCTA.tsx          # Mobile floating CTA
└── public/
    ├── assets/
    │   ├── headshots/         # Profile images
    │   ├── logos/             # Brand logos (Avatar, Disney, Warner, Stanford)
    │   └── resume/            # PDF resume
    └── projects/              # Project screenshots
```

### Routing System

- **Hash-based routing** (no React Router dependency)
- Main page: `#` or no hash
- Case studies: `#/case/{projectId}`
- Section anchors: `#about`, `#projects`, etc.

### State Management

- **Theme**: `useState` + `localStorage` persistence
- **Hash routing**: `useState` + `hashchange` listener
- **Scroll spy**: `IntersectionObserver` for active section tracking
- **Menu state**: `useState` for mobile menu toggle

### Component Patterns

- **Functional Components**: All components use React hooks
- **Props Interfaces**: TypeScript interfaces for all props
- **Reusable Wrappers**: `Section` component for consistent spacing/animations
- **Conditional Rendering**: Theme-aware classes, optional content

---

## 🎯 Features

### Implemented Features

#### Navigation

- ✅ Sticky header with backdrop blur
- ✅ Smooth scroll to sections
- ✅ Active section highlighting
- ✅ Mobile hamburger menu
- ✅ Theme toggle (light/dark)
- ✅ Skip to content link

#### Hero Section

- ✅ Responsive headshot image (WebP with JPG fallback)
- ✅ Animated fade-in elements
- ✅ Primary CTA buttons
- ✅ Resume download link
- ✅ Brand logos showcase
- ✅ Trust indicators

#### Projects

- ✅ Project card grid (responsive)
- ✅ Project images with overlays
- ✅ Stack badges
- ✅ Problem/Solution/Impact display
- ✅ Links to live sites, repos, case studies
- ✅ Featured project ordering

#### Case Studies

- ✅ Dynamic routing (`#/case/{id}`)
- ✅ Reading progress bar
- ✅ Sticky table of contents (desktop)
- ✅ Scroll spy for active section
- ✅ Keyboard navigation (J/K keys)
- ✅ Project metadata sidebar
- ✅ Gallery section
- ✅ Back to portfolio link

#### Skills

- ✅ Categorized skill groups
- ✅ Icon-based display
- ✅ Responsive grid layout

#### Film Credits

- ✅ Logo-based cards
- ✅ Hover effects
- ✅ Responsive grid

#### AI Process

- ✅ 5-step visual process
- ✅ Color-coded steps
- ✅ Icon-based design

#### Contact

- ✅ Email copy functionality
- ✅ Social media links
- ✅ YouTube video embed
- ✅ Calendly integration
- ✅ Resume download
- ✅ Multiple CTAs

#### Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Screen reader support

#### Performance

- ✅ Lazy loading images
- ✅ WebP image format
- ✅ Intersection Observer for animations
- ✅ Optimized font loading

### In Progress / Planned Features

- ⏳ Real metrics for projects (currently placeholders)
- ⏳ Testimonial author names (currently `[Name]`)
- ⏳ Architecture diagrams in case studies
- ⏳ Video content in galleries
- ⏳ Analytics integration (Vercel Analytics mentioned but not implemented)

---

## 📦 Assets & Resources

### Images

#### Headshots

- `/assets/headshots/chien_head_shot.webp`
- `/assets/headshots/chien_head_shot.jpg`

#### Brand Logos

- `/assets/logos/avatar.png` - Avatar: The Way of Water
- `/assets/logos/disney.png` - Disney
- `/assets/logos/warner.png` - Warner Bros
- `/assets/logos/stanford.png` - Stanford

#### Project Screenshots

- `/projects/stanford.webp` & `.jpg`
- `/projects/relive.webp` & `.jpg`
- `/projects/little-lemon.webp` & `.jpg`

#### Resume

- `/assets/resume/Chien-Escalera-Duong_Frontend-Engineer_Resume.pdf`

### External Resources

- **Tailwind CSS**: CDN (https://cdn.tailwindcss.com)
- **Font Awesome**: CDN (https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css)
- **Google Fonts**: Inter font family
- **YouTube**: Intro video embed
- **Calendly**: Scheduling integration

---

## 🔄 Current Development Status

### Active Branch

`fix/case-study-overflow` - Working on overflow issues in case study pages

### Modified Files (Uncommitted)

- `components/CaseStudyPage.tsx` - Case study layout fixes
- `components/Header.tsx` - Navigation improvements
- `components/Section.tsx` - Section wrapper updates
- `components/StickyCTA.tsx` - Mobile CTA adjustments

### Known Issues / TODOs

1. **Content Placeholders**:
   - Testimonial author names need to be filled in
   - Some project metrics are placeholders
   - Architecture diagrams are placeholders

2. **Performance**:
   - Consider implementing React Router for better routing
   - Bundle size optimization opportunities
   - Image optimization pipeline

3. **Features**:
   - Analytics integration (Vercel Analytics)
   - Form handling for contact (currently just email copy)
   - Blog section (if planned)

4. **Accessibility**:
   - Add more comprehensive keyboard navigation
   - Enhanced focus indicators
   - Screen reader testing

---

## 🚀 Deployment

### Build Commands

```bash
npm install          # Install dependencies
npm run dev         # Development server
npm run build       # Production build
npm run preview     # Preview production build
```

### Environment Variables

- `GEMINI_API_KEY` - For AI integrations (if needed)

### Hosting

- **Platform**: Vercel (implied from stack mentions)
- **Build Output**: `dist/` directory
- **Static Assets**: `public/` directory

---

## 📊 Content Summary

### Text Content Overview

#### Hero Section

- **Title**: "Chien Escalera Duong Front-End Developer • AI Builder (ex-Hollywood Stunt Performer)"
- **Subtitle**: "I turn product ideas into elegant, fast interfaces—delivered with AI-accelerated workflows. 10 yrs on film sets (Avatar 2), now shipping for startups & teams."

#### About Section

- **Story**: Transition from stunt performer to front-end developer
- **Highlights**: Avatar 2 MoCap team, Disney/Warner credits, Stanford collaboration, Meta certificate, AI-driven dev

#### Projects

- 3 detailed project entries with problem/solution/impact structure
- Each includes role, organization, timeframe, stack, and AI involvement

#### Skills

- 3 categories with detailed skill lists
- Front-end, AI/Agentic, and Tooling & Ops

#### Film Credits

- 3 major credits with roles and metadata

#### AI Process

- 5-step workflow: Plan → Build → Verify → Polish → Ship

#### Testimonials

- 2 client testimonials (names pending)

#### Contact

- Multiple contact methods and CTAs
- Intro video embed
- Resume download

---

## 🎨 Design Philosophy

### Visual Style

- **Modern & Clean**: Minimalist design with ample whitespace
- **Professional**: Corporate-friendly color scheme
- **Accessible**: High contrast, readable typography
- **Responsive**: Mobile-first approach

### User Experience

- **Fast**: Optimized loading and animations
- **Intuitive**: Clear navigation and CTAs
- **Engaging**: Smooth animations and interactions
- **Informative**: Detailed project case studies

### Brand Identity

- **Unique Background**: Hollywood-to-tech transition story
- **AI-Focused**: Emphasis on AI-accelerated workflows
- **Results-Driven**: Metrics and impact-focused content
- **Professional**: Enterprise-ready portfolio

---

## 📝 Notes

### Content Strategy

- Emphasizes unique background (stunt performer → developer)
- Highlights AI workflow integration
- Showcases real projects with measurable impact
- Professional yet approachable tone

### Technical Decisions

- Hash routing for simplicity (no React Router dependency)
- Tailwind via CDN for rapid development
- TypeScript for type safety
- Component-based architecture for maintainability

### Future Considerations

- Consider migrating to React Router for better SEO
- Implement proper analytics tracking
- Add blog section for thought leadership
- Consider adding a projects filter/search
- Add more interactive elements (animations, micro-interactions)

---

**Document Status**: Complete  
**Next Review**: After case study overflow fixes are merged
