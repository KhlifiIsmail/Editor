import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../theme/theme.service';
import { Pattern } from '../../models/pattern.model';
import { SupportedLanguage } from '../../models/test-result.model';
import {
  OBSIDIAN_WARMTH_MONACO_DARK,
  OBSIDIAN_WARMTH_MONACO_LIGHT,
} from '../../theme/monaco-themes/obsidian-warmth-monaco.theme';

// Monaco types
declare const monaco: any;

@Component({
  selector: 'mpe-monaco-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monaco-editor.html',
  styleUrl: './monaco-editor.scss',
})
export class MonacoEditorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('editorContainer', { static: false })
  editorContainer!: ElementRef<HTMLDivElement>;

  @Input() language: SupportedLanguage = 'javascript';
  @Input() initialCode: string = '';
  @Input() readOnly: boolean = false;
  @Input() height: string = '600px';
  @Input() patterns: Pattern[] = [];

  @Output() codeChange = new EventEmitter<string>();
  @Output() editorReady = new EventEmitter<any>();

  private editor: any;
  private monacoLoaded = false;
  private patternDecorations: string[] = [];

  constructor(private themeService: ThemeService) {
    // React to theme changes
    effect(() => {
      const mode = this.themeService.currentMode();
      if (this.editor) {
        this.updateEditorTheme(mode);
      }
    });
  }

  ngAfterViewInit(): void {
    this.loadMonaco();
  }

  ngOnDestroy(): void {
    if (this.editor) {
      this.editor.dispose();
    }
  }

  /**
   * Load Monaco Editor dynamically
   */
  private async loadMonaco(): Promise<void> {
    if (this.monacoLoaded) {
      this.initializeEditor();
      return;
    }

    // Load Monaco from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs/loader.js';
    script.onload = () => {
      (window as any).require.config({
        paths: {
          vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs',
        },
      });

      (window as any).require(['vs/editor/editor.main'], () => {
        this.monacoLoaded = true;
        this.initializeEditor();
      });
    };

    document.head.appendChild(script);
  }

  /**
   * Initialize the Monaco Editor instance
   */
  private initializeEditor(): void {
    if (!this.editorContainer) {
      return;
    }

    // Define custom Obsidian Warmth themes
    monaco.editor.defineTheme('obsidian-warmth-dark', OBSIDIAN_WARMTH_MONACO_DARK);
    monaco.editor.defineTheme('obsidian-warmth-light', OBSIDIAN_WARMTH_MONACO_LIGHT);

    const mode = this.themeService.currentMode();

    this.editor = monaco.editor.create(this.editorContainer.nativeElement, {
      value: this.initialCode,
      language: this.language,
      theme: mode === 'dark' ? 'obsidian-warmth-dark' : 'obsidian-warmth-light',
      readOnly: this.readOnly,
      fontSize: 14,
      fontFamily: 'JetBrains Mono, Fira Code, Cascadia Code, monospace',
      fontLigatures: true,
      lineHeight: 20,
      letterSpacing: 0.5,
      minimap: {
        enabled: true,
      },
      scrollBeyondLastLine: false,
      renderWhitespace: 'selection',
      automaticLayout: true,
      padding: {
        top: 16,
        bottom: 16,
      },
      smoothScrolling: true,
      cursorBlinking: 'smooth',
      cursorSmoothCaretAnimation: 'on',
      cursorStyle: 'line',
      cursorWidth: 2,
      roundedSelection: true,
      selectOnLineNumbers: true,
      folding: true,
      foldingHighlight: true,
      bracketPairColorization: {
        enabled: true,
      },
      suggest: {
        preview: true,
        showIcons: true,
      },
      quickSuggestions: {
        other: true,
        comments: false,
        strings: false,
      },
    });

    // Listen to content changes
    this.editor.onDidChangeModelContent(() => {
      const value = this.editor.getValue();
      this.codeChange.emit(value);
    });

    this.editorReady.emit(this.editor);
  }

  /**
   * Update editor theme based on current theme mode
   */
  private updateEditorTheme(mode: 'dark' | 'light'): void {
    if (this.editor) {
      monaco.editor.setTheme(mode === 'dark' ? 'obsidian-warmth-dark' : 'obsidian-warmth-light');
    }
  }

  /**
   * Get current editor value
   */
  getValue(): string {
    return this.editor ? this.editor.getValue() : '';
  }

  /**
   * Set editor value
   */
  setValue(value: string): void {
    if (this.editor) {
      this.editor.setValue(value);
    }
  }

  /**
   * Focus the editor
   */
  focus(): void {
    if (this.editor) {
      this.editor.focus();
    }
  }

  /**
   * Highlight pattern in editor
   */
  highlightPattern(pattern: Pattern): void {
    if (!this.editor) return;

    this.patternDecorations = this.editor.deltaDecorations(
      this.patternDecorations,
      [
        {
          range: new monaco.Range(
            pattern.lineStart,
            1,
            pattern.lineEnd,
            1
          ),
          options: {
            isWholeLine: true,
            className: 'pattern-highlight',
            glyphMarginClassName: 'pattern-glyph',
          },
        },
      ]
    );
  }

  /**
   * Clear all pattern highlights
   */
  clearPatternHighlights(): void {
    if (this.editor) {
      this.patternDecorations = this.editor.deltaDecorations(
        this.patternDecorations,
        []
      );
    }
  }
}
