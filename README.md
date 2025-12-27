# Monaco Pattern Editor

A premium Angular library that wraps Monaco Editor (VS Code's editor) with beautiful themes, pattern detection UI, and coding interview preparation features.

## Features

✨ **Premium Monaco Themes** - 9 carefully crafted themes for dark and light modes
🎨 **Smooth Animations** - Apple-inspired smooth transitions and effects
🎯 **Pattern Detection UI** - Visual feedback for coding patterns
📊 **Complexity Analysis** - Big-O notation badges
💡 **Progressive Hints** - Multi-level hint system
✅ **Test Results** - Beautiful test execution results panel
🌓 **Dark/Light Mode** - Full theme switching support
📦 **Standalone Components** - Works with Angular standalone apps
🚀 **Zero Configuration** - Works out of the box

## Themes

### Dark Themes
- **Obsidian Warmth Dark** - Warm, cozy dark theme (default)
- **Catppuccin Mocha** - Pastel dark theme with warm colors
- **Dracula** - Vibrant purple dark theme
- **Nord** - Arctic, north-bluish color palette
- **Tokyo Night** - Neon-inspired dark theme

### Light Themes
- **Obsidian Warmth Light** - Warm light variant
- **Catppuccin Latte** - Soothing light theme with pastels
- **GitHub Light** - Clean, professional light theme
- **Rosé Pine Dawn** - Elegant low-contrast light theme

## Installation

```bash
npm install monaco-pattern-editor
```

## Quick Start

### 1. Import the Module

```typescript
import { Component } from '@angular/core';
import { MonacoEditorComponent } from 'monaco-pattern-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MonacoEditorComponent],
  template: `
    <mpe-monaco-editor
      [language]="'javascript'"
      [initialCode]="code"
      [theme]="'obsidian-warmth'"
      [height]="'600px'"
      (codeChange)="onCodeChange($event)">
    </mpe-monaco-editor>
  `
})
export class AppComponent {
  code = 'console.log("Hello World!");';

  onCodeChange(newCode: string) {
    console.log('Code changed:', newCode);
  }
}
```

### 2. Add Global Styles

In your `styles.scss`:

```scss
@import 'monaco-pattern-editor/styles/theme.scss';
```

## Components

### MonacoEditorComponent

The main editor component.

**Inputs:**
- `language: SupportedLanguage` - Programming language (default: 'javascript')
- `initialCode: string` - Initial code content (default: '')
- `readOnly: boolean` - Make editor read-only (default: false)
- `height: string` - Editor height (default: '600px')
- `theme: string` - Theme name (default: 'obsidian-warmth')
- `patterns: Pattern[]` - Patterns to highlight (default: [])

**Outputs:**
- `codeChange: EventEmitter<string>` - Emits when code changes
- `editorReady: EventEmitter<any>` - Emits when editor is initialized

**Methods:**
- `getValue(): string` - Get current editor value
- `setValue(value: string): void` - Set editor value
- `focus(): void` - Focus the editor
- `highlightPattern(pattern: Pattern): void` - Highlight a pattern
- `clearPatternHighlights(): void` - Clear all highlights

### PatternBadgeComponent

Display detected coding patterns.

```typescript
import { PatternBadgeComponent, Pattern } from 'monaco-pattern-editor';

// In template:
<mpe-pattern-badge
  [pattern]="pattern"
  [animated]="true">
</mpe-pattern-badge>
```

### ComplexityBadgeComponent

Show Big-O complexity.

```typescript
import { ComplexityBadgeComponent, Complexity } from 'monaco-pattern-editor';

// In template:
<mpe-complexity-badge
  [complexity]="complexity"
  [type]="'time'">
</mpe-complexity-badge>
```

### TestResultsComponent

Display test execution results.

```typescript
import { TestResultsComponent, ExecutionResult } from 'monaco-pattern-editor';

// In template:
<mpe-test-results
  [result]="executionResult"
  [loading]="false">
</mpe-test-results>
```

### HintOverlayComponent

Progressive hint system.

```typescript
import { HintOverlayComponent, Hint } from 'monaco-pattern-editor';

// In template:
<mpe-hint-overlay
  [hints]="hints"
  [isOpen]="true"
  [currentLevel]="1"
  (close)="onClose()"
  (nextHint)="onNext($event)"
  (previousHint)="onPrevious($event)">
</mpe-hint-overlay>
```

## Theme Service

Switch themes programmatically:

```typescript
import { ThemeService } from 'monaco-pattern-editor';

constructor(private themeService: ThemeService) {}

// Toggle dark/light mode
this.themeService.toggleMode();

// Get current mode
const mode = this.themeService.currentMode(); // 'dark' | 'light'

// Apply specific theme profile
this.themeService.applyTheme('obsidian-warmth');
```

## Switching Editor Themes

Change the Monaco editor theme dynamically:

```typescript
// In your component:
selectedTheme = 'catppuccin-mocha';

// In template:
<mpe-monaco-editor
  [theme]="selectedTheme">
</mpe-monaco-editor>

// Change theme
changeTheme(newTheme: string) {
  this.selectedTheme = newTheme;
}
```

Available theme values:
- Dark: `'obsidian-warmth'`, `'catppuccin-mocha'`, `'dracula'`, `'nord'`, `'tokyo-night'`
- Light: `'obsidian-warmth'`, `'catppuccin-latte'`, `'github-light'`, `'rose-pine-dawn'`

## Advanced Usage

### Complete Example with All Features

```typescript
import { Component, signal, ViewChild } from '@angular/core';
import {
  MonacoEditorComponent,
  PatternBadgeComponent,
  TestResultsComponent,
  ThemeService,
  Pattern,
  ExecutionResult,
} from 'monaco-pattern-editor';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [
    MonacoEditorComponent,
    PatternBadgeComponent,
    TestResultsComponent,
  ],
  template: `
    <div class="editor-container">
      <!-- Theme Switcher -->
      <select [(ngModel)]="selectedTheme">
        <option value="obsidian-warmth">Obsidian Warmth</option>
        <option value="catppuccin-mocha">Catppuccin Mocha</option>
        <option value="dracula">Dracula</option>
      </select>

      <!-- Editor -->
      <mpe-monaco-editor
        #editor
        [language]="'javascript'"
        [initialCode]="code"
        [theme]="selectedTheme"
        [height]="'600px'"
        (codeChange)="onCodeChange($event)"
        (editorReady)="onEditorReady($event)">
      </mpe-monaco-editor>

      <!-- Patterns -->
      <div *ngIf="detectedPatterns().length > 0">
        <mpe-pattern-badge
          *ngFor="let pattern of detectedPatterns()"
          [pattern]="pattern">
        </mpe-pattern-badge>
      </div>

      <!-- Test Results -->
      <mpe-test-results
        *ngIf="testResults()"
        [result]="testResults()!"
        [loading]="isExecuting()">
      </mpe-test-results>
    </div>
  `
})
export class EditorComponent {
  @ViewChild('editor') editor!: MonacoEditorComponent;

  selectedTheme = 'obsidian-warmth';
  code = 'function hello() { return "world"; }';
  detectedPatterns = signal<Pattern[]>([]);
  testResults = signal<ExecutionResult | null>(null);
  isExecuting = signal(false);

  constructor(public themeService: ThemeService) {}

  onCodeChange(newCode: string) {
    // Handle code changes
  }

  onEditorReady(editor: any) {
    // Editor is ready
    this.editor.focus();
  }
}
```

## Types

```typescript
// Pattern
interface Pattern {
  type: string;
  confidence: number;
  lineStart: number;
  lineEnd: number;
  description: string;
  examples: string[];
}

// Complexity
interface Complexity {
  value: string;
  description: string;
}

// Test Result
interface TestCase {
  input: any;
  expectedOutput: any;
  actualOutput?: any;
  passed: boolean;
  error?: string;
}

interface ExecutionResult {
  testCases: TestCase[];
  executionTime: number;
  memoryUsed: number;
  consoleOutput?: string[];
}

// Hint
interface Hint {
  level: 1 | 2 | 3 | 4;
  content: string;
  revealed: boolean;
}

// Supported Languages
type SupportedLanguage =
  | 'javascript'
  | 'typescript'
  | 'python'
  | 'java'
  | 'cpp'
  | 'csharp';
```

## Design Tokens

The library uses CSS custom properties for theming. You can override them:

```scss
:root {
  --mpe-color-accent-primary: #D4A574;
  --mpe-color-accent-secondary: #C69668;
  --mpe-color-success: #7FB069;
  --mpe-color-error: #D16666;
  --mpe-color-warning: #E4A853;
  --mpe-font-code: 'JetBrains Mono', 'Fira Code', monospace;
  --mpe-font-ui: 'Inter', system-ui, sans-serif;
}
```

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

## Requirements

- Angular 15+
- TypeScript 4.8+
- Node.js 18+

## Demo

Check out the demo app in the repository:

```bash
git clone https://github.com/KhlifiIsmail/monaco-pattern-editor.git
cd monaco-pattern-editor
npm install
ng serve demo
```

Open `http://localhost:4200`

## Contributing

Contributions are welcome! Please read our contributing guidelines.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Author

**Ismail Khlifi** - [GitHub Profile](https://github.com/KhlifiIsmail)

## Acknowledgments

- Monaco Editor by Microsoft
- Inspired by LeetCode, CodeForces, and coding interview platforms
- Theme inspirations: Catppuccin, Dracula, Nord, Tokyo Night, Rosé Pine

## Support

- 🐛 [Report Bug](https://github.com/KhlifiIsmail/monaco-pattern-editor/issues)
- 💡 [Request Feature](https://github.com/KhlifiIsmail/monaco-pattern-editor/issues)
- 📧 [Contact](mailto:ismail.khliffi@gmail.com)

---

Made with ❤️ for developers preparing for coding interviews
