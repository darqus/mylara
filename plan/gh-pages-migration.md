# Plan: Migration to GitHub Pages project site (darqus.github.io/mylara)

## Context

The custom domain `mylara.ru` was removed from GitHub Pages settings
(commit `6b27c2b "Delete CNAME"` only removed the repo file; per GitHub docs
the file itself does not configure the domain). GitHub sent the standard
"Custom domain removed → remember to clean up DNS" reminder.
Goal: host the site on the default project URL `https://darqus.github.io/mylara/`
using the custom Actions workflow (`.github/workflows/deploy.yml`).

## Audit findings

### 1. DNS cleanup — nothing to do

- `mylara.ru` returns **NXDOMAIN** (zone is not delegated at all: no NS, no A,
  no MX — authoritative response comes from the `.ru` zone).
- So there are no GitHub Pages DNS records left to delete. If the domain is
  still registered, just make sure the registrar has no `A @ → 185.199.108–111.153`
  and `CNAME www → darqus.github.io` records (currently there are none).

### 2. Workflow matches the documented pattern

`.github/workflows/deploy.yml` already follows the official recipe:
`actions/configure-pages` → `actions/upload-pages-artifact` → `actions/deploy-pages`.

- **Manual check required**: repo → Settings → Pages → Build and deployment →
  Source = **GitHub Actions** (API returns 404 for me — repo is private/no auth).
- Stale lines: `cp CNAME dist/spa/` (file is gone; harmless due to `|| echo`,
  but misleading), `cp _config.yml` (Jekyll config with `enforce_ssl: mylara.ru`,
  useless because `.nojekyll` is deployed).

### 3. BLOCKER: asset/router base is `/`, must be `/mylara/`

- `quasar.config.ts`: `publicPath: '/'` **and** `extendViteConf()` forces
  `viteConf.base = '/'` — verified in current `dist/spa/index.html`:
  `src="/assets/index-….js"` → 404 on a project site.
- Verified in `@quasar/app-vite@2.3.0` source (`lib/quasar-config-file.js:843,1017`):
  `vueRouterBase` defaults to `publicPath`, and it is injected as
  `process.env.VUE_ROUTER_BASE` which `src/router/index.ts` passes to
  `createWebHistory(...)`. So fixing `publicPath` (prod only) fixes both
  Vite asset base and router base.
- `VITE_ROUTER_BASE` in `.env`/`deploy.yml` is **not** the router base — it is
  used as a _route path_ in `src/router/routes.ts` (`path: ROUTER_BASE`).
  With router base `/mylara/` + route path `/` the landing URL becomes
  `/mylara/`. **Keep `VITE_ROUTER_BASE=/`.**

### 4. BLOCKER: `public/404.html` SPA redirect hardcodes `/`

- It stores the deep link in `sessionStorage.redirect` and redirects to `/`,
  but on a project site the app lives at `/mylara/`. Must redirect to the base
  (`/mylara/`), otherwise deep links land on `darqus.github.io/` (not our site).
- `index.html` restore script (`history.replaceState(redirect)`) works as-is,
  since the stored path includes the base.

### 5. BLOCKER: `package.json` → `deploy` script broken

- `npm run deploy` does `cp CNAME dist/spa/ && …` — `CNAME` no longer exists,
  the chain fails. (The legacy `gh-pages` branch flow, `origin/gh-pages` exists.)

### 6. Stale content pointing to a dead domain (NXDOMAIN)

| File                                            | What                                                                                                                                 |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `public/sitemap.xml`                            | `<loc>https://mylara.ru/</loc>`                                                                                                      |
| `.env`                                          | `VITE_DOMAIN=mylara.ru` → feeds `src/boot/seo.ts` JSON-LD (`url`, `logo`) and `VITE_API_DOMAIN=api.mylara.ru`                        |
| `_config.yml`                                   | `enforce_ssl: mylara.ru`                                                                                                             |
| `src/utils/constants.ts`                        | `DOMAIN`, `getLink()` → privacy/terms/enterprise/offer absolute links, `PRIVACY_POLICY`, `TERMS_OF_USE`, `EMAILS` (`info@mylara.ru`) |
| `src/components/common/PrivacyPolicyDialog.vue` | visible text `https://mylara.ru`                                                                                                     |
| `README.md`                                     | deployment targets line                                                                                                              |
| `src/utils/constants.ts:1`                      | comment `wiki.mylara.ru` (cosmetic)                                                                                                  |

Note: `index.html` has `noindex,nofollow` and `robots.txt` has `Disallow: /`
(intentional?) — sitemap/SEO value is currently zero, but links must still not
be dead.

## Implementation steps

1. **`quasar.config.ts`**
   - Use the `ctx` parameter: `publicPath: ctx.dev ? '/' : '/mylara/'`.
   - In `extendViteConf`: stop forcing `viteConf.base = '/'` (leave Quasar's base
     intact, or set it to the same value).
   - Do **not** touch `vueRouterBase` explicitly (it follows `publicPath`;
     verified behavior).
2. **`public/404.html`** — redirect to `/mylara/` instead of `/`; keep the
   "not an asset" guard; handle both `/mylara` and `/mylara/` prefixes so the
   base is not duplicated into the stored path.
3. **`.github/workflows/deploy.yml`** — remove the `cp CNAME` line and the
   `cp _config.yml` line; keep `VITE_ROUTER_BASE=/`, `VITE_APP_BASE=/` as-is
   (they are route path/app base, not the deployment base).
4. **`package.json`** — drop `cp CNAME dist/spa/` from the `deploy` script
   (keep or remove the whole legacy `gh-pages` flow — pending decision).
5. **Dead-domain content** (approved: replace with GitHub Pages URL):
   - `public/sitemap.xml`, `README.md`, `.env`, `src/boot/seo.ts`,
     `src/utils/constants.ts`, `PrivacyPolicyDialog.vue` → updated.
   - `_config.yml` (Jekyll config with `enforce_ssl: mylara.ru`) → **deleted**,
     it is inert anyway because `.nojekyll` is deployed in both flows.
   - `src/utils/constants.ts`: `DOMAIN` replaced by `SITE_URL`,
     `EMAILS`/`getEmailLabel`/`getEmailLink` removed (unused exports + the
     mail domain is dead); `PRIVACY_POLICY`/`TERMS_OF_USE` now use `getLink()`.
   - `.env`: `VITE_DOMAIN` replaced by `VITE_SITE_URL`, the retired API block
     (`api.mylara.ru`, `VITE_HTTPS_HOST`, `VITE_WS_HOST`, …) commented out —
     it is unused by the code (Firebase is used instead).
6. **Base-path correctness beyond config** (found during implementation):
   - `src/services/seo.service.ts`: `BASE_URL` now includes the router base, so
     `og:image` is `https://darqus.github.io/mylara/logo.svg` instead of
     `https://darqus.github.io/logo.svg`.
   - `src/router/index.ts`: canonical URL now uses `Router.resolve(...).href`,
     which includes the history base.
7. **Verification**
   - `npm install && npm run build` → inspect `dist/spa/index.html` for
     `/mylara/assets/...`.
   - `npx vite preview`-style local check of `/mylara/` base (or
     `quasar dev` to confirm dev still serves at `/`).
   - Unit tests: `npm run test:unit:ci`.
   - Push → Actions run → open `https://darqus.github.io/mylara/`,
     check deep link (e.g. `/mylara/any-path` → 404.html → restored route),
     check assets load (no `/assets/...` requests).
8. **Manual (user)**
   - GitHub: Settings → Pages → Source = **GitHub Actions**, custom domain
     field empty.
   - DNS: nothing to delete — `mylara.ru` is NXDOMAIN (zone not delegated).
     Only if the domain is still registered: make sure the registrar holds no
     `A @ → 185.199.108–111.153` / `CNAME www → darqus.github.io` records.
   - Firebase: **no console action is required** (verified empirically, see
     "Firebase checks" below). The site origin changed, but neither the API key
     nor email/password sign-in is bound to the old domain.

## Decisions (user answers)

1. Domain references → replace with `https://darqus.github.io/mylara/`.
2. Mail (`info@mylara.ru`) and API (`api.mylara.ru`) are not used anymore →
   safe to drop/neutralize.
3. Legacy `gh-pages` deploy flow → keep, minus the `CNAME`/`_config.yml` copies.

## Implementation log

- [x] `quasar.config.ts`: `ctx` used, `publicPath: ctx.dev ? '/' : '/mylara/'`,
      forced `viteConf.base = '/'` removed (it overrode `publicPath`).
- [x] `public/404.html`: base-aware redirect to `/mylara/`, deep links stored
      with the base prefix, non-base paths no longer pretend to be app routes.
- [x] `.github/workflows/deploy.yml`: dropped `cp CNAME` and `cp _config.yml`,
      step renamed; `VITE_ROUTER_BASE`/`VITE_APP_BASE` kept at `/`
      (they are the in-app route base, not the deployment base).
- [x] `package.json`: `deploy` script no longer copies `CNAME`/`_config.yml`;
      legacy `gh-pages` flow kept as a fallback.
- [x] `quasar.config.ts` router base follows `publicPath` automatically
      (verified in `@quasar/app-vite@2.3.0`: `vueRouterBase` defaults to
      `publicPath`, injected as `process.env.VUE_ROUTER_BASE`).
- [x] Content replacements listed above.

## Verification results

- `npm run build` → **Build succeeded** (`@quasar/app-vite` 2.3.0, vite 7.3.1).
  - `dist/spa/index.html`: `src="/mylara/assets/vendor-….js"`,
    `href="/mylara/assets/index-….css"` — assets use the project base.
  - Bundle contains `history: createWebHistory("/mylara/")` and
    `process.env.VUE_ROUTER_BASE` is fully replaced (`"/mylara/"`) — the
    hypothesis about Quasar injecting the router base from `publicPath`
    is confirmed on the real build.
  - `dist/spa` contains `404.html`, `.nojekyll`, `sitemap.xml`, `robots.txt`.
- `npm run lint` → clean.
- `npm run test:unit:ci` → **139 tests / 8 files passed**.
  - One pre-existing failure was fixed on the way: `rules.vitest.spec.ts`
    ("someone aged 17 = born 01.05.2008") was a time-bomb assertion that had
    already expired (today is 2026); the birth date is now computed relative
    to the current date.
- `quasar dev` → serves at `http://localhost:9000/` with root-relative assets
  (`/@vite/client`, `/.quasar/dev-spa/client-entry.js`), i.e. the dev workflow
  is untouched by the `publicPath` change.

## Firebase checks (no console access needed)

The Firebase console is currently locked behind Google's MFA requirement, so the
question was whether the authorized-domains entry is needed at all. It is not:

- Probe with the **production** API key (extracted from the currently deployed
  bundle) against `accounts:signInWithPassword`, sending
  `Origin: https://darqus.github.io` / `Referer: https://darqus.github.io/mylara/`:
  → `400 INVALID_LOGIN_CREDENTIALS` (a normal credential error).
  A referrer-restricted key would answer `403 API_KEY_HTTP_REFERRER_BLOCKED`,
  and an unauthorized origin would answer `auth/unauthorized-domain`.
- The local dev key behaves the same, so the key is unrestricted in both cases.
- `authorizedDomains` only gates OAuth popup/redirect and email action links
  (password reset, e-mail verification, e-mail link sign-in). Code grep shows
  none of them is used: only `signInWithEmailAndPassword`, `signOut`,
  `onAuthStateChanged`.
- Firebase App Check is not used at all → no reCAPTCHA site-key domain
  registration is required.
- Storage CORS is `origin: ["*"]`; Firestore/Storage access is rules-based and
  origin-independent.
- If the entry is ever needed, it can be changed without the console:
  `PATCH https://identitytoolkit.googleapis.com/v2/projects/<projectId>/config`
  with body `{ "authorizedDomains": [...] }` (Identity Toolkit Admin API v2,
  `authorizedDomains` is writable) using an OAuth2 token of a project member or
  service account. Otherwise: enable 2SV on the Google account, or ask another
  project admin.

## Live site state before the fix (evidence for the base-path blocker)

- `https://darqus.github.io/mylara/` currently serves 200 with the old build
  whose HTML points at `/assets/...`:
  - `https://darqus.github.io/assets/index-BWi0n0Tj.js` → **404**
  - `https://darqus.github.io/mylara/assets/index-BWi0n0Tj.js` → 200
    So the site is broken right now; the `publicPath` fix repairs exactly this.

## Known gaps (pre-existing, not introduced by the migration)

- `privacy-policy` / `site_privacy` / `site_terms` / `offer` / `enterprise`
  pages do not exist in the router (only the landing + catch-all), so those
  links land on the in-app 404 page. `LINKS`/`PRIVACY_POLICY`/`TERMS_OF_USE`
  exports are currently unused by components.
- `public/robots.txt` (`Disallow: /`) and `index.html` (`noindex, nofollow`)
  keep the site out of search engines — intentional or to be revisited.
- Footer placeholders: `VITE_CONTACT_EMAIL=contact@example.com`,
  `t.me/yourusername`, and `qr-*.svg` images that are missing in `public/`.
- README "Manual Deployment" section still describes the `gh-pages` branch
  flow, which does nothing while Pages source is "GitHub Actions".

## Post-deploy verification (live, after push `4fa5a36`)

- `https://darqus.github.io/mylara/` → 200, HTML references
  `/mylara/assets/vendor-CQHuegr8.js`, `/mylara/assets/index-CZ8dkaRX.js`,
  `/mylara/assets/index-DEOAWq4K.css`.
- Those assets → **200** (before the fix the same files were requested from
  `https://darqus.github.io/assets/...` → 404).
- Deep link `https://darqus.github.io/mylara/site_privacy` → 404 status with our
  SPA fallback (`var base = '/mylara/'`), so the route is restored in the
  browser via `sessionStorage.redirect`.
- `https://darqus.github.io/mylara/CNAME` → 404 (custom domain no longer
  published), `sitemap.xml` → `https://darqus.github.io/mylara/`.
- Observation (pre-existing): the workflow runs `npm run update-env`, which
  commits a version bump and tries `git push`, but the job declares
  `permissions: contents: read`, so that push always fails and `package.json`
  versions are never persisted in the repo.

## Regression found after the deploy: the published site is the raw repository

While investigating the reported redirect
`https://darqus.github.io/mylara/` → `http://mylara.ru/`, the live site was
probed again and turned out to serve the **repository tree of `main`**, not the
built artifact:

- `/mylara/` is byte-identical to the repository `index.html` (2263 bytes,
  sha1 `c1639cf5`): the unprocessed Quasar template with `<%= productName %>`
  and no `<script>` tags at all → blank page.
- Source files are publicly served: `/mylara/package.json`,
  `/mylara/quasar.config.ts`, `/mylara/README.md`, `/mylara/cors.json`,
  `/mylara/src/App.vue` → 200.
- `/mylara/assets/...`, `/mylara/favicon.svg`, `/mylara/404.html` → 404.

Cause (visible in the Actions API): every push starts **two** deployments into
the same GitHub Pages site — `pages build and deployment` (event `dynamic`, the
legacy "Deploy from a branch" build of `main` / `(root)`) and our
`Deploy static content to Pages` workflow. They race, and the legacy build
publishes the raw source tree: at 17:57 UTC the built artifact was live, a
minute later the legacy build overwrote it. The Pages source must therefore be
switched to **GitHub Actions**.

### Redirect to `http://mylara.ru/`

- The mechanism was reproduced on a third-party project site that still has a
  custom domain: `https://jekyll.github.io/jekyll/` → `301 http://jekyllrb.com/`
  (note the plain `http` scheme — same as the reported redirect).
- GitHub Pages no longer redirects our URL: `curl` with browser-like
  `Accept` / `Sec-Fetch-Mode: navigate` headers and `Cache-Control: no-cache`
  returns 200, and `mylara.ru` appears nowhere in the published files or in any
  bundle (0 occurrences).
- Therefore the redirect is a **browser-cached 301** recorded while the custom
  domain was still configured. A 301 is cached indefinitely; clearing site data
  for `darqus.github.io`, an incognito window, or appending a query string
  (new cache key) removes it.

### Hazard left in the repository

The `gh-pages` branch (legacy `npm run deploy` flow) still contains `CNAME` =
`mylara.ru` and `_config.yml` with `enforce_ssl: mylara.ru`. Selecting that
branch as the Pages source would bring the custom domain back, and the `deploy`
script (`gh-pages -d dist/spa`) does not remove files that disappeared from the
build, so the stale `CNAME` survives. Either delete the branch or clean it.

### Required manual steps (repo admin, GitHub UI)

1. Settings → Pages → Build and deployment → **Source = GitHub Actions**
   (currently "Deploy from a branch" → `main` / `(root)`).
2. Settings → Pages → **Custom domain: empty**, then Save.
3. Clear cached redirects for `darqus.github.io` in the browser.

## CI/CD hardening (commit `751f705`)

`.github/workflows/deploy.yml`:

- Removed the dead steps: the `404.html` / `.nojekyll` / `.htaccess` /
  `mime.types` / `_includes` copies are redundant (`public/` is copied into
  `dist/spa` by the build) and the "Fix JavaScript file extensions" step never
  matched anything.
- Added a git identity and `permissions: contents: write`, because
  `npm run update-env` commits the version bump and pushes it — without an
  author and write permission that push always failed silently. Verified:
  `8265cdf chore: bump version to 0.1.52` landed on `main` from CI.
- Added a `Verify the published site` step: after the deployment it fetches the
  site (with a cache-busting query and up to 5 retries), looks for the built
  bundle reference and checks that the asset returns 200. When the site serves
  the raw repository instead, it emits a warning annotation naming the exact
  setting to change. This is the guard against the failure mode below.

Could not be automated: switching the Pages publishing source. The REST endpoint
`PUT /repos/{owner}/{repo}/pages` requires the fine-grained permissions
`Pages: write` **and** `Administration: write`
(<https://docs.github.com/en/rest/pages/pages?apiVersion=2022-11-28#update-information-about-a-github-pages-site>),
and `Administration` is not available to the Actions `GITHUB_TOKEN` at all, so
the switch has to be done in Settings -> Pages (or by a personal access token
stored as a secret, which the workflow could then use to self-heal).

### `gh-pages` branch cleanup (commit `cfca0aa` on that branch)

`gh-pages` still carried `CNAME` = `mylara.ru` and `_config.yml` with
`enforce_ssl: mylara.ru`. Publishing that branch would resurrect the dead custom
domain and its redirect, so both files were removed (build output untouched).
`npm run deploy` (`gh-pages -d dist/spa`) does not delete files that are no
longer built, so the stale files would otherwise have survived there forever.

## Status

- [x] Audit
- [x] Plan approved
- [x] Implementation
- [x] Tests/build verification (build ✓, lint ✓, 139 unit tests ✓, dev server base check)
- [x] Post-deploy check on GitHub Pages — passed at 17:57 UTC, then reverted by
      the legacy branch deployment (see the regression section above)
- [ ] Pages source switched to GitHub Actions + custom domain field emptied,
      then re-verified (assets, deep link, no redirect)
