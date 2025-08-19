 
export interface Project {
  id: string;
  title: string;
  role: string;
  org?: string;            // e.g., Stanford, Startup, etc.
  timeframe?: string;      // e.g., 2024–2025
  summary: string;         // 1–2 sentence overview
  problem?: string;
  solution?: string;
  impact?: string[];       // bullets with metrics
  stack: string[];         // ["React","TS","Tailwind","Playwright"]
  aiInvolvement?: string[];// e.g. ["Cursor pair-prog","LLM test scaffolding"]
  links?: { live?: string; repo?: string; caseStudy?: string };
  images?: { src: string; alt: string }[];
  tags?: string[];
  featured?: boolean;
  order?: number;
}

export interface Skill {
  name: string;
  iconClass: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}
