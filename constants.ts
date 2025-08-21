 
import { Project, Skill, SkillCategory, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'stanford-rna',
    title: 'Stanford RNA Department Website',
    role: 'UX Consultant & Front-End',
    org: 'Stanford RNA Medicine',
    timeframe: '2024',
    summary: 'Standardized IA and components, prototyped flows, and improved SEO clarity for a research program.',
    problem: 'Inconsistent IA and low SEO clarity limited discoverability and task completion.',
    solution: 'Rapid prototypes (Zilane), standardized components, and AI-assisted UX explorations.',
    impact: ['Improved time-to-content (est.)', 'Lighthouse SEO from 9X→9Y'],
    stack: ['React', 'Tailwind', 'Wix', 'Figma', 'Vercel Analytics'],
    aiInvolvement: ['Gemini/GPT-assisted UX flows'],
    links: { live: 'https://www.stanfordrnamedicine.com/', caseStudy: '#/case/stanford-rna' },
    images: [
      { src: '/projects/stanford.webp', alt: 'Stanford RNA Medicine website preview' },
      { src: '/projects/stanford.jpg', alt: 'Stanford RNA Medicine website preview (jpg)' },
    ],
    tags: ['UX', 'Prototyping', 'SEO', 'AI'],
    featured: true,
    order: 1,
  },
  {
    id: 'relive',
    title: 'Relive — AI Image-to-Video App',
    role: 'Lead Front-End',
    org: 'AI Image-to-Video Startup',
    timeframe: '2024–2025',
    summary: 'Built UI system, routing, media pipeline, analytics, and E2E tests for an AI image-to-video product.',
    problem: 'Need a performant, shippable front-end with preview interactions and stable media handling.',
    solution: 'Design system, router-based navigation, Sharp media pipeline, analytics, and E2E coverage.',
    impact: ['LCP < 2.0s on hero', 'Preview errors ↓; conversion ↑ (add real metrics)'],
    stack: ['React Router', 'Tailwind v4', 'PostCSS', 'Autoprefixer', 'Sharp', 'Playwright', 'Vercel'],
    aiInvolvement: ['Gemini/GPT via Google AI Studio for integrations'],
    links: { live: 'https://www.relive.photo/', repo: 'https://github.com/joiscoding/relive', caseStudy: '#/case/relive' },
    images: [
      { src: '/projects/relive.webp', alt: 'Relive app preview' },
      { src: '/projects/relive.jpg', alt: 'Relive app preview (jpg)' },
    ],
    tags: ['React', 'Design System', 'Routing', 'E2E', 'Analytics', 'AI'],
    featured: true,
    order: 2,
  },
  {
    id: 'little-lemon',
    title: 'Little Lemon — Restaurant App',
    role: 'Solo Developer',
    org: 'Capstone Project',
    timeframe: '2024',
    summary: 'Reservation and checkout flows with validation, tests, a11y, and an AI menu Q&A assistant.',
    problem: 'Provide clear ordering/reservation UX with validation and accessibility.',
    solution: 'React Router flows, Yup validation, Vitest + Testing Library + axe, ESLint/Prettier.',
    impact: ['A11y score 100', 'E2E/tests passing; CI green'],
    stack: ['React', 'Yup', 'Vitest', 'Testing Library', 'axe', 'ESLint', 'Prettier'],
    aiInvolvement: ['AI chatbot via Google AI Studio (Gemini/GPT)'],
    links: { live: 'https://little-lemon-kappa.vercel.app/', repo: 'https://github.com/heyitschien/little-lemon', caseStudy: '#/case/little-lemon' },
    images: [
      { src: '/projects/little-lemon.webp', alt: 'Little Lemon app preview' },
      { src: '/projects/little-lemon.jpg', alt: 'Little Lemon app preview (jpg)' },
    ],
    tags: ['React', 'Forms', 'Routing', 'Validation', 'Testing', 'A11y', 'AI'],
    featured: false,
    order: 3,
  },
];

// Conversion targets
// Replace with your hosted PDF and video URLs when available
export const RESUME_URL: string = '/assets/resume/chien-front-end-resume.pdf';
export const INTRO_VIDEO_URL: string = 'https://www.youtube.com/watch?v=x_qm280q2e0';

export const SKILLS: Skill[] = [
  { name: 'React', iconClass: 'fab fa-react' },
  { name: 'TypeScript', iconClass: 'fa-solid fa-code' },
  { name: 'JavaScript (ES6+)', iconClass: 'fab fa-js-square' },
  { name: 'HTML5', iconClass: 'fab fa-html5' },
  { name: 'CSS3', iconClass: 'fab fa-css3-alt' },
  { name: 'Tailwind CSS', iconClass: 'fas fa-wind' },
  { name: 'Vite', iconClass: 'fas fa-bolt' },
  { name: 'Git', iconClass: 'fab fa-git-alt' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Front-End',
    skills: [
      { name: 'React', iconClass: 'fab fa-react' },
      { name: 'TypeScript', iconClass: 'fa-solid fa-code' },
      { name: 'JavaScript (ES6+)', iconClass: 'fab fa-js-square' },
      { name: 'HTML5', iconClass: 'fab fa-html5' },
      { name: 'CSS3 / Tailwind', iconClass: 'fab fa-css3-alt' },
      { name: 'Vite', iconClass: 'fas fa-bolt' },
    ],
  },
  {
    title: 'AI / Agentic',
    skills: [
      { name: 'Prompt Engineering', iconClass: 'fa-solid fa-brain' },
      { name: 'Cursor / Windsurf / Cline', iconClass: 'fa-solid fa-terminal' },
      { name: 'GPT / Claude / Gemini', iconClass: 'fa-solid fa-lightbulb' },
      { name: 'Test scaffolding with LLMs', iconClass: 'fa-solid fa-robot' },
    ],
  },
  {
    title: 'Tooling & Ops',
    skills: [
      { name: 'Git/GitHub', iconClass: 'fab fa-git-alt' },
      { name: 'Playwright / Vitest', iconClass: 'fa-solid fa-vial' },
      { name: 'axe / a11y', iconClass: 'fa-solid fa-universal-access' },
      { name: 'Vercel / Analytics', iconClass: 'fa-brands fa-vuejs' },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Chien moved us from concept to a clean, fast site. He communicates like a PM and ships like a senior FE.',
    author: '[Name]',
    role: 'Founder, AI Image-to-Video Startup',
  },
  {
    quote:
      "Professional, responsive, and results-oriented. Exactly what our department needed.",
    author: '[Name]',
    role: 'Program Coordinator, Stanford RNA',
  },
];
