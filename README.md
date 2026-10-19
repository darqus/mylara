# Mylara Landing Page

A Quasar Framework app for Mylara landing page with comprehensive code formatting system.

## 🎨 Code Formatting

This project uses an advanced formatting system that integrates multiple tools:

```bash
# Quick start - validate and format your code
npm run format:validate    # Check configuration
npm run format:quick       # Fast formatting for development
npm run format            # Full formatting with type checking
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
- [Breakpoints System](docs/quasar-breakpoints-system.md) - Responsive design with Quasar
- [Breakpoints Examples](docs/breakpoints-examples.md) - Practical usage examples

## Deploy to GitHub Pages

### Automatic Deployment

Push to the `main` branch to trigger GitHub Actions workflow that will:

- Build the project
- Deploy the built site with GitHub Actions (`actions/deploy-pages`)
- Make it available at `https://darqus.github.io/mylara/`

### Manual Deployment

Для деплоя на GitHub Pages выполните:

```bash
# Авторизуйтесь в GitHub CLI (если еще не авторизованы)
gh auth login

# Или настройте Git для сохранения учетных данных
git config --global credential.helper store

# Запустите скрипт деплоя
npm run deploy
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
