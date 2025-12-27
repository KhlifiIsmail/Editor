import { Pattern, PatternType } from '../../models/pattern.model';
import { Hint } from '../../models/hint.model';
import { TestResult, TestCase } from '../../models/test-result.model';
import { Complexity } from '../../models/complexity.model';

/**
 * Fake pattern detection data
 * Used to simulate AI pattern detection
 */
export const FAKE_PATTERNS: Pattern[] = [
  {
    type: 'Two Pointers',
    confidence: 95,
    lineStart: 8,
    lineEnd: 15,
    description: 'Detected opposing directional iteration pattern',
    color: '#D4A574',
  },
  {
    type: 'Sliding Window',
    confidence: 87,
    lineStart: 3,
    lineEnd: 7,
    description: 'Fixed-size window iteration detected',
    color: '#7FB069',
  },
  {
    type: 'Binary Search',
    confidence: 92,
    lineStart: 10,
    lineEnd: 20,
    description: 'Divide and conquer search pattern',
    color: '#6B9AC4',
  },
];

/**
 * Fake progressive hints for different problems
 * Level 1: High-level concept
 * Level 2: More specific approach
 * Level 3: Algorithm structure
 * Level 4: Nearly complete solution
 */
export const FAKE_HINTS: Record<string, Hint[]> = {
  'two-sum': [
    {
      level: 1,
      content: 'Think about how you can avoid checking every pair of numbers. What data structure allows O(1) lookups?',
      revealed: false,
    },
    {
      level: 2,
      content: 'Use a hash map to store numbers you\'ve seen. For each number, check if its complement exists in the map.',
      revealed: false,
    },
    {
      level: 3,
      content: 'Iterate through the array once. For each number, calculate target - number and check if it exists in your hash map.',
      codeSnippet: 'const seen = new Map();\nfor (let i = 0; i < nums.length; i++) {\n  const complement = target - nums[i];\n  // ...\n}',
      revealed: false,
    },
    {
      level: 4,
      content: 'Complete solution approach:',
      codeSnippet: `function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    seen.set(nums[i], i);
  }

  return [];
}`,
      revealed: false,
    },
  ],
  'reverse-string': [
    {
      level: 1,
      content: 'This is a classic two pointers problem. How can you swap elements from both ends moving inward?',
      revealed: false,
    },
    {
      level: 2,
      content: 'Use two pointers: one at the start (left) and one at the end (right). Swap and move them toward each other.',
      revealed: false,
    },
    {
      level: 3,
      content: 'Initialize left = 0, right = length - 1. While left < right, swap s[left] with s[right], then increment left and decrement right.',
      codeSnippet: 'let left = 0, right = s.length - 1;\nwhile (left < right) {\n  // swap s[left] and s[right]\n}',
      revealed: false,
    },
    {
      level: 4,
      content: 'Complete solution:',
      codeSnippet: `function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}`,
      revealed: false,
    },
  ],
};

/**
 * Fake test cases for problems
 */
export const FAKE_TEST_CASES: Record<string, TestCase[]> = {
  'two-sum': [
    { id: '1', input: '[2,7,11,15], target=9', expected: '[0,1]' },
    { id: '2', input: '[3,2,4], target=6', expected: '[1,2]' },
    { id: '3', input: '[3,3], target=6', expected: '[0,1]' },
  ],
  'reverse-string': [
    { id: '1', input: '["h","e","l","l","o"]', expected: '["o","l","l","e","h"]' },
    { id: '2', input: '["H","a","n","n","a","h"]', expected: '["h","a","n","n","a","H"]' },
  ],
};

/**
 * Fake test results (pass/fail)
 */
export const FAKE_TEST_RESULTS_SUCCESS: TestResult[] = [
  {
    id: '1',
    input: '[2,7,11,15], target=9',
    expected: '[0,1]',
    actual: '[0,1]',
    passed: true,
    executionTime: 12,
    memoryUsed: 2.3,
  },
  {
    id: '2',
    input: '[3,2,4], target=6',
    expected: '[1,2]',
    actual: '[1,2]',
    passed: true,
    executionTime: 8,
    memoryUsed: 2.1,
  },
  {
    id: '3',
    input: '[3,3], target=6',
    expected: '[0,1]',
    actual: '[0,1]',
    passed: true,
    executionTime: 6,
    memoryUsed: 2.0,
  },
];

export const FAKE_TEST_RESULTS_MIXED: TestResult[] = [
  {
    id: '1',
    input: '[2,7,11,15], target=9',
    expected: '[0,1]',
    actual: '[0,1]',
    passed: true,
    executionTime: 12,
    memoryUsed: 2.3,
  },
  {
    id: '2',
    input: '[3,2,4], target=6',
    expected: '[1,2]',
    actual: '[2,1]',
    passed: false,
    executionTime: 8,
    memoryUsed: 2.1,
    errorMessage: 'Expected [1,2] but got [2,1]',
  },
  {
    id: '3',
    input: '[3,3], target=6',
    expected: '[0,1]',
    actual: '[0,1]',
    passed: true,
    executionTime: 6,
    memoryUsed: 2.0,
  },
];

/**
 * Fake complexity analysis data
 */
export const FAKE_COMPLEXITY: Complexity = {
  time: 'O(n)',
  space: 'O(n)',
  explanation: 'Single pass through array with hash map storage',
  breakdown: [
    {
      lineStart: 5,
      lineEnd: 12,
      time: 'O(n)',
      space: 'O(n)',
      explanation: 'Loop iterates n times, hash map stores up to n elements',
    },
  ],
};

export const FAKE_COMPLEXITY_QUADRATIC: Complexity = {
  time: 'O(n²)',
  space: 'O(1)',
  explanation: 'Nested loops with constant space',
  breakdown: [
    {
      lineStart: 3,
      lineEnd: 8,
      time: 'O(n²)',
      space: 'O(1)',
      explanation: 'Outer loop runs n times, inner loop runs n times for each iteration',
    },
  ],
};
