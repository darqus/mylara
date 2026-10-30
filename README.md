# Mylara Landing Page

A Quasar Framework app for Mylara landing page with comprehensive code formatting system.

## 🎨 Code Formatting

This project uses [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) for
JavaScript and TypeScript linting, [Stylelint](https://stylelint.io/) with
Recess Order for CSS/SCSS property sorting, and
[Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) for formatting
JavaScript, TypeScript, Vue, stylesheets and JSON:

```bash
npm run lint          # check lint and formatting
npm run fix           # apply lint fixes and format files
npm run typecheck     # vue-tsc --noEmit - full type check
```

**Key features:**

- ✅ **OXC** - Fast linting, formatting and import sorting
- ✅ **SCSS property order** - Stylelint Recess Order
- ✅ **VS Code integration** - OXC and Stylelint extensions
- ✅ **TypeScript** - Type checking via `vue-tsc`

📚 **Documentation:**

- [Formatting](docs/formatting.md) - OXC usage and conventions
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
