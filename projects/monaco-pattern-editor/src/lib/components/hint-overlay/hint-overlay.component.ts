import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hint, HintLevel } from '../../models/hint.model';

@Component({
  selector: 'mpe-hint-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hint-overlay.component.html',
  styleUrl: './hint-overlay.component.scss',
})
export class HintOverlayComponent {
  @Input() hints: Hint[] = [];
  @Input() isOpen: boolean = false;
  @Input() currentLevel: HintLevel = 1;

  @Output() close = new EventEmitter<void>();
  @Output() nextHint = new EventEmitter<HintLevel>();
  @Output() previousHint = new EventEmitter<HintLevel>();

  get currentHint(): Hint | undefined {
    return this.hints[this.currentLevel - 1];
  }

  get canGoNext(): boolean {
    return this.currentLevel < this.hints.length;
  }

  get canGoPrevious(): boolean {
    return this.currentLevel > 1;
  }

  onClose(): void {
    this.close.emit();
  }

  onNextHint(): void {
    if (this.canGoNext) {
      this.nextHint.emit((this.currentLevel + 1) as HintLevel);
    }
  }

  onPreviousHint(): void {
    if (this.canGoPrevious) {
      this.previousHint.emit((this.currentLevel - 1) as HintLevel);
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}
