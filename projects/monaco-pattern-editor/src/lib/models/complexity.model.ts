/**
 * Represents time and space complexity analysis
 */
export interface Complexity {
  /** Time complexity (e.g., 'O(n)', 'O(n log n)') */
  time: ComplexityNotation;

  /** Space complexity (e.g., 'O(1)', 'O(n)') */
  space: ComplexityNotation;

  /** Human-readable explanation */
  explanation?: string;

  /** Detailed breakdown by code section */
  breakdown?: ComplexityBreakdown[];
}

/**
 * Big-O notation representation
 */
export type ComplexityNotation =
  | 'O(1)'
  | 'O(log n)'
  | 'O(n)'
  | 'O(n log n)'
  | 'O(n²)'
  | 'O(n³)'
  | 'O(2ⁿ)'
  | 'O(n!)'
  | string; // Allow custom notation

/**
 * Complexity breakdown for specific code sections
 */
export interface ComplexityBreakdown {
  /** Line numbers this applies to */
  lineStart: number;
  lineEnd: number;

  /** Time complexity for this section */
  time: ComplexityNotation;

  /** Space complexity for this section */
  space: ComplexityNotation;

  /** Explanation for this section */
  explanation: string;
}

/**
 * Complexity analysis result
 */
export interface ComplexityAnalysis {
  /** Overall complexity */
  overall: Complexity;

  /** Best case complexity */
  bestCase?: Complexity;

  /** Average case complexity */
  averageCase?: Complexity;

  /** Worst case complexity */
  worstCase?: Complexity;

  /** Analysis timestamp */
  analyzedAt: Date;
}
