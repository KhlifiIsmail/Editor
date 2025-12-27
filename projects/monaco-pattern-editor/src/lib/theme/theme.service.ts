import { Injectable, signal, effect, computed } from '@angular/core';
import { ThemeProfile, ThemeMode } from '../models/theme.model';
import { OBSIDIAN_WARMTH_THEME } from './profiles/obsidian-warmth.theme';
import { SPACING, ELEVATION, BORDER_RADIUS, EASING, DURATION } from './design-tokens';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY_PROFILE = 'mpe-theme-profile';
  private readonly STORAGE_KEY_MODE = 'mpe-theme-mode';

  // Signals for reactive state
  private currentProfileSignal = signal<ThemeProfile>(OBSIDIAN_WARMTH_THEME);
  private currentModeSignal = signal<ThemeMode>('dark');

  // Public computed values
  currentProfile = this.currentProfileSignal.asReadonly();
  currentMode = this.currentModeSignal.asReadonly();
  currentColors = computed(() => {
    const mode = this.currentModeSignal();
    return this.currentProfileSignal().colors[mode];
  });

  constructor() {
    // Load saved preferences
    this.loadPreferences();

    // Apply theme whenever it changes
    effect(() => {
      this.applyTheme();
    });
  }

  /**
   * Set the theme profile
   */
  setProfile(profile: ThemeProfile): void {
    this.currentProfileSignal.set(profile);
    localStorage.setItem(this.STORAGE_KEY_PROFILE, profile.id);
  }

  /**
   * Set the theme mode (dark/light)
   */
  setMode(mode: ThemeMode): void {
    this.currentModeSignal.set(mode);
    localStorage.setItem(this.STORAGE_KEY_MODE, mode);
  }

  /**
   * Toggle between dark and light mode
   */
  toggleMode(): void {
    const newMode = this.currentModeSignal() === 'dark' ? 'light' : 'dark';
    this.setMode(newMode);
  }

  /**
   * Apply theme to document root
   */
  private applyTheme(): void {
    const profile = this.currentProfileSignal();
    const mode = this.currentModeSignal();
    const colors = profile.colors[mode];
    const root = document.documentElement;

    // Apply color variables
    root.style.setProperty('--mpe-color-bg-primary', colors.bgPrimary);
    root.style.setProperty('--mpe-color-bg-secondary', colors.bgSecondary);
    root.style.setProperty('--mpe-color-bg-tertiary', colors.bgTertiary);
    root.style.setProperty('--mpe-color-text-primary', colors.textPrimary);
    root.style.setProperty('--mpe-color-text-secondary', colors.textSecondary);
    root.style.setProperty('--mpe-color-text-tertiary', colors.textTertiary);
    root.style.setProperty('--mpe-color-accent-primary', colors.accentPrimary);
    root.style.setProperty('--mpe-color-accent-secondary', colors.accentSecondary);
    root.style.setProperty('--mpe-color-success', colors.success);
    root.style.setProperty('--mpe-color-warning', colors.warning);
    root.style.setProperty('--mpe-color-error', colors.error);
    root.style.setProperty('--mpe-color-info', colors.info);
    root.style.setProperty('--mpe-color-pattern-glow', colors.patternGlow);
    root.style.setProperty('--mpe-color-shadow', colors.shadow);

    // Apply typography variables
    root.style.setProperty('--mpe-font-code', profile.typography.codeFont);
    root.style.setProperty('--mpe-font-ui', profile.typography.uiFont);

    // Apply spacing
    root.style.setProperty('--mpe-space-xs', SPACING.xs);
    root.style.setProperty('--mpe-space-sm', SPACING.sm);
    root.style.setProperty('--mpe-space-md', SPACING.md);
    root.style.setProperty('--mpe-space-lg', SPACING.lg);
    root.style.setProperty('--mpe-space-xl', SPACING.xl);
    root.style.setProperty('--mpe-space-2xl', SPACING['2xl']);
    root.style.setProperty('--mpe-space-3xl', SPACING['3xl']);

    // Apply elevation
    root.style.setProperty('--mpe-elevation-0', ELEVATION.level0);
    root.style.setProperty('--mpe-elevation-1', ELEVATION.level1);
    root.style.setProperty('--mpe-elevation-2', ELEVATION.level2);
    root.style.setProperty('--mpe-elevation-3', ELEVATION.level3);
    root.style.setProperty('--mpe-elevation-4', ELEVATION.level4);

    // Apply border radius
    root.style.setProperty('--mpe-radius-sm', BORDER_RADIUS.sm);
    root.style.setProperty('--mpe-radius-md', BORDER_RADIUS.md);
    root.style.setProperty('--mpe-radius-lg', BORDER_RADIUS.lg);
    root.style.setProperty('--mpe-radius-pill', BORDER_RADIUS.pill);

    // Apply animation
    root.style.setProperty('--mpe-ease-smooth', EASING.smooth);
    root.style.setProperty('--mpe-ease-apple', EASING.apple);
    root.style.setProperty('--mpe-ease-bounce', EASING.bounce);
    root.style.setProperty('--mpe-ease-sharp', EASING.sharp);

    root.style.setProperty('--mpe-duration-micro', DURATION.micro);
    root.style.setProperty('--mpe-duration-quick', DURATION.quick);
    root.style.setProperty('--mpe-duration-standard', DURATION.standard);
    root.style.setProperty('--mpe-duration-deliberate', DURATION.deliberate);
    root.style.setProperty('--mpe-duration-slow', DURATION.slow);

    // Set data attribute for mode-specific CSS
    root.setAttribute('data-mpe-theme', mode);
  }

  /**
   * Load preferences from localStorage
   */
  private loadPreferences(): void {
    const savedMode = localStorage.getItem(this.STORAGE_KEY_MODE) as ThemeMode;
    if (savedMode === 'dark' || savedMode === 'light') {
      this.currentModeSignal.set(savedMode);
    }

    // TODO: Load saved profile when we have multiple profiles
  }

  /**
   * Check if user prefers reduced motion
   */
  prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
