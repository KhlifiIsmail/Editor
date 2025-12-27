import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Complexity } from '../../models/complexity.model';

@Component({
  selector: 'mpe-complexity-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './complexity-badge.component.html',
  styleUrl: './complexity-badge.component.scss',
})
export class ComplexityBadgeComponent {
  @Input() complexity!: Complexity;
  @Input() type: 'time' | 'space' = 'time';
  @Input() compact: boolean = false;
}
