/**
 * Represents a progressive hint for helping users solve problems
 */
export interface Hint {
  /** Hint level (1-4, where 4 is most detailed) */
  level: HintLevel;

  /** The hint content/text */
  content: string;

  /** Optional code snippet to show */
  codeSnippet?: string;

  /** Optional visual diagram or explanation */
  diagram?: string;

  /** Whether this hint has been revealed to the user */
  revealed: boolean;
}

/**
 * Hint level - progressive disclosure
 * Level 1: High-level conceptual hint
 * Level 2: More specific approach
 * Level 3: Algorithm structure/pseudocode
 * Level 4: Nearly complete solution skeleton
 */
export type HintLevel = 1 | 2 | 3 | 4;

/**
 * Complete hint system for a problem
 */
export interface HintSystem {
  hints: Hint[];
  currentLevel: HintLevel;
  totalLevels: number;
  problemId?: string;
}

/**
 * Hint request parameters
 */
export interface HintRequest {
  level: HintLevel;
  currentCode?: string;
  problemId?: string;
  userId?: string;
}
