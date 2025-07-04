# Code Formatting & Linting Setup

This project uses a comprehensive code formatting and linting setup that enforces consistent code style across JavaScript, TypeScript, Vue, and SCSS files.

## Configuration Files

### ESLint Configuration

- **Main config**: `eslint.config.js` - Modern flat config format
- **Custom rules**: `.config/eslint-rules/` - Custom ESLint rules organized by modules:
  - `index.js` - Main rules export
  - `modules/common.js` - Common JavaScript/TypeScript rules
  - `modules/ts.js` - TypeScript-specific rules
  - `modules/vue.js` - Vue.js-specific rules

### Prettier Configuration

- **Config**: `.prettierrc.json` - Code formatting settings
- **Ignore**: `.prettierignore` - Files to exclude from formatting

### Stylelint Configuration

- **Config**: `stylelint.config.mjs` - SCSS/CSS linting rules

## Format Scripts

### `./format.sh` - Full Formatting (Recommended)

Complete formatting with TypeScript type checking:

```bash
./format.sh
# or
npm run format
```

**What it does:**

1. Runs Prettier to format all supported files
2. Runs ESLint with full TypeScript type checking and auto-fixes
3. Runs Stylelint to fix SCSS issues
4. Uses caching for better performance

### `./format-quick.sh` - Quick Development Formatting

Faster formatting for development without heavy type checking:

```bash
./format-quick.sh
# or
npm run format:quick
```

**What it does:**

1. Runs Prettier to format all supported files
2. Runs ESLint with syntax checking only (faster)
3. Runs Stylelint to fix SCSS issues
4. Uses caching for better performance

## Supported File Types

- **JavaScript**: `.js`, `.mjs`, `.cjs`
- **TypeScript**: `.ts`, `.mts`
- **Vue**: `.vue`
- **Styles**: `.scss`

## Key Features

### Custom ESLint Rules

The project uses custom ESLint rules defined in `.config/eslint-rules/`:

- **Import ordering**: Enforces consistent import statement organization
- **Indentation**: Custom indentation rules for different contexts
- **Vue-specific**: Component ordering, template formatting
- **TypeScript**: Type definitions, naming conventions
- **Code style**: Semicolons, quotes, spacing, etc.

### Performance Optimizations

- **Caching**: Both ESLint and Stylelint use caching (`.eslintcache`, `.stylelintcache`)
- **Incremental**: Only processes changed files when possible
- **Parallel processing**: Tools run with optimal performance settings

### IDE Integration

The configuration works seamlessly with VS Code and other editors that support:

- ESLint extension
- Prettier extension
- Stylelint extension

## Manual Commands

If you need to run tools individually:

```bash
# Prettier only
npx prettier --write "**/*.{ts,mts,js,mjs,cjs,vue,scss}" --config .prettierrc.json

# ESLint only
npx eslint --fix "**/*.{ts,mts,js,mjs,cjs,vue}" --config eslint.config.js

# Stylelint only
npx stylelint --fix "**/*.scss" --config stylelint.config.mjs
```

## Cache Management

Linting caches are stored in:

- `.eslintcache` - ESLint cache
- `.stylelintcache` - Stylelint cache

These files are automatically ignored by git. To clear caches:

```bash
rm -f .eslintcache .stylelintcache
```

## Troubleshooting

### Slow Performance

- Use `./format-quick.sh` for faster development formatting
- Clear caches if experiencing issues: `rm -f .eslintcache .stylelintcache`

### Configuration Issues

- Ensure all config files are properly formatted
- Check that custom rules in `.config/eslint-rules/` are valid JavaScript
- Verify that all required dependencies are installed

### Rule Conflicts

The order of operations prevents conflicts:

1. Prettier formats first (structure/spacing)
2. ESLint fixes code issues and applies custom rules
3. Stylelint handles SCSS-specific formatting
