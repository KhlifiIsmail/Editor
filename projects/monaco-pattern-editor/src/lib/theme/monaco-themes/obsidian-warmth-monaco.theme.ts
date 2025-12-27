/**
 * Obsidian Warmth Monaco Editor Theme
 * This is the ACTUAL Monaco theme that gets applied to the editor itself
 */

export const OBSIDIAN_WARMTH_MONACO_DARK = {
  base: 'vs-dark' as const,
  inherit: true,
  rules: [
    // Comments
    { token: 'comment', foreground: '8A827D', fontStyle: 'italic' },

    // Keywords
    { token: 'keyword', foreground: 'D4A574', fontStyle: 'bold' },
    { token: 'keyword.control', foreground: 'D4A574' },

    // Strings
    { token: 'string', foreground: '7FB069' },

    // Numbers
    { token: 'number', foreground: 'E4A853' },

    // Functions
    { token: 'function', foreground: '6B9AC4' },
    { token: 'identifier.function', foreground: '6B9AC4' },

    // Variables
    { token: 'variable', foreground: 'E8E3E1' },
    { token: 'identifier', foreground: 'E8E3E1' },

    // Types
    { token: 'type', foreground: 'B8956A' },

    // Operators
    { token: 'operator', foreground: 'D4A574' },

    // Punctuation
    { token: 'delimiter', foreground: 'B8AFA9' },
  ],
  colors: {
    // Editor background
    'editor.background': '#2E2625',
    'editor.foreground': '#E8E3E1',

    // Line numbers
    'editorLineNumber.foreground': '#8A827D',
    'editorLineNumber.activeForeground': '#D4A574',

    // Cursor
    'editorCursor.foreground': '#D4A574',
    'editorCursor.background': '#2E2625',

    // Selection
    'editor.selectionBackground': '#D4A57440',
    'editor.inactiveSelectionBackground': '#D4A57420',
    'editor.selectionHighlightBackground': '#D4A57430',

    // Current line highlight
    'editor.lineHighlightBackground': '#3D343220',
    'editor.lineHighlightBorder': '#3D3432',

    // Gutter (left side with line numbers)
    'editorGutter.background': '#2E2625',

    // Minimap
    'minimap.background': '#2E2625',

    // Scrollbar
    'scrollbarSlider.background': '#4A434080',
    'scrollbarSlider.hoverBackground': '#4A4340B0',
    'scrollbarSlider.activeBackground': '#D4A574',

    // Brackets
    'editorBracketMatch.background': '#D4A57440',
    'editorBracketMatch.border': '#D4A574',

    // Whitespace
    'editorWhitespace.foreground': '#8A827D40',

    // Indentation guides
    'editorIndentGuide.background': '#8A827D20',
    'editorIndentGuide.activeBackground': '#D4A57460',

    // Widget (autocomplete, hover, etc.)
    'editorWidget.background': '#3D3432',
    'editorWidget.border': '#4A4340',
    'editorSuggestWidget.background': '#3D3432',
    'editorSuggestWidget.border': '#4A4340',
    'editorSuggestWidget.selectedBackground': '#4A4340',

    // Find/Replace
    'editor.findMatchBackground': '#D4A57460',
    'editor.findMatchHighlightBackground': '#D4A57430',

    // Error/Warning squiggles
    'editorError.foreground': '#D16666',
    'editorWarning.foreground': '#E4A853',
    'editorInfo.foreground': '#6B9AC4',
  },
};

export const OBSIDIAN_WARMTH_MONACO_LIGHT = {
  base: 'vs' as const,
  inherit: true,
  rules: [
    // Comments
    { token: 'comment', foreground: '8A827D', fontStyle: 'italic' },

    // Keywords
    { token: 'keyword', foreground: 'A67844', fontStyle: 'bold' },
    { token: 'keyword.control', foreground: 'A67844' },

    // Strings
    { token: 'string', foreground: '5A8F47' },

    // Numbers
    { token: 'number', foreground: 'C88E3A' },

    // Functions
    { token: 'function', foreground: '4A7A9E' },
    { token: 'identifier.function', foreground: '4A7A9E' },

    // Variables
    { token: 'variable', foreground: '2E2625' },
    { token: 'identifier', foreground: '2E2625' },

    // Types
    { token: 'type', foreground: '8B6839' },

    // Operators
    { token: 'operator', foreground: 'A67844' },

    // Punctuation
    { token: 'delimiter', foreground: '5A504A' },
  ],
  colors: {
    // Editor background
    'editor.background': '#F5F3F2',
    'editor.foreground': '#2E2625',

    // Line numbers
    'editorLineNumber.foreground': '#8A827D',
    'editorLineNumber.activeForeground': '#A67844',

    // Cursor
    'editorCursor.foreground': '#A67844',
    'editorCursor.background': '#F5F3F2',

    // Selection
    'editor.selectionBackground': '#A6784440',
    'editor.inactiveSelectionBackground': '#A6784420',
    'editor.selectionHighlightBackground': '#A6784430',

    // Current line highlight
    'editor.lineHighlightBackground': '#E8E3E120',
    'editor.lineHighlightBorder': '#E8E3E1',

    // Gutter
    'editorGutter.background': '#F5F3F2',

    // Minimap
    'minimap.background': '#F5F3F2',

    // Scrollbar
    'scrollbarSlider.background': '#DDD7D480',
    'scrollbarSlider.hoverBackground': '#DDD7D4B0',
    'scrollbarSlider.activeBackground': '#A67844',

    // Brackets
    'editorBracketMatch.background': '#A6784440',
    'editorBracketMatch.border': '#A67844',

    // Whitespace
    'editorWhitespace.foreground': '#8A827D40',

    // Indentation guides
    'editorIndentGuide.background': '#8A827D20',
    'editorIndentGuide.activeBackground': '#A6784460',

    // Widget
    'editorWidget.background': '#E8E3E1',
    'editorWidget.border': '#DDD7D4',
    'editorSuggestWidget.background': '#E8E3E1',
    'editorSuggestWidget.border': '#DDD7D4',
    'editorSuggestWidget.selectedBackground': '#DDD7D4',

    // Find/Replace
    'editor.findMatchBackground': '#A6784460',
    'editor.findMatchHighlightBackground': '#A6784430',

    // Error/Warning squiggles
    'editorError.foreground': '#B84545',
    'editorWarning.foreground': '#C88E3A',
    'editorInfo.foreground': '#4A7A9E',
  },
};
