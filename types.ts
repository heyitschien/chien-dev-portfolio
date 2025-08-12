
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
