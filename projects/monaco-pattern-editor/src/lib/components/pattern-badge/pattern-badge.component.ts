import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pattern } from '../../models/pattern.model';

@Component({
  selector: 'mpe-pattern-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pattern-badge.component.html',
  styleUrl: './pattern-badge.component.scss',
})
export class PatternBadgeComponent {
  @Input() pattern!: Pattern;
  @Input() animated: boolean = true;
}
