/**
 * Image utility for generating placeholder images using Unsplash
 * Provides medical-themed images for the Dana-Farber Provider Education Platform
 */

export type ImageCategory =
  | 'medical-hero'
  | 'medical-card'
  | 'medical-article'
  | 'medical-symposium'
  | 'medical-research'
  | 'medical-clinical';

interface ImageOptions {
  width?: number;
  height?: number;
  category?: ImageCategory;
  seed?: string;
}

/**
 * Generate an Unsplash image URL for medical/healthcare imagery
 * Uses Unsplash's Source API with medical-related search terms
 *
 * @param options - Image configuration options
 * @returns Unsplash image URL
 */
export function getPlaceholderImage(options: ImageOptions = {}): string {
  const { width = 800, height = 600, category = 'medical-card', seed } = options;

  // Map categories to specific Unsplash search queries
  const categoryQueries: Record<ImageCategory, string> = {
    'medical-hero': 'medical,healthcare,hospital',
    'medical-card': 'medical,doctor,healthcare',
    'medical-article': 'medical,research,science',
    'medical-symposium': 'conference,medical,presentation',
    'medical-research': 'laboratory,medical,research',
    'medical-clinical': 'clinic,healthcare,medical',
  };

  const query = categoryQueries[category];

  // Use Unsplash Source API with specific search terms
  // Format: https://source.unsplash.com/{width}x{height}/?{query}
  let url = `https://source.unsplash.com/${width}x${height}/?${query}`;

  // Add seed for consistent images (optional)
  if (seed) {
    url += `&sig=${seed}`;
  }

  return url;
}

/**
 * Get a hero banner image (1200x600)
 */
export function getHeroImage(seed?: string): string {
  return getPlaceholderImage({
    width: 1200,
    height: 600,
    category: 'medical-hero',
    seed,
  });
}

/**
 * Get a resource card image (800x500)
 */
export function getCardImage(seed?: string): string {
  return getPlaceholderImage({
    width: 800,
    height: 500,
    category: 'medical-card',
    seed,
  });
}

/**
 * Get an article header image (1000x600)
 */
export function getArticleImage(seed?: string): string {
  return getPlaceholderImage({
    width: 1000,
    height: 600,
    category: 'medical-article',
    seed,
  });
}

/**
 * Get a symposium image (800x500)
 */
export function getSymposiumImage(seed?: string): string {
  return getPlaceholderImage({
    width: 800,
    height: 500,
    category: 'medical-symposium',
    seed,
  });
}

/**
 * Get a research/clinical image (800x500)
 */
export function getResearchImage(seed?: string): string {
  return getPlaceholderImage({
    width: 800,
    height: 500,
    category: 'medical-research',
    seed,
  });
}

/**
 * Generate a deterministic seed from a string (e.g., slug)
 * This ensures the same content always gets the same image
 */
export function generateSeed(input: string): string {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString();
}
