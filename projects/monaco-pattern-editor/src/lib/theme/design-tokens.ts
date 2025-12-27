import { SpacingSystem, ElevationSystem } from '../models/theme.model';

/**
 * Spacing system based on 8px grid
 */
export const SPACING: SpacingSystem = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
};

/**
 * Elevation system (box shadows)
 */
export const ELEVATION: ElevationSystem = {
  level0: 'none',
  level1: '0 2px 8px rgba(0, 0, 0, 0.08)',
  level2: '0 4px 16px rgba(0, 0, 0, 0.12)',
  level3: '0 8px 32px rgba(0, 0, 0, 0.16)',
  level4: '0 16px 64px rgba(0, 0, 0, 0.20)',
};

/**
 * Border radius values
 */
export const BORDER_RADIUS = {
  sm: '6px',
  md: '12px',
  lg: '16px',
  pill: '999px',
};

/**
 * Animation timing functions
 */
export const EASING = {
  smooth: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  apple: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
};

/**
 * Animation durations
 */
export const DURATION = {
  micro: '100ms',
  quick: '200ms',
  standard: '300ms',
  deliberate: '500ms',
  slow: '700ms',
};

/**
 * Z-index layers
 */
export const Z_INDEX = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};
