# Mylara Landing Page

A Quasar Framework app for Mylara landing page.

## Deploy to GitHub Pages

### Automatic Deployment
Push to the `main` branch to trigger GitHub Actions workflow that will:
- Build the project
- Deploy to the `gh-pages` branch
- Make it available at `https://darqus.github.io/mylara/`

### Manual Deployment
```bash
# Install dependencies if needed
yarn add --dev gh-pages

# Build and deploy
yarn build
./deploy-gh-pages.sh
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