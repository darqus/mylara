# Mylara Landing Page

A Quasar Framework app for Mylara landing page.

## Deploy to GitHub Pages

### Automatic Deployment

Push to the `main` branch to trigger GitHub Actions workflow that will:

- Build the project
- Deploy to the `gh-pages` branch
- Make it available at `https://darqus.github.io/mylara/`

### Manual Deployment

1. Создайте персональный токен доступа GitHub:

   - Перейдите на страницу <https://github.com/settings/tokens>
   - Нажмите "Generate new token"
   - Выберите "repo" scope
   - Скопируйте созданный токен

2. Установите токен как переменную окружения (.gh-pages-config):

   ```bash
   export GITHUB_TOKEN=ваш_токен
   ```

3. Запустите скрипт деплоя:

   ```bash
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
