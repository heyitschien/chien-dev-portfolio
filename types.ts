
export interface Project {
  title: string;
  description: string;
  tags: { name: string; colorClass: string }[];
  // Legacy single URL (kept for backward compatibility)
  imageUrl: string;
  // Preferred explicit sources for better format fallback
  imageWebp?: string;
  imageJpg?: string;
  liveUrl: string;
  githubUrl: string;
  // Optional: list of tooling/technologies to show as compact badges
  tooling?: string[];
  // Optional: one-liner highlighting your role and impact
  roleImpact?: string;
}

export interface Skill {
  name: string;
  iconClass: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}
