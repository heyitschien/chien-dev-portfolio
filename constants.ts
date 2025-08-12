
import { Project, Skill, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    title: '🔬 Stanford RNA Department Website',
    description: 'UX design consulting for the Stanford RNA Medicine program, including rapid prototyping (Zilane), component standardization, and SEO improvements. Collaborated directly with program leadership to define IA and user journeys; explored AI-assisted UX flows (Gemini/GPT).',
    tags: [
      { name: 'UX', colorClass: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
      { name: 'Prototyping', colorClass: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
      { name: 'SEO', colorClass: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200' },
      { name: 'AI', colorClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' },
    ],
    tooling: ['Figma', 'Gemini Prototype', 'Wix', 'SEO'],
    roleImpact: 'UX Consultant: led prototyping and IA, introduced standardized components, implemented SEO improvements; advised on AI-enhanced flows.',
    imageUrl: '/projects/stanford.jpg',
    imageWebp: '/projects/stanford.webp',
    imageJpg: '/projects/stanford.jpg',
    liveUrl: 'https://www.stanfordrnamedicine.com/',
    githubUrl: '', // Wix project (no public repo)
  },
  {
    title: '🤖 Relive – AI Image-to-Video App',
    description: 'Lead front-end engineer. Own UI architecture, design system, UX, and performance. Core feature: transform images into video clips. Landing page with interactive preview hero. Tech highlights: React Router navigation, TailwindCSS v4 design system, PostCSS + Autoprefixer, Sharp-based image pipeline, Playwright E2E, and Vercel Analytics; AI integrations via Gemini/GPT (Google AI Studio).',
    tags: [
        { name: 'React', colorClass: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
        { name: 'Design System', colorClass: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200' },
        { name: 'Routing', colorClass: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200' },
        { name: 'Tailwind v4', colorClass: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200' },
        { name: 'E2E', colorClass: 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200' },
        { name: 'Analytics', colorClass: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200' },
        { name: 'AI', colorClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' },
    ],
    tooling: ['React Router', 'Tailwind CSS v4', 'PostCSS', 'Autoprefixer', 'Sharp', 'Playwright', 'Vercel Analytics'],
    roleImpact: 'Lead Front‑End: built design system, routing, landing hero preview; optimized media with Sharp; added analytics and E2E coverage.',
    imageUrl: '/projects/relive.jpg',
    imageWebp: '/projects/relive.webp',
    imageJpg: '/projects/relive.jpg',
    liveUrl: 'https://www.relive.photo/',
    githubUrl: 'https://github.com/joiscoding/relive',
  },
  {
    title: '🍋 Little Lemon – Restaurant App',
    description: 'React capstone for a Mediterranean restaurant. Features checkout flow, forms, reservation logic, and menu UX. Highlight: AI chatbot (Gemini/GPT via Google AI Studio) that answers questions and surfaces menu items. Engineering stack includes React Router, Yup validation, Vitest + Testing Library + axe for a11y, and ESLint/Prettier.',
    tags: [
        { name: 'React', colorClass: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
        { name: 'Forms', colorClass: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
        { name: 'Routing', colorClass: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200' },
        { name: 'Validation', colorClass: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200' },
        { name: 'Testing', colorClass: 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200' },
        { name: 'A11y', colorClass: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200' },
        { name: 'AI', colorClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' },
    ],
    tooling: ['React Router', 'Yup', 'Vitest', 'Testing Library', 'axe', 'ESLint', 'Prettier'],
    roleImpact: 'Solo Dev: implemented checkout/reservation flows, validation, tests, and a11y checks; integrated AI chatbot.',
    imageUrl: '/projects/little-lemon.jpg',
    imageWebp: '/projects/little-lemon.webp',
    imageJpg: '/projects/little-lemon.jpg',
    liveUrl: 'https://little-lemon-kappa.vercel.app/',
    githubUrl: 'https://github.com/heyitschien/little-lemon',
  },
];

export const SKILLS: Skill[] = [
  { name: 'React', iconClass: 'fab fa-react' },
  { name: 'JavaScript (ES6+)', iconClass: 'fab fa-js-square' },
  { name: 'HTML5', iconClass: 'fab fa-html5' },
  { name: 'CSS3', iconClass: 'fab fa-css3-alt' },
  { name: 'Tailwind CSS', iconClass: 'fas fa-wind' },
  { name: 'Git', iconClass: 'fab fa-git-alt' },
  { name: 'Vite', iconClass: 'fas fa-bolt' },
  { name: 'Communication', iconClass: 'fas fa-users' },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "Chien was instrumental in bringing our vision to life. His front-end skills and proactive communication made him a vital part of our team.",
        author: "Amazon Startup Founder",
        role: "AI Image-to-Video Startup",
    },
    {
        quote: "The new website Chien developed has received fantastic feedback. It's clean, professional, and exactly what our department needed.",
        author: "Stanford Contact",
        role: "Stanford RNA Department",
    }
];
