export type ProjectVisualType =
  | 'your-music-visualizer'
  | 'algo-notebook'
  | 'portfolio-hub'
  | 'proyges-software-2'
  | 'estructuras-datos-c'
  | 'cs50-harvard'
  | 'n8n-automation';

export interface Project {
  id: string;
  repoName: string;
  title: string;
  tagline?: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  languages: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string | null;
  isPrivate: boolean;
  academic: boolean;
  institution?: string;
  featured: boolean;
  status: string;
  role?: string;
  skillsDemonstrated?: string[];
  visualType?: ProjectVisualType | string;
  updatedAt: string;
  stars: number;
  forks: number;
  highlights: string[];
}

export interface Category {
  id: string;
  label: string;
}

export interface SkillItem {
  name: string;
  level?: string;
  description: string;
}

export interface UserProfile {
  name: string;
  github: string;
  email: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  availableForHire: boolean;
}

export interface PortfolioData {
  metadata: {
    generatedAt: string;
    totalProjects: number;
    featuredCount: number;
  };
  user: UserProfile;
  categories: Category[];
  skills: {
    languages: SkillItem[];
    frameworks: SkillItem[];
    tools: SkillItem[];
  };
  projects: Project[];
}
