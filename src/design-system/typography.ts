/**
 * Typography System
 * Semantic typography classes for BroadcastMed healthcare content
 */

import { designTokens } from './tokens';

export const typography = {
  // Heading styles
  headings: {
    xl: {
      fontSize: designTokens.typography.fontSize['5xl'],
      fontWeight: designTokens.typography.fontWeight.bold,
      lineHeight: designTokens.typography.lineHeight.tight,
      letterSpacing: '-0.02em',
    },
    lg: {
      fontSize: designTokens.typography.fontSize['4xl'],
      fontWeight: designTokens.typography.fontWeight.bold,
      lineHeight: designTokens.typography.lineHeight.tight,
      letterSpacing: '-0.01em',
    },
    md: {
      fontSize: designTokens.typography.fontSize['3xl'],
      fontWeight: designTokens.typography.fontWeight.semibold,
      lineHeight: designTokens.typography.lineHeight.snug,
    },
    sm: {
      fontSize: designTokens.typography.fontSize['2xl'],
      fontWeight: designTokens.typography.fontWeight.semibold,
      lineHeight: designTokens.typography.lineHeight.snug,
    },
    xs: {
      fontSize: designTokens.typography.fontSize.xl,
      fontWeight: designTokens.typography.fontWeight.semibold,
      lineHeight: designTokens.typography.lineHeight.normal,
    },
  },

  // Body text styles
  body: {
    lg: {
      fontSize: designTokens.typography.fontSize.lg,
      fontWeight: designTokens.typography.fontWeight.normal,
      lineHeight: designTokens.typography.lineHeight.relaxed,
    },
    md: {
      fontSize: designTokens.typography.fontSize.base,
      fontWeight: designTokens.typography.fontWeight.normal,
      lineHeight: designTokens.typography.lineHeight.relaxed,
    },
    sm: {
      fontSize: designTokens.typography.fontSize.sm,
      fontWeight: designTokens.typography.fontWeight.normal,
      lineHeight: designTokens.typography.lineHeight.normal,
    },
  },

  // Specialized text styles
  label: {
    fontSize: designTokens.typography.fontSize.sm,
    fontWeight: designTokens.typography.fontWeight.medium,
    lineHeight: designTokens.typography.lineHeight.normal,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },

  caption: {
    fontSize: designTokens.typography.fontSize.xs,
    fontWeight: designTokens.typography.fontWeight.normal,
    lineHeight: designTokens.typography.lineHeight.normal,
  },

  code: {
    fontSize: designTokens.typography.fontSize.sm,
    fontFamily: designTokens.typography.fontFamily.mono,
    fontWeight: designTokens.typography.fontWeight.normal,
  },
} as const;

// Tailwind CSS class mappings for semantic typography
export const typographyClasses = {
  'heading-xl': 'text-5xl font-bold leading-tight tracking-tight',
  'heading-lg': 'text-4xl font-bold leading-tight tracking-tight',
  'heading-md': 'text-3xl font-semibold leading-snug',
  'heading-sm': 'text-2xl font-semibold leading-snug',
  'heading-xs': 'text-xl font-semibold leading-normal',
  'body-lg': 'text-lg font-normal leading-relaxed',
  'body-md': 'text-base font-normal leading-relaxed',
  'body-sm': 'text-sm font-normal leading-normal',
  label: 'text-sm font-medium uppercase tracking-wide',
  caption: 'text-xs font-normal leading-normal',
  code: 'text-sm font-mono',
} as const;

export type TypographyClass = keyof typeof typographyClasses;
