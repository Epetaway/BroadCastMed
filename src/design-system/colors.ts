/**
 * Color System
 * Healthcare-focused color utilities and semantic mappings
 */

import { designTokens } from './tokens';

export const colors = designTokens.colors;

// Semantic color mappings for healthcare contexts
export const semanticColors = {
  // Primary actions and brand
  primary: {
    default: colors.clinicalBlue[500],
    hover: colors.clinicalBlue[600],
    active: colors.clinicalBlue[700],
    light: colors.clinicalBlue[100],
    dark: colors.clinicalBlue[800],
  },

  // Secondary actions
  secondary: {
    default: colors.clinicalTeal[500],
    hover: colors.clinicalTeal[600],
    active: colors.clinicalTeal[700],
    light: colors.clinicalTeal[100],
    dark: colors.clinicalTeal[800],
  },

  // Success states (treatment success, positive outcomes)
  success: {
    default: colors.success[500],
    hover: colors.success[600],
    light: '#d1fae5',
    dark: '#065f46',
  },

  // Warning states (caution, side effects)
  warning: {
    default: colors.warning[500],
    hover: colors.warning[600],
    light: '#fef3c7',
    dark: '#92400e',
  },

  // Error/danger states (critical alerts, contraindications)
  danger: {
    default: colors.accentRed[500],
    hover: colors.accentRed[600],
    active: colors.accentRed[700],
    light: colors.accentRed[100],
    dark: colors.accentRed[800],
  },

  // Neutral states
  neutral: {
    background: colors.neutral[50],
    surface: colors.white,
    border: colors.neutral[300],
    hover: colors.neutral[100],
    disabled: colors.neutral[400],
  },

  // Text colors
  text: {
    primary: colors.neutral[900],
    secondary: colors.neutral[700],
    tertiary: colors.neutral[600],
    inverse: colors.white,
    disabled: colors.neutral[500],
  },
} as const;

// Tailwind CSS class mappings for semantic colors
export const colorClasses = {
  // Backgrounds
  'bg-clinical-blue': 'bg-[#0075e6]',
  'bg-clinical-teal': 'bg-[#00b3b3]',
  'bg-clinical-surface': 'bg-white',
  'bg-clinical-subtle': 'bg-neutral-50',

  // Text
  'text-clinical-blue': 'text-[#0075e6]',
  'text-clinical-teal': 'text-[#00b3b3]',
  'text-clinical-primary': 'text-neutral-900',
  'text-clinical-secondary': 'text-neutral-700',

  // Borders
  'border-clinical-blue': 'border-[#0075e6]',
  'border-clinical-teal': 'border-[#00b3b3]',
  'border-clinical-neutral': 'border-neutral-300',

  // States
  'bg-success': 'bg-[#10b981]',
  'bg-warning': 'bg-[#f59e0b]',
  'bg-danger': 'bg-[#e02424]',
  'text-success': 'text-[#10b981]',
  'text-warning': 'text-[#f59e0b]',
  'text-danger': 'text-[#e02424]',
} as const;

export type ColorClass = keyof typeof colorClasses;
