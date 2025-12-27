# Monaco Pattern Editor

> A premium Angular library that wraps Monaco Editor with beautiful themes and coding interview preparation features.

[![npm version](https://img.shields.io/npm/v/@khlifiismail/monaco-pattern-editor.svg)](https://www.npmjs.com/package/@khlifiismail/monaco-pattern-editor)
[![license](https://img.shields.io/npm/l/@khlifiismail/monaco-pattern-editor.svg)](https://github.com/KhlifiIsmail/Editor/blob/main/LICENSE)

## Features

- **9 Premium Themes** - Carefully crafted dark and light themes
- **Smooth Animations** - Apple-inspired transitions
- **Pattern Detection UI** - Visual coding pattern feedback
- **Complexity Analysis** - Big-O notation badges
- **Progressive Hints** - Multi-level hint system
- **Test Results Panel** - Beautiful execution results
- **Dark/Light Mode** - Full theme switching
- **Standalone Components** - Works with modern Angular
- **Zero Configuration** - Works out of the box

## Installation

```bash
npm install @khlifiismail/monaco-pattern-editor
```

## Quick Start

**1. Import the component:**

```typescript
import { Component } from '@angular/core';
import { MonacoEditorComponent } from '@khlifiismail/monaco-pattern-editor';

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

  onCodeChange(code: string) {
    console.log('Code changed:', code);
  }
}
```

**2. Add styles to `styles.scss`:**

```scss
@import '@khlifiismail/monaco-pattern-editor/styles/theme.scss';
```

**3. Run your app:**

```bash
ng serve
```

That's it! The Monaco editor will load automatically.

## Themes

### Dark Themes
- `obsidian-warmth` - Warm, cozy dark theme (default)
- `catppuccin-mocha` - Pastel dark with warm colors
- `dracula` - Vibrant purple theme
- `nord` - Arctic bluish palette
- `tokyo-night` - Neon-inspired dark

### Light Themes
- `catppuccin-latte` - Soothing pastel light
- `github-light` - Clean professional light
- `rose-pine-dawn` - Elegant low-contrast

## API Reference

### MonacoEditorComponent

#### Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `language` | `SupportedLanguage` | `'javascript'` | Programming language |
| `initialCode` | `string` | `''` | Initial code content |
| `readOnly` | `boolean` | `false` | Read-only mode |
| `height` | `string` | `'600px'` | Editor height |
| `theme` | `string` | `'obsidian-warmth'` | Theme name |
| `patterns` | `Pattern[]` | `[]` | Patterns to highlight |

#### Outputs

| Output | Type | Description |
|--------|------|-------------|
| `codeChange` | `EventEmitter<string>` | Emits when code changes |
| `editorReady` | `EventEmitter<any>` | Emits when editor initializes |

#### Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `getValue()` | `string` | Get current code |
| `setValue(value: string)` | `void` | Set code value |
| `focus()` | `void` | Focus the editor |

### Supported Languages

`'javascript'` | `'typescript'` | `'python'` | `'java'` | `'cpp'` | `'csharp'`

## Examples

### Theme Switching

```typescript
import { Component, signal } from '@angular/core';
import { MonacoEditorComponent } from '@khlifiismail/monaco-pattern-editor';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [MonacoEditorComponent],
  template: `
    <select [(ngModel)]="theme">
      <option value="obsidian-warmth">Obsidian Warmth</option>
      <option value="dracula">Dracula</option>
      <option value="nord">Nord</option>
    </select>

    <mpe-monaco-editor
      [theme]="theme"
      [language]="'javascript'"
      [height]="'500px'">
    </mpe-monaco-editor>
  `
})
export class EditorComponent {
  theme = 'obsidian-warmth';
}
```

### With Dark/Light Mode

```typescript
import { Component } from '@angular/core';
import { MonacoEditorComponent, ThemeService } from '@khlifiismail/monaco-pattern-editor';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [MonacoEditorComponent],
  template: `
    <button (click)="themeService.toggleMode()">
      Toggle Mode
    </button>

    <mpe-monaco-editor
      [language]="'typescript'"
      [height]="'600px'">
    </mpe-monaco-editor>
  `
})
export class EditorComponent {
  constructor(public themeService: ThemeService) {}
}
```

### Getting Editor Value

```typescript
import { Component, ViewChild } from '@angular/core';
import { MonacoEditorComponent } from '@khlifiismail/monaco-pattern-editor';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [MonacoEditorComponent],
  template: `
    <mpe-monaco-editor #editor [height]="'500px'"></mpe-monaco-editor>
    <button (click)="getCode()">Get Code</button>
  `
})
export class EditorComponent {
  @ViewChild('editor') editor!: MonacoEditorComponent;

  getCode() {
    const code = this.editor.getValue();
    console.log(code);
  }
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

Clone and run the demo:

```bash
git clone https://github.com/KhlifiIsmail/Editor.git
cd Editor
npm install
ng serve demo
```

Open http://localhost:4200

## Contributing

Contributions welcome!

1. Fork the repo
2. Create branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'feat: add feature'`
4. Push: `git push origin feature/amazing-feature`
5. Open Pull Request

## License

MIT License - see [LICENSE](LICENSE) file

## Author

**Ismail Khlifi**
- GitHub: [@KhlifiIsmail](https://github.com/KhlifiIsmail)
- Email: ismail.khliffi@gmail.com

## Support

- [Report Bug](https://github.com/KhlifiIsmail/Editor/issues)
- [Request Feature](https://github.com/KhlifiIsmail/Editor/issues)

## Acknowledgments

- [Monaco Editor](https://microsoft.github.io/monaco-editor/) by Microsoft
- Theme inspirations: Catppuccin, Dracula, Nord, Tokyo Night, Rosé Pine
- Inspired by LeetCode and coding interview platforms

---

Made with care for developers preparing for coding interviews
