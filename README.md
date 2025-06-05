# Mylara Landing Page

A Quasar Framework app for Mylara landing page.

## Deploy to GitHub Pages

This project is configured to deploy to GitHub Pages using GitHub Actions.

### Automatic Deployment

When you push to the `main` branch, the GitHub Actions workflow will automatically:

1. Build the project
2. Deploy it to the `gh-pages` branch
3. Make it available at `https://[your-username].github.io/mylara/`

### Manual Deployment

You can also deploy manually:

```bash
# Install gh-pages package if not already installed
npm install --save-dev gh-pages

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Development

```bash
# Install dependencies
npm install

# Start the app in development mode
npm run dev
```

## Build

```bash
# Build the app for production
npm run build
```
