/**
 * Content Model - TypeScript interfaces for Dana-Farber CMS
 */

export enum Specialty {
  Colorectal = 'Colorectal',
  Breast = 'Breast',
  GU = 'Genitourinary',
  Gyn = 'Gynecologic',
  Hematologic = 'Hematologic',
  General = 'General Oncology',
}

export enum ResourceType {
  Symposium = 'Symposium',
  News = 'News',
  Video = 'Video',
  ClinicalGuidance = 'Clinical Guidance',
  Research = 'Research',
}

export interface BaseResource {
  id: string;
  slug: string;
  type: ResourceType;
  title: string;
  summary: string;
  specialty: Specialty;
  date: string; // ISO date string
  image: string; // relative path to placeholder image
  tags?: string[];
  relatedContent?: string[]; // slugs of related content
}

export interface ContentSection {
  heading?: string;
  content?: string[];
  subsections?: ContentSection[];
}

export interface SymposiumDetail extends BaseResource {
  seriesName?: string; // e.g., "Gut Instincts", "ASCO Preview"
  cmeCredits?: string;
  durationMinutes?: number;
  presenters?: string[];
  learningObjectives?: string[];
  articleBody: ContentSection[];
}

export interface ResearchDetail extends BaseResource {
  studyType?: string;
  source?: string;
  learningObjectives?: string[];
  articleBody: ContentSection[];
}

export interface ClinicalGuidanceDetail extends BaseResource {
  intendedAudience?: string[];
  whenToUse?: string[];
  keySteps?: string[];
  articleBody: ContentSection[];
}

export interface ProviderResourcesContent {
  heroSpotlight: SymposiumDetail;
  recentResources: BaseResource[];
}
