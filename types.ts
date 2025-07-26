
export interface Project {
  title: string;
  description: string;
  tags: { name: string; colorClass: string }[];
  imageUrl: string;
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
