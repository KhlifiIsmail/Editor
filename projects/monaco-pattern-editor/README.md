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

## Installation

```bash
npm install monaco-pattern-editor
```

## Quick Start

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

Add global styles in your `styles.scss`:

```scss
@import 'monaco-pattern-editor/styles/theme.scss';
```

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

## Documentation

Full documentation available at: [https://github.com/KhlifiIsmail/Editor](https://github.com/KhlifiIsmail/Editor)

## License

MIT © Ismail Khlifi
