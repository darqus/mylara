# Миграция mylara: ESLint + Prettier + Stylelint → Biome

Основа — проект `/home/eo/projects/github/ai/fallback` (рабочая конфигурация Biome).

## Цель

- Форматтер и JS/TS/Vue/JSON-линтер — только **Biome**.
- ESLint, Prettier и **Stylelint удаляются** полностью.
- Проверка типов остаётся на `vue-tsc` / `tsc` (type-aware правила Biome пока в nursery).

## Что берём из fallback

| Артефакт fallback | Что сделано |
| --- | --- |
| `biome.json` | Взят за основу, адаптирован под mylara |
| `.vscode/settings.json` (`biomejs.biome`, `source.fixAll.biome`, `source.organizeImports.biome`) | Перенесён, без Stylelint, `[scss]` → `vscode.css-language-features` |
| `.vscode/extensions.json` | `biomejs.biome`, `vue.volar` |
| `package.json`: `lint`, `fix` | Перенесены, ESLint/Prettier/Stylelint вычищены |
| `.opencode/command/lint.md` | Скопирован, адаптирован (biome + `vue-tsc`) |
| CI: `npm exec --yes --package=@biomejs/biome@<ver> -- biome check ...` | Добавлен в `.github/workflows/deploy.yml` |
| Глобальный biome, без локальной зависимости | Как в fallback |

## Адаптация `biome.json` под mylara

- `lineWidth: 80` (в mylara Prettier `printWidth: 80`, в fallback 100).
- `indentStyle: space`, `indentWidth: 2`, `lineEnding: lf`, `formatWithErrors: false`.
- `javascript.formatter`: `quoteStyle: single`, `semicolons: asNeeded`, `trailingCommas: es5` — совпадает с прежним Prettier.
- `assist.actions.source.organizeImports: on` (заменяет `import/order` + `sort-imports`).
- Vue: **без** `html`-секции — как в fallback. Biome форматирует и линтит `<script>` в `.vue`, шаблон и стили не трогает.
- Правила под договорённости mylara:
  - `style.useConsistentTypeDefinitions: { level: error, options: { style: "type" } }`;
  - `style.noNamespace: off`;
  - `style.noNonNullAssertion: error`, `style.noParameterAssign: error`, `style.useConst: error`,
    `style.useImportType: error`, `style.useBlockStatements: error`;
  - `suspicious.noConsole: { level: warn, options: { allow: ["warn","error"] } }`;
  - `suspicious.noExplicitAny: warn`, `suspicious.noArrayIndexKey: warn`;
  - `complexity.useOptionalChain: error`;
  - `correctness.noUnusedVariables: warn`, `correctness.noUnusedImports: error`.
- Overrides:
  - `**/*.vue` — снимаем `noUnusedVariables`, `noUnusedImports`, `useTemplate`, `noUnusedTemplateLiteral`,
    `useImportType`, `noExplicitAny` (как в fallback: embedded-анализ Vue неполный);
  - `**/*.d.ts` — снимаем `useConsistentTypeDefinitions` (нужен `interface` для аугментации `ProcessEnv`);
  - `**/*.test.ts`, `test/**/*.ts` — `noExplicitAny: off`, `noNonNullAssertion: warn`.
- `files.includes`: исключены `node_modules`, `dist`, `.quasar`, `coverage`, `public` (статические ассеты),
  `index.html` (EJS-шаблон Quasar, `<%= %>` не парсится), `package-lock.json`, `*.min.*`, `*.log`.

## Что удалено из mylara

- `eslint.config.js`, `.config/eslint-rules/`.
- `.prettierrc.json`, `.prettierignore`, `.prettierCache`.
- `.eslintcache`, `.stylelintcache`, `stylelint.config.mjs`, `.stylelintrc.json`.
- Скрипты: `format.sh`, `format-quick.sh`, `validate-config.sh`, `pre-commit-hook.sh`,
  `lint-and-format.sh`, `check-format-stability.sh`.
- npm-скрипты: `lint:fix`, `format*`, `prettier:*`, `stylelint*`, `lint:all`.
- devDependencies: `@eslint/js`, `@vue/eslint-config-prettier`, `@vue/eslint-config-typescript`, `eslint`,
  `eslint-import-resolver-typescript`, `eslint-plugin-import`, `eslint-plugin-prettier`, `eslint-plugin-vue`,
  `prettier`, `stylelint`, `stylelint-config-prettier-scss`, `stylelint-config-recess-order`,
  `stylelint-config-recommended-scss`, `stylelint-order`, `postcss-html`, `globals`, `vue-eslint-parser`,
  `vite-plugin-checker`.
- В `quasar.config.ts` — блок `vite-plugin-checker` (Biome checker не поддерживается).
- Документация в `docs/` про ESLint/Prettier/Stylelint; добавлен `docs/formatting.md` про Biome.
- Секция `Linting cache files` в `.gitignore`.
- ESLint-комментарии в исходниках заменены на `biome-ignore` либо удалены.

## Потери, которые надо принять (честно)

1. `import/order` с кастомными группами (vue/pinia/quasar/src) → Biome сортирует импорты по своему (разовое перелинование импортов).
2. Type-aware правила (`no-floating-promises`, `no-misused-promises`, `no-unnecessary-type-assertion`,
   `restrict-template-expressions` и др.) — у Biome только nursery или отсутствуют. Типы проверяет `vue-tsc`.
3. Часть `vue/*` правил шаблона отсутствует: `attributes-order`, `block-order`, `padding-line-between-blocks`,
   `require-default-prop`, `require-explicit-emits`, `no-unused-components`, `no-template-shadow`, `no-v-html`,
   `order-in-components` и др.
4. Markdown Biome не форматирует.
5. SCSS: Biome не поддерживает. Форматирование — встроенным форматтером VS Code
   (`vscode.css-language-features`), стилевая дисциплина — на ревью.

## Решения пользователя (согласовано)

1. Biome — **глобальный** бинарник (`~/.local/bin/biome`), в CI пиннится через `npm exec`.
2. Vue-шаблоны — **как в fallback**: Biome форматирует/линтит только `<script>` в `.vue`, шаблон и стили не трогает.
3. Stylelint — **удалить**.

## Статус выполнения

Выполнено полностью:

- [x] `biome.json` создан (адаптирован под mylara).
- [x] `.vscode/settings.json`, `.vscode/extensions.json`, `.vscode/tasks.json` обновлены под Biome.
- [x] `package.json`: новые `lint` / `fix` / `typecheck`, удалены ESLint/Prettier/Stylelint devDeps и скрипты.
- [x] `quasar.config.ts`: удалён `vite-plugin-checker` с ESLint.
- [x] Удалены старые конфиги, скрипты, кэши, `docs/*` про ESLint/Prettier/Stylelint.
- [x] `README.md` и новый `docs/formatting.md` описывают Biome.
- [x] `.opencode/command/lint.md` добавлен.
- [x] `.gitignore`: убрана секция кэшей линтеров.
- [x] `.github/workflows/deploy.yml`: добавлены шаги `Type check` и `Lint` (пиннутый Biome).
- [x] ESLint-комментарии в исходниках заменены на `biome-ignore`/удалены.
- [x] `npm install` — `package-lock.json` обновлён, лишние пакеты удалены.
- [x] `biome check .` — 0 диагностик.
- [x] `npm run typecheck` (`vue-tsc --noEmit`) — без ошибок.
- [x] `npm run test:unit:ci` — 139 тестов пройдено (8 файлов).
