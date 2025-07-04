# Mylara Landing Page

A Quasar Framework app for Mylara landing page with comprehensive code formatting system.

## 🎨 Code Formatting

This project uses an advanced formatting system that integrates multiple tools:

```bash
# Quick start - validate and format your code
yarn format:validate    # Check configuration
yarn format:quick       # Fast formatting for development
yarn format            # Full formatting with type checking
```

**Key features:**

- ✅ **Prettier** - Code structure formatting
- ✅ **ESLint** - Quality checks with custom rules from `.config/`
- ✅ **Stylelint** - SCSS/CSS formatting and validation
- ✅ **VS Code integration** - Auto-format on save
- ✅ **TypeScript** - Full type checking

📚 **Documentation:**

- [Quick Guide](docs/format-quick-guide.md) - Essential commands
- [Complete System](docs/format-system.md) - Full documentation

## Deploy to GitHub Pages

### Automatic Deployment

Push to the `main` branch to trigger GitHub Actions workflow that will:

- Build the project
- Deploy to the `gh-pages` branch
- Make it available at `https://darqus.github.io/mylara/` `http://mylara.ru`

### Manual Deployment

Для деплоя на GitHub Pages выполните:

```bash
# Авторизуйтесь в GitHub CLI (если еще не авторизованы)
gh auth login

# Или настройте Git для сохранения учетных данных
git config --global credential.helper store

# Запустите скрипт деплоя
yarn deploy
```

## Development

```bash
# Install dependencies
yarn

# Start development server
yarn dev

# Build for production
yarn build
```
