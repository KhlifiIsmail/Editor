# Publishing Guide - Monaco Pattern Editor

Complete guide to publishing your library to NPM.

## Prerequisites

### 1. Create an NPM Account

If you don't have an NPM account:
1. Go to https://www.npmjs.com/signup
2. Create an account
3. Verify your email

### 2. Login to NPM

```bash
npm login
```

Enter your:
- Username
- Password
- Email (public)
- One-time password (if you have 2FA enabled)

Verify you're logged in:
```bash
npm whoami
```

## Before Publishing

### 1. Update Package Metadata

Edit `projects/monaco-pattern-editor/package.json` and update:

```json
{
  "author": {
    "name": "Ismail Khlifi",
    "email": "ismail.khliffi@gmail.com",
    "url": "https://github.com/KhlifiIsmail"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/KhlifiIsmail/monaco-pattern-editor.git"
  },
  "bugs": {
    "url": "https://github.com/KhlifiIsmail/monaco-pattern-editor/issues"
  },
  "homepage": "https://github.com/KhlifiIsmail/monaco-pattern-editor#readme"
}
```

### 2. Check Package Name Availability

```bash
npm search monaco-pattern-editor
```

If the name is taken, you'll need to:
1. Change the name in `projects/monaco-pattern-editor/package.json`
2. Or use a scoped package: `@yourusername/monaco-pattern-editor`

For scoped packages, update package.json:
```json
{
  "name": "@KhlifiIsmail/monaco-pattern-editor"
}
```

### 3. Update README Links

All GitHub URLs have been updated to use the KhlifiIsmail username in:
- `README.md` (root)
- `projects/monaco-pattern-editor/README.md`

### 4. Create GitHub Repository

1. Go to GitHub and create a new repository
2. Name it `monaco-pattern-editor`
3. Initialize your local repo:

```bash
git init
git add .
git commit -m "feat: initial release of monaco-pattern-editor v1.0.0"
git branch -M main
git remote add origin https://github.com/KhlifiIsmail/monaco-pattern-editor.git
git push -u origin main
```

## Publishing Steps

### Step 1: Build the Library

```bash
# Build the library
ng build monaco-pattern-editor

# Verify the build
ls dist/monaco-pattern-editor
```

You should see:
- `esm2022/` - ES2022 modules
- `fesm2022/` - Flattened ES2022 modules
- `*.d.ts` - TypeScript definitions
- `package.json`
- `README.md`

### Step 2: Test the Build Locally (Optional but Recommended)

Test the package locally before publishing:

```bash
# Navigate to dist
cd dist/monaco-pattern-editor

# Pack the library (creates a .tgz file)
npm pack

# This creates: monaco-pattern-editor-1.0.0.tgz

# Install it in a test project
cd /path/to/test-project
npm install /path/to/Editor/dist/monaco-pattern-editor/monaco-pattern-editor-1.0.0.tgz

# Test it works
```

### Step 3: Publish to NPM

```bash
# Navigate to the dist directory
cd dist/monaco-pattern-editor

# Publish (public package)
npm publish --access public

# If using scoped package (@KhlifiIsmail/monaco-pattern-editor)
npm publish --access public
```

### Step 4: Verify Published Package

1. Check NPM: https://www.npmjs.com/package/monaco-pattern-editor
2. Install in a test project:

```bash
npm install monaco-pattern-editor
```

## Post-Publishing

### 1. Create a Git Tag

```bash
# Return to project root
cd ../..

# Create a version tag
git tag v1.0.0
git push origin v1.0.0
```

### 2. Create a GitHub Release

1. Go to your GitHub repo
2. Click "Releases" → "Create a new release"
3. Choose tag `v1.0.0`
4. Title: `Release v1.0.0`
5. Description:
```markdown
## Features

- Premium Monaco Editor wrapper for Angular
- 9 beautiful themes (5 dark + 4 light)
- Pattern detection UI components
- Test results visualization
- Complexity badges
- Progressive hint system
- Full dark/light mode support

## Themes

**Dark:** Obsidian Warmth, Catppuccin Mocha, Dracula, Nord, Tokyo Night
**Light:** Obsidian Warmth, Catppuccin Latte, GitHub Light, Rosé Pine Dawn

## Installation

\`\`\`bash
npm install monaco-pattern-editor
\`\`\`

See [README](https://github.com/KhlifiIsmail/monaco-pattern-editor#readme) for documentation.
```

### 3. Share Your Library

Share on:
- Twitter/X
- Reddit (r/Angular, r/webdev)
- Dev.to
- LinkedIn
- Angular Discord/Slack communities

## Updating the Package

### Version Updates

Follow semantic versioning (https://semver.org/):

- **Patch** (1.0.1): Bug fixes, no breaking changes
- **Minor** (1.1.0): New features, no breaking changes
- **Major** (2.0.0): Breaking changes

```bash
# Update version in package.json
cd projects/monaco-pattern-editor
npm version patch   # 1.0.0 -> 1.0.1
npm version minor   # 1.0.0 -> 1.1.0
npm version major   # 1.0.0 -> 2.0.0

# Build and publish
cd ../..
ng build monaco-pattern-editor
cd dist/monaco-pattern-editor
npm publish
```

### Creating Changelogs

Create `CHANGELOG.md` in project root:

```markdown
# Changelog

## [1.0.0] - 2025-12-27

### Added
- Initial release
- Monaco Editor wrapper component
- 9 premium themes (5 dark + 4 light)
- Pattern detection UI
- Test results component
- Complexity badges
- Hint overlay system
- Theme service for dark/light mode
- Full TypeScript support
```

## Troubleshooting

### Error: Package name already exists

```bash
# Use a scoped package
# Update package.json name to: "@KhlifiIsmail/monaco-pattern-editor"
npm publish --access public
```

### Error: You do not have permission

```bash
# Make sure you're logged in
npm whoami

# Login again
npm login
```

### Error: 402 Payment Required

Your package name might need a paid account. Use a scoped package instead.

### Build Errors

```bash
# Clean and rebuild
rm -rf dist node_modules
npm install
ng build monaco-pattern-editor
```

## Best Practices

1. **Test Before Publishing**: Always test the built package locally
2. **Versioning**: Follow semantic versioning strictly
3. **Changelogs**: Maintain a clear changelog
4. **Documentation**: Keep README updated with all features
5. **Examples**: Provide working examples in the repo
6. **Issues**: Respond to GitHub issues promptly
7. **Security**: Enable 2FA on your NPM account
8. **Tags**: Tag all releases in Git
9. **CI/CD**: Consider setting up automated publishing with GitHub Actions

## Useful NPM Commands

```bash
# View package info
npm view monaco-pattern-editor

# View all versions
npm view monaco-pattern-editor versions

# Deprecate a version
npm deprecate monaco-pattern-editor@1.0.0 "This version has a critical bug"

# Unpublish (only within 72 hours)
npm unpublish monaco-pattern-editor@1.0.0

# Update package metadata without republishing
npm owner add <username> monaco-pattern-editor
npm owner rm <username> monaco-pattern-editor
```

## Getting Help

- NPM Docs: https://docs.npmjs.com/
- Angular Library Guide: https://angular.dev/tools/libraries
- Semantic Versioning: https://semver.org/

## License

Remember to include your LICENSE file in the package (already done - MIT License).

---

Good luck with your publish! 🚀
