/**
 * Content Model - TypeScript interfaces for Dana-Farber CMS
 */

export type Specialty = 'Colorectal' | 'Breast' | 'GU' | 'Gyn' | 'Hematologic' | 'General';

export type ResourceType = 'Symposium' | 'News' | 'Video' | 'Clinical Guidance';

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
}

export interface ContentSection {
  heading?: string;
  body: string;
  bullets?: string[];
}

export interface SymposiumDetail extends BaseResource {
  seriesName?: string; // e.g., "Gut Instincts", "ASCO Preview"
  cmeCredits?: string;
  durationMinutes?: number;
  presenters: string[];
  learningObjectives: string[];
  sections: ContentSection[];
  relatedIds?: string[];
}

export interface ResearchDetail extends BaseResource {
  studyType?: string;
  source?: string;
  keyFindings: string[];
  sections: ContentSection[];
  relatedIds?: string[];
}

export interface ClinicalGuidanceDetail extends BaseResource {
  audience: string;
  whenToUse: string[];
  keySteps: string[];
  sections: ContentSection[];
  relatedIds?: string[];
}

export interface ProviderResourcesContent {
  heroSpotlight: SymposiumDetail;
  recentResources: BaseResource[];
}
