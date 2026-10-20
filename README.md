# Mylara Landing Page

A Quasar Framework app for Mylara landing page with comprehensive code formatting system.

## 🎨 Code Formatting

This project uses [Biome](https://biomejs.dev) as its single formatter and
linter for JavaScript, TypeScript, Vue and JSON:

```bash
npm run lint          # biome check . - report problems
npm run fix           # biome check --write --unsafe - format and fix
npm run typecheck     # vue-tsc --noEmit - full type check
```

**Key features:**

- ✅ **Biome** - Formatting, linting and import sorting
- ✅ **VS Code integration** - Biome extension, auto-format on save
- ✅ **TypeScript** - Type checking via `vue-tsc`

📚 **Documentation:**

- [Formatting](docs/formatting.md) - Biome usage and conventions
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
