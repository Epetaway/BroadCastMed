/**
 * Dana-Farber Cancer Institute Design System - Color Palette
 * Vivid blue and gold institutional identity with accessible neutrals
 */

export const dfColors = {
  // Primary Brand Blue - used for CTAs and navigation highlights
  'df-blue': {
    50: '#e6f2ff',
    100: '#b3d9ff',
    200: '#80c0ff',
    300: '#4da7ff',
    400: '#1a8eff',
    500: '#0066cc', // Primary brand blue
    600: '#0052a3',
    700: '#003d7a',
    800: '#002952',
    900: '#001429',
  },

  // Dark Blue - used for headings and footer backgrounds
  'df-blue-dark': {
    50: '#e6eef5',
    100: '#b3cce0',
    200: '#80aacb',
    300: '#4d88b6',
    400: '#1a66a1',
    500: '#003d7a', // Dark blue for headings
    600: '#003162',
    700: '#002549',
    800: '#001931',
    900: '#000c18',
  },

  // Gold Accent - used for badges and highlights
  'df-gold': {
    50: '#fffbeb',
    100: '#fff3c6',
    200: '#ffeb9c',
    300: '#ffe373',
    400: '#ffdb4a',
    500: '#ffc107', // Primary gold accent
    600: '#cc9a06',
    700: '#997404',
    800: '#664d03',
    900: '#332701',
  },

  // Neutral Palette - backgrounds and text
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
} as const;

export type DFColorName = keyof typeof dfColors;
export type DFColorShade = keyof (typeof dfColors)['df-blue'];
