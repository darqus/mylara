# SEO & Deployment

## SEO

- Meta tags via `Quasar.useMeta` + `src/utils/meta.ts`.
- Canonical URLs and JSON-LD managed by `src/utils/seo-dom.ts` (router applies on navigation, boot applies organization schema).
- Base URL comes from router base / `import.meta.env.BASE_URL`.

## Deployment

- GitHub Pages from `dist/spa` with `.nojekyll`.
- Use `npm run deploy`.
