import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MonacoEditorComponent,
  PatternBadgeComponent,
  ComplexityBadgeComponent,
  HintOverlayComponent,
  TestResultsComponent,
  ThemeService,
  MockApiService,
  Pattern,
  Complexity,
  ExecutionResult,
  Hint,
  HintLevel,
} from 'monaco-pattern-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MonacoEditorComponent,
    PatternBadgeComponent,
    ComplexityBadgeComponent,
    HintOverlayComponent,
    TestResultsComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // State
  detectedPatterns = signal<Pattern[]>([]);
  complexity = signal<Complexity | null>(null);
  testResults = signal<ExecutionResult | null>(null);
  hints = signal<Hint[]>([]);
  isHintOverlayOpen = signal(false);
  currentHintLevel = signal<HintLevel>(1);
  isExecuting = signal(false);
  isDetecting = signal(false);
  currentCode = signal('');

  // Initial code sample
  initialCode = `// Two Sum - Classic Interview Problem
function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    seen.set(nums[i], i);
  }

  return [];
}

// Test
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]`;

  constructor(
    public themeService: ThemeService,
    private mockApi: MockApiService
  ) {}

  // Handle code changes
  onCodeChange(code: string): void {
    this.currentCode.set(code);
  }

  // Detect patterns
  detectPatterns(): void {
    this.isDetecting.set(true);
    this.mockApi.detectPatterns(this.currentCode()).subscribe((result) => {
      this.detectedPatterns.set(result.patterns);
      this.isDetecting.set(false);
    });
  }

  // Analyze complexity
  analyzeComplexity(): void {
    this.mockApi.analyzeComplexity(this.currentCode()).subscribe((analysis) => {
      this.complexity.set(analysis.overall);
    });
  }

  // Execute code
  executeCode(): void {
    this.isExecuting.set(true);
    this.mockApi
      .executeCode({
        code: this.currentCode(),
        language: 'javascript',
      })
      .subscribe((result) => {
        this.testResults.set(result);
        this.isExecuting.set(false);
      });
  }

  // Open hint overlay
  openHints(): void {
    this.mockApi.getAllHints('two-sum').subscribe((hints) => {
      this.hints.set(hints);
      this.currentHintLevel.set(1);
      this.isHintOverlayOpen.set(true);
    });
  }

  // Close hint overlay
  closeHints(): void {
    this.isHintOverlayOpen.set(false);
  }

  // Navigate hints
  onNextHint(level: HintLevel): void {
    this.currentHintLevel.set(level);
  }

  onPreviousHint(level: HintLevel): void {
    this.currentHintLevel.set(level);
  }

  // Toggle theme
  toggleTheme(): void {
    this.themeService.toggleMode();
  }
}
