import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecutionResult, TestResult } from '../../models/test-result.model';

@Component({
  selector: 'mpe-test-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-results.component.html',
  styleUrl: './test-results.component.scss',
})
export class TestResultsComponent {
  @Input() result!: ExecutionResult;
  @Input() loading: boolean = false;

  /**
   * Track by function for *ngFor performance
   */
  trackByTestId(index: number, test: TestResult): string {
    return test.id;
  }
}
