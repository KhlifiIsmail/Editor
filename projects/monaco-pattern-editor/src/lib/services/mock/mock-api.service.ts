import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import {
  Pattern,
  PatternDetectionResult,
} from '../../models/pattern.model';
import { Hint, HintLevel } from '../../models/hint.model';
import {
  ExecutionResult,
  TestResult,
  ExecutionRequest,
} from '../../models/test-result.model';
import { Complexity, ComplexityAnalysis } from '../../models/complexity.model';
import {
  FAKE_PATTERNS,
  FAKE_HINTS,
  FAKE_TEST_RESULTS_SUCCESS,
  FAKE_TEST_RESULTS_MIXED,
  FAKE_COMPLEXITY,
  FAKE_COMPLEXITY_QUADRATIC,
} from './mock-data';

/**
 * Mock API Service
 * Simulates backend API calls with fake data and delays
 * This will be replaced with real API calls during internship
 */
@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  /**
   * Detect patterns in code (FAKE - returns hardcoded patterns)
   * Simulates 500ms API delay
   */
  detectPatterns(code: string): Observable<PatternDetectionResult> {
    const result: PatternDetectionResult = {
      patterns: FAKE_PATTERNS,
      detectedAt: new Date(),
      codeSnapshot: code,
    };

    return of(result).pipe(delay(500));
  }

  /**
   * Get hint for specific level (FAKE - returns hardcoded hints)
   * Simulates 300ms API delay
   */
  getHint(level: HintLevel, problemId: string = 'two-sum'): Observable<Hint> {
    const hints = FAKE_HINTS[problemId] || FAKE_HINTS['two-sum'];
    const hint = hints[level - 1] || hints[0];

    return of(hint).pipe(delay(300));
  }

  /**
   * Get all hints for a problem (FAKE - returns hardcoded hints)
   * Simulates 300ms API delay
   */
  getAllHints(problemId: string = 'two-sum'): Observable<Hint[]> {
    const hints = FAKE_HINTS[problemId] || FAKE_HINTS['two-sum'];
    return of(hints).pipe(delay(300));
  }

  /**
   * Execute code and run tests (FAKE - returns hardcoded results)
   * Simulates 1000ms execution delay
   */
  executeCode(request: ExecutionRequest): Observable<ExecutionResult> {
    // Randomly return success or mixed results for demo purposes
    const results =
      Math.random() > 0.5
        ? FAKE_TEST_RESULTS_SUCCESS
        : FAKE_TEST_RESULTS_MIXED;

    const passedCount = results.filter((r) => r.passed).length;
    const failedCount = results.length - passedCount;

    const executionResult: ExecutionResult = {
      results,
      success: failedCount === 0,
      passedCount,
      failedCount,
      totalExecutionTime: results.reduce(
        (sum, r) => sum + (r.executionTime || 0),
        0
      ),
      executedAt: new Date(),
      consoleOutput: ['Running tests...', `Passed: ${passedCount}/${results.length}`],
    };

    return of(executionResult).pipe(delay(1000));
  }

  /**
   * Analyze complexity (FAKE - returns hardcoded complexity)
   * Simulates 400ms API delay
   */
  analyzeComplexity(code: string): Observable<ComplexityAnalysis> {
    // Randomly return different complexities for demo
    const complexity =
      Math.random() > 0.5 ? FAKE_COMPLEXITY : FAKE_COMPLEXITY_QUADRATIC;

    const analysis: ComplexityAnalysis = {
      overall: complexity,
      worstCase: complexity,
      analyzedAt: new Date(),
    };

    return of(analysis).pipe(delay(400));
  }

  /**
   * Simulate a loading state
   */
  simulateLoading(durationMs: number): Observable<boolean> {
    return of(true).pipe(delay(durationMs));
  }
}
