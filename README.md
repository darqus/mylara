# Mylara Landing Page

A Quasar Framework app for Mylara landing page.

## Deploy to GitHub Pages

### Automatic Deployment
Push to the `main` branch to trigger GitHub Actions workflow that will:
- Build the project
- Deploy to the `gh-pages` branch
- Make it available at `https://darqus.github.io/mylara/`

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