
import { Project, Skill, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    title: '🔬 Stanford RNA Department Website',
    description: 'Developed a responsive front-end for a research department, improving information access for scientists.',
    tags: [
      { name: 'React', colorClass: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
      { name: 'Vite', colorClass: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
      { name: 'Tailwind', colorClass: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200' },
    ],
    imageUrl: '/projects/stanford.jpg',
    imageWebp: '/projects/stanford.webp',
    imageJpg: '/projects/stanford.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: '🤖 AI Image-to-Video App',
    description: 'Built the UI for an innovative AI startup, enabling users to generate video clips from still images.',
    tags: [
        { name: 'React', colorClass: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
        { name: 'Node.js', colorClass: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200' },
        { name: 'API', colorClass: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' },
    ],
    imageUrl: '/projects/relive.jpg',
    imageWebp: '/projects/relive.webp',
    imageJpg: '/projects/relive.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: '💻 Personal Template Generator',
    description: 'A personal project to showcase component-based architecture, allowing users to scaffold new web projects.',
    tags: [
        { name: 'JavaScript', colorClass: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
        { name: 'Tailwind', colorClass: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200' },
    ],
    imageUrl: '/projects/little-lemon.jpg',
    imageWebp: '/projects/little-lemon.webp',
    imageJpg: '/projects/little-lemon.jpg',
    liveUrl: '#',
    githubUrl: '#',
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
