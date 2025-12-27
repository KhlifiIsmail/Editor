/**
 * Complete theme profile configuration
 */
export interface ThemeProfile {
  id: string;
  name: string;
  description: string;
  colors: {
    dark: ColorPalette;
    light: ColorPalette;
  };
  typography: TypographyConfig;
  animations: AnimationConfig;
}

/**
 * Color palette for a theme mode (dark or light)
 */
export interface ColorPalette {
  // Backgrounds
  bgPrimary: string;
  bgSecondary: string;
  bgTertiary: string;

  // Text
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;

  // Accents
  accentPrimary: string;
  accentSecondary: string;

  // Semantic colors
  success: string;
  warning: string;
  error: string;
  info: string;

  // Effects
  patternGlow: string;
  shadow: string;
}

/**
 * Typography configuration
 */
export interface TypographyConfig {
  codeFont: string;
  uiFont: string;
  scale: TypeScale;
}

/**
 * Type scale for consistent typography
 */
export interface TypeScale {
  display: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  body: TextStyle;
  small: TextStyle;
  tiny: TextStyle;
  code: TextStyle;
  codeSmall: TextStyle;
}

/**
 * Text style definition
 */
export interface TextStyle {
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
}

/**
 * Animation configuration
 */
export interface AnimationConfig {
  enabled: boolean;
  speed: AnimationSpeed;
  reducedMotion: boolean;
}

/**
 * Animation speed presets
 */
export type AnimationSpeed = 'fast' | 'normal' | 'slow';

/**
 * Theme mode
 */
export type ThemeMode = 'dark' | 'light';

/**
 * Spacing system (8px grid)
 */
export interface SpacingSystem {
  xs: string;   // 4px
  sm: string;   // 8px
  md: string;   // 16px
  lg: string;   // 24px
  xl: string;   // 32px
  '2xl': string; // 48px
  '3xl': string; // 64px
}

/**
 * Elevation system (shadows)
 */
export interface ElevationSystem {
  level0: string; // none
  level1: string; // cards
  level2: string; // hover
  level3: string; // modals
  level4: string; // dropdowns
}
