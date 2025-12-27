import { ThemeProfile } from '../../models/theme.model';

/**
 * Obsidian Warmth Theme Profile
 * Premium warm dark theme with sophisticated brown-black base
 */
export const OBSIDIAN_WARMTH_THEME: ThemeProfile = {
  id: 'obsidian-warmth',
  name: 'Obsidian Warmth',
  description: 'Premium warm dark theme with sophisticated brown-black base and gold accents',

  colors: {
    // Dark Mode
    dark: {
      // Backgrounds
      bgPrimary: '#2E2625',
      bgSecondary: '#3D3432',
      bgTertiary: '#4A4340',

      // Text
      textPrimary: '#E8E3E1',
      textSecondary: '#B8AFA9',
      textTertiary: '#8A827D',

      // Accents
      accentPrimary: '#D4A574',
      accentSecondary: '#B8956A',

      // Semantic colors
      success: '#7FB069',
      warning: '#E4A853',
      error: '#D16666',
      info: '#6B9AC4',

      // Effects
      patternGlow: 'rgba(212, 165, 116, 0.15)',
      shadow: 'rgba(0, 0, 0, 0.4)',
    },

    // Light Mode
    light: {
      // Backgrounds
      bgPrimary: '#F5F3F2',
      bgSecondary: '#E8E3E1',
      bgTertiary: '#DDD7D4',

      // Text
      textPrimary: '#2E2625',
      textSecondary: '#5A504A',
      textTertiary: '#8A827D',

      // Accents
      accentPrimary: '#A67844',
      accentSecondary: '#8B6839',

      // Semantic colors
      success: '#5A8F47',
      warning: '#C88E3A',
      error: '#B84545',
      info: '#4A7A9E',

      // Effects
      patternGlow: 'rgba(166, 120, 68, 0.12)',
      shadow: 'rgba(46, 38, 37, 0.08)',
    },
  },

  typography: {
    codeFont: '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
    uiFont: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    scale: {
      display: {
        fontSize: '32px',
        lineHeight: '40px',
        fontWeight: 700,
      },
      h1: {
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: 600,
      },
      h2: {
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: 600,
      },
      h3: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 500,
      },
      body: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 400,
      },
      small: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 400,
      },
      tiny: {
        fontSize: '10px',
        lineHeight: '14px',
        fontWeight: 500,
      },
      code: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 400,
      },
      codeSmall: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 400,
      },
    },
  },

  animations: {
    enabled: true,
    speed: 'normal',
    reducedMotion: false,
  },
};
