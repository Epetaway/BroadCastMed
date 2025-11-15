export interface ProjectView {
  headline: string;
  summary: string;
  bullets: string[];
}

export interface Project {
  slug: string;
  title: string;
  role: string;
  category: string;
  tech: string[];
  featured?: boolean;
  
  developerView: ProjectView;
  portfolioView: ProjectView;
  
  links: {
    demo?: string;
    repo?: string;
    caseStudy?: string;
  };
  
  images?: {
    hero: string;
    gallery?: string[];
    beforeAfter?: {
      before: string;
      after: string;
      description: string;
    }[];
  };
  
  technicalDetails?: {
    challenges: string[];
    solutions: string[];
    codeSnippets?: {
      title: string;
      description: string;
      code: string;
      language: string;
    }[];
  };
  
  outcomes?: {
    metrics?: string[];
    feedback?: string[];
    improvements?: string[];
  };
}

export interface ViewMode {
  mode: 'developer' | 'portfolio';
}

export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}