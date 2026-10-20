# План: обновление зависимостей mylara

Дата аудита: 2026-10-19. Локально: Node **v26.12.0**, npm **11.20.0**.

## 1. Текущее состояние (`npm outdated`)

### dependencies

| Пакет | Сейчас | Latest | Риск |
| --- | --- | --- | --- |
| `@quasar/extras` | 1.17.0 | **2.1.0** | major: пакет стал ESM-only, выкинуты старые версии иконочных либ (мы используем `material-icons`, `material-icons-outlined` — остались) |
| `firebase` | 11.10.0 | **13.0.0** | major: v12 — Node ≥ 20, ES2020, убран `firebase/vertexai`; v13 breaking — только в AI Logic. Auth/Firestore/Storage — аддитивно |
| `quasar` | 2.18.6 | **2.35.2** | minor внутри v2 → низкий |
| `vue` | 3.5.28 | **3.5.44** | patch/minor → низкий |
| `vue-router` | 4.6.4 | **5.4.0** | major, но по офиц. гайду «no breaking changes» (merge unplugin-vue-router); требует vue ≥ 3.5.34 |

### devDependencies

| Пакет | Сейчас | Latest | Риск |
| --- | --- | --- | --- |
| `@quasar/app-vite` | 2.3.0 | **3.10.3** | major, самый большой объём работ (см. §3) |
| `@quasar/quasar-app-extension-testing-unit-vitest` | 1.2.4 | **3.0.0** | major, требует app-vite ^3 и vitest ^4/^5 |
| `@types/node` | 24.10.13 | 26.6.5 (24.19.2 в ветке 24) | мажор типов; рантайм Node 26 |
| `@vue/test-utils` | 2.4.6 | 2.5.1 | низкий |
| `autoprefixer` | 10.4.24 | 10.6.1 | низкий |
| `postcss` | 8.5.6 | 8.5.31 | низкий |
| `typescript` | 5.9.3 | 7.0.2 | 6.0.3 / 7.0.2 — major (7 = нативный порт); совместимость с vue-tsc не гарантирована |
| `vite` | 7.3.1 | 8.3.4 | major |
| `vitest` | 3.2.4 | 5.0.5 | major |
| `vue-tsc` | 3.2.4 | 3.3.13 | minor |
| `gh-pages` | 6.1.1 | 6.3.0 | низкий (спека не показала, но latest 6.3.0) |

### Скрытые/проблемные места, найденные при аудите

1. **Необъявленные прямые зависимости.** `vitest.config.mts` импортирует
   `vite-tsconfig-paths` и `@quasar/vite-plugin`, но в `package.json` их нет — сейчас
   работают только за счёт hoisting транзитивных зависимостей
   (`vite-tsconfig-paths@5.1.4` тянет testing-extension, `@quasar/vite-plugin@1.10.0` — app-vite).
   Надо объявить явно.
2. **`.npmrc`** содержит pnpm-only опции (`shamefully-hoist`, `strict-peer-dependencies`,
   `resolution-mode`) — npm ругается `Unknown project config` на каждом запуске. Проект на npm → вычистить.
3. **CI** (`.github/workflows/deploy.yml`) использует Node 22. app-vite v3 требует Node `^22.22.0 || ^24 || ^26 || ^28 || ^30`.
4. `src/env.d.ts` всё ещё содержит `NodeJS.ProcessEnv` — в app-vite v3 этот блок удаляется.
5. `quasar.config.ts` использует `#q-app/wrappers`, `rawDefine`, алиасы `src/…` — всё это меняется в v3.

### Граф совместных обновлений (мажоры нельзя поодиночке)

- `@quasar/app-vite@3` требует: `quasar ^2.24`, `vue-router >= 5`, `vue ^3.2.29`, Node `^22.22||^24||^26||^28||^30`; внутри Vite 8 + Rolldown, `@quasar/vite-plugin ^2`.
- `@quasar/…testing-unit-vitest@3` требует: app-vite `^3`, vitest `^4||^5`, `@vue/test-utils ^2.4.6`.
- `vitest@5` требует: vite `^6.4||^7||^8`.
- `vue-router@5` требует: vue `^3.5.34`, vite `^7.3||^8`.
- `@quasar/extras@2` требует app-vite `>= 2.6.1` (при v3 — ок).

## 2. Фаза 1 — безопасные минорные обновления (низкий риск)

Без смены мажоров, отдельным коммитом:

| Пакет | → |
| --- | --- |
| `quasar` | 2.35.2 |
| `vue` | 3.5.44 |
| `vue-tsc` | 3.3.13 |
| `@types/node` | 24.19.2 (остаёмся в 24, если не берём 26) |
| `@vue/test-utils` | 2.5.1 |
| `autoprefixer` | 10.6.1 |
| `postcss` | 8.5.31 |
| `vite` | 7.3.7 |
| `vitest` | 3.2.7 |
| `@quasar/extras` | 1.18.0 (без мажора 2) |
| `gh-pages` | 6.3.0 |
| + объявить `vite-tsconfig-paths@6.1.1` и `@quasar/vite-plugin@^1` (пока app-vite v2) |

Проверка: `npm run lint`, `npm run typecheck`, `npm run test:unit:ci`, `npm run build`, `npm run dev` (smoke).

## 3. Фаза 2 — мажоры (app-vite v3 и его окружение)

Состав: `@quasar/app-vite@3.10.3`, `@quasar/extras@2.1.0`,
`@quasar/...testing-unit-vitest@3.0.0`, `vitest@5.0.5`, `vite@8.3.4`,
`vue-router@5.4.0`, `firebase@13.0.0`, `@types/node@26.6.5`,
`@quasar/vite-plugin@^2`.

### 3.1. Обязательные изменения по гайду app-vite v2→v3

1. **Импорты `#q-app/wrappers` → `#q-app`** (в `quasar.config.ts`).
2. **Алиасы.** Vite-режим v3 оставляет только `@/` (→ `/src`). Импорты вида `from 'src/...'`
   (84 вхождения в 42 файлах) нужно заменить на `@/...`. Альтернатива из гайда — прописать
   старые алиасы в `build.alias`; но лучше мигрировать на `@/` (меньше legacy). Плюс
   `<template>`-ссылки `~assets/...` (в проекте не найдены).
3. **`process.env` → `import.meta.env`.** Затронуто:
   - `src/router/index.ts`: `process.env.SERVER` → `import.meta.env.QUASAR_SERVER`;
     `process.env.VUE_ROUTER_MODE`/`VUE_ROUTER_BASE` больше не инжектятся →
     режим берём из конфига (`vueRouterMode: 'history'`), базу — из `import.meta.env.BASE_URL`;
   - `src/services/seo.service.ts`: `process.env.VUE_ROUTER_BASE` → `import.meta.env.BASE_URL`;
   - `src/utils/constants.ts`: `process.env.NODE_ENV === 'production'` → `import.meta.env.QUASAR_PROD`.
4. **`build.rawDefine` удалён.** `VITE_APP_VERSION` (из `package.json`) переводим на
   `build.define: { VITE_APP_VERSION: JSON.stringify(packageJson.version) }`
   (остаётся глобал, `declare const VITE_APP_VERSION` сохраняется) **или** на `defineEnv`
   + `import.meta.env.VITE_APP_VERSION`. Решение уточним при реализации (влияет на `meta.ts`, `constants.ts`).
5. **Префикс клиентских env.** В v3 клиенту по умолчанию отдаются только переменные с
   префиксом `QCLI_`. У нас весь `.env` и CI-секреты на `VITE_*` → в `quasar.config.ts`
   добавить `build.env.clientPrefix: ['VITE_', 'QCLI_']`, чтобы `VITE_*` продолжили попадать в клиент.
6. **`index.html`.** `<%= productName %>` / `<%= productDescription %>` нужно перевести на новый
   синтаксис (`%VAR%` / `importMetaEnv.*`). Проверить, что Quasar v3 всё ещё отдаёт
   `productName`/`productDescription` в шаблон; при необходимости — свой `defineEnv`.
7. **`env.d.ts`.** Удалить блок `declare namespace NodeJS { interface ProcessEnv … }`,
   заменить на `interface ImportMetaEnv {}` по гайду.
8. **Чистка `quasar.config.ts`** от удалённых ключей: `build.polyfillModulePreload`,
   `build.analyze`, `build.env` (в комментариях), `ssr.extendPackageJson`,
   `pwa.injectPwaMetaTags`, `electron.extendPackageJson`, `cordova.noIosLegacyBuildFlag`,
   `capacitor.{appName,version,description}`; `build.target.node` поднять до `node22`.
   Проверить `viteVuePluginOptions` (по гайду не удалён — подтвердить типизацией).
9. **`package.json` engines** → `"node": "^22.22.0 || ^24 || ^26 || ^28 || ^30"`.
10. **CI** — Node 22 → 24 (или явный `22.22`).
11. **`.npmrc`** — удалить pnpm-only ключи.

### 3.2. Проверочный прогон (до правок кода)

Сначала в отдельном worktree/ветке:
`npm i -D @quasar/app-vite@3 …` → `npx quasar prepare` (регенерирует `.quasar/quasar.d.ts`,
`tsconfig.json` с новыми алиасами) → `npm run typecheck` покажет полный список поломок
(алиасы, env, конфиг). Затем — правки по §3.1 и повторный typecheck. Это исключает догадки.

### 3.3. Ручная проверка

- `npm run test:unit:ci` — юнит-тесты;
- `npm run build` — прод-сборка (Rolldown/Vite 8), проверить отсутствие ошибок и размер бандла;
- `npx quasar dev` — smoke: роутинг, firebase init (offline), carousel, админка;
- `npx serve dist/spa` (или `python -m http.server`) — проверить SPA-fallback и `/mylara/` base;
- отдельно проверить, что `VITE_FIREBASE_*` из CI-секретов доходят до клиента (clientPrefix).

## 4. Фаза 3 — TypeScript (отдельно, по результатам пробы)

- Vue-tsc 3.3.13 заявляет peer `typescript >= 5.0.0`, но TS 6/7 — новые мажоры,
  а TS 7 — нативный (не JS) компилятор; поддержка в `vue-tsc` не гарантирована.
- План: в worktree попробовать `typescript@6.0.3`, затем `7.0.2`; если `vue-tsc --noEmit`
  и `quasar build` проходят — принять, иначе остаться на `5.9.3`.
- `@types/node` — если берём Node 26, то `@types/node@26.6.5`.

## 5. Открытые решения (нужны ответы)

1. **Объём**: делать обе фазы сразу или сначала только безопасные минорные?
2. **Алиасы**: мигрировать `src/` → `@/` (рекомендуется) или прописать старые алиасы в `build.alias`?
3. **TypeScript**: 5.9.3 (консервативно) / 6.0.3 / 7.0.2 (нативный).
4. **Firebase/extras**: поднимать до 13 / 2 сразу в фазе 2 или отдельно после проверки Quasar?

## 6. Стратегия и откат

- Работа в отдельной ветке (или worktree), по одному коммиту на фазу.
- Фаза 1 независима и откатывается тривиально.
- Фаза 2 — атомарный коммит «app-vite v3 + окружение»; при провале сборки — `git revert`/reset ветки.
- `plan/` отмечаем статусом после проверок (как в `biome-migration.md`).

## 7. Итоговый чек-лист проверки

- [ ] Фаза 1: lint / typecheck / unit / build / dev-smoke, коммит.
- [ ] Фаза 2: probe → правки → lint / typecheck / unit / build / dev-smoke / dist-serve.
- [ ] Фаза 3: TS-проба (6 и 7), решение зафиксировано.
- [ ] Обновлены `package.json` (deps, engines), `.npmrc`, CI, `docs/` при необходимости.
- [ ] План отмечен выполненным.
