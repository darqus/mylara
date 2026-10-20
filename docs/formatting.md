# Форматирование и линтинг

В проекте единственный форматтер и линтер для JS/TS/Vue/JSON — [Biome](https://biomejs.dev).
ESLint, Prettier и Stylelint удалены.

## Команды

```bash
npm run lint       # biome check .            — проверить и показать проблемы
npm run fix        # biome check --write --unsafe --files-ignore-unknown=true . — формат + автофиксы
npm run typecheck  # vue-tsc --noEmit         — проверка типов
```

Проверка перед коммитом: `npm run fix && npm run typecheck && npm run test:unit:ci`.

## Конфигурация

- `biome.json` — единственный источник правил.
  - Формат: 2 пробела, одинарные кавычки, без точек с запятой, trailing commas `es5`, `lineWidth: 80`.
  - Импорты сортирует `assist.actions.source.organizeImports` (заменяет `import/order`).
  - Кастомные правила проекта: `useConsistentTypeDefinitions` (`type`), `noConsole` (warn, разрешены warn/error),
    `noExplicitAny` (warn), `noNonNullAssertion` (error), `noParameterAssign` (error), `useOptionalChain` (error) и т.д.
- Глобальный `biome` установлен в `~/.local/bin/biome`. В `package.json` его нет намеренно — обновляется централизованно.
  В CI используется пиннутая версия: `npm exec --yes --package=@biomejs/biome@<ver> -- biome check src/`.

## Vue и SCSS

- В `.vue` Biome форматирует и линтит `<script>`; `<template>` и `<style>` не трогает (поддержка Vue в Biome
  экспериментальная и намеренно не включается).
- SCSS Biome не поддерживает. Форматируется встроенным форматтером VS Code (`vscode.css-language-features`,
  см. `[scss]` в `.vscode/settings.json`); стилевая дисциплина — на ревью.

## Ограничения по сравнению с прежним ESLint

- Кастомные группы `import/order` заменены встроенной сортировкой импортов Biome.
- Type-aware правила (`no-floating-promises`, `no-misused-promises`, `no-unnecessary-type-assertion` и др.) отсутствуют —
  типы проверяет `vue-tsc`.
- Частые `vue/*` правила шаблона (`attributes-order`, `block-order`, `require-default-prop`, `no-v-html` и др.)
  в Biome пока не реализованы.

## VS Code

- Расширения: `biomejs.biome`, `vue.volar`.
- Формат при сохранении и `source.organizeImports.biome` настроены в `.vscode/settings.json`.
- Задачи `Typecheck`, `Lint + Fix`, `Full Check (Lint + Typecheck)` — в `.vscode/tasks.json`.
