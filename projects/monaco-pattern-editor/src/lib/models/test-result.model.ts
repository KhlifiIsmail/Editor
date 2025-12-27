/**
 * Represents the result of a single test case execution
 */
export interface TestResult {
  /** Test case identifier */
  id: string;

  /** Input for the test case */
  input: string;

  /** Expected output */
  expected: string;

  /** Actual output from user's code */
  actual: string;

  /** Whether the test passed */
  passed: boolean;

  /** Execution time in milliseconds */
  executionTime?: number;

  /** Memory used in MB */
  memoryUsed?: number;

  /** Error message if test failed */
  errorMessage?: string;

  /** Stack trace if error occurred */
  stackTrace?: string;
}

/**
 * Complete execution result for all test cases
 */
export interface ExecutionResult {
  /** Array of test results */
  results: TestResult[];

  /** Overall pass/fail status */
  success: boolean;

  /** Number of tests passed */
  passedCount: number;

  /** Number of tests failed */
  failedCount: number;

  /** Total execution time */
  totalExecutionTime: number;

  /** Timestamp of execution */
  executedAt: Date;

  /** Console output/logs */
  consoleOutput?: string[];
}

/**
 * Code execution request
 */
export interface ExecutionRequest {
  code: string;
  language: SupportedLanguage;
  testCases?: TestCase[];
}

/**
 * Test case definition
 */
export interface TestCase {
  id: string;
  input: string;
  expected: string;
  hidden?: boolean; // Hidden test cases not shown to user
}

/**
 * Supported programming languages
 */
export type SupportedLanguage =
  | 'javascript'
  | 'typescript'
  | 'python'
  | 'java'
  | 'cpp'
  | 'csharp'
  | 'go'
  | 'rust';
