/**
 * Represents a detected algorithmic pattern in the code
 */
export interface Pattern {
  /** Pattern type identifier (e.g., 'Two Pointers', 'Sliding Window') */
  type: PatternType;

  /** Confidence level (0-100) of pattern detection */
  confidence: number;

  /** Starting line number where pattern is detected */
  lineStart: number;

  /** Ending line number where pattern is detected */
  lineEnd: number;

  /** Human-readable description of the detected pattern */
  description: string;

  /** Optional color for badge/highlight */
  color?: string;
}

/**
 * Supported algorithmic pattern types
 */
export type PatternType =
  | 'Two Pointers'
  | 'Sliding Window'
  | 'Binary Search'
  | 'DFS'
  | 'BFS'
  | 'Dynamic Programming'
  | 'Backtracking'
  | 'Greedy'
  | 'Divide and Conquer'
  | 'Fast & Slow Pointers'
  | 'Merge Intervals'
  | 'Cyclic Sort'
  | 'Top K Elements'
  | 'Modified Binary Search'
  | 'Subsets'
  | 'Tree Traversal'
  | 'Graph Traversal'
  | 'Heap'
  | 'Trie'
  | 'Union Find';

/**
 * Pattern detection result from the mock service
 */
export interface PatternDetectionResult {
  patterns: Pattern[];
  detectedAt: Date;
  codeSnapshot?: string;
}
