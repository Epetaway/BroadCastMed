/**
 * Gradient utility for generating placeholder gradients
 * Provides medical-themed gradients for the Dana-Farber Provider Education Platform
 */

export type GradientCategory =
  | 'medical-hero'
  | 'medical-card'
  | 'medical-article'
  | 'medical-symposium'
  | 'medical-research'
  | 'medical-clinical';

/**
 * Generate a CSS gradient for medical/healthcare imagery
 * Uses Dana-Farber blue/gold palette with varied angles and opacity
 *
 * @param category - Gradient category
 * @param seed - Optional seed for variation
 * @returns CSS gradient string
 */
export function getPlaceholderGradient(
  category: GradientCategory = 'medical-card',
  seed?: string
): string {
  // Dana-Farber color palette
  const colors = {
    blue: '#0066cc',
    blueDark: '#003d7a',
    blueLight: '#4d94e6',
    gold: '#ffc107',
    goldLight: '#ffd54f',
    teal: '#00b3b3',
    gray: '#6b7280',
  };

  // Map categories to specific gradient combinations
  const gradients: Record<GradientCategory, string> = {
    'medical-hero': `linear-gradient(135deg, ${colors.blue} 0%, ${colors.blueDark} 100%)`,
    'medical-card': `linear-gradient(120deg, ${colors.blueLight} 0%, ${colors.blue} 100%)`,
    'medical-article': `linear-gradient(45deg, ${colors.blue} 0%, ${colors.teal} 100%)`,
    'medical-symposium': `linear-gradient(135deg, ${colors.blueDark} 0%, ${colors.gold} 100%)`,
    'medical-research': `linear-gradient(90deg, ${colors.blue} 0%, ${colors.blueLight} 50%, ${colors.gold} 100%)`,
    'medical-clinical': `linear-gradient(180deg, ${colors.blueLight} 0%, ${colors.blue} 100%)`,
  };

  // Add variation based on seed if provided
  if (seed) {
    const hash = generateHash(seed);
    const angle = 45 + (hash % 180); // Random angle between 45-225 degrees
    const variant = hash % 3;

    if (variant === 0) {
      return `linear-gradient(${angle}deg, ${colors.blue} 0%, ${colors.blueDark} 100%)`;
    } else if (variant === 1) {
      return `linear-gradient(${angle}deg, ${colors.blueLight} 0%, ${colors.teal} 100%)`;
    } else {
      return `linear-gradient(${angle}deg, ${colors.blueDark} 0%, ${colors.gold} 100%)`;
    }
  }

  return gradients[category];
}

/**
 * Get a hero banner gradient
 */
export function getHeroGradient(seed?: string): string {
  return getPlaceholderGradient('medical-hero', seed);
}

/**
 * Get a resource card gradient
 */
export function getCardGradient(seed?: string): string {
  return getPlaceholderGradient('medical-card', seed);
}

/**
 * Get an article header gradient
 */
export function getArticleGradient(seed?: string): string {
  return getPlaceholderGradient('medical-article', seed);
}

/**
 * Get a symposium gradient
 */
export function getSymposiumGradient(seed?: string): string {
  return getPlaceholderGradient('medical-symposium', seed);
}

/**
 * Get a research/clinical gradient
 */
export function getResearchGradient(seed?: string): string {
  return getPlaceholderGradient('medical-research', seed);
}

/**
 * Generate a deterministic hash from a string (e.g., slug)
 * This ensures the same content always gets the same gradient
 */
export function generateSeed(input: string): string {
  return generateHash(input).toString();
}

function generateHash(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}
