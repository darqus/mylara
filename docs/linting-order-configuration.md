# Настройка линтеров и форматирования в VS Code

## Обзор системы

Проект настроен для автоматического форматирования и линтинга файлов при сохранении в следующем порядке:

1. **Prettier** - форматирование кода (отступы, пробелы, переносы)
2. **ESLint** - проверка и исправление правил кодирования
3. **Stylelint** - для CSS/SCSS файлов

## Настройки VS Code (.vscode/settings.json)

### Основные настройки

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "eslint.format.enable": false,
  "eslint.validate": ["javascript", "typescript", "vue"],
  "eslint.codeAction.showDocumentation": { "enable": true },
  "eslint.codeActionsOnSave.mode": "problems"
}
```

### Настройки для TypeScript файлов

```json
"[typescript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.prettier": "explicit",
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  }
}
```

### Настройки для Vue файлов

```json
"[vue]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.prettier": "explicit",
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  }
}
```

### Настройки для JavaScript файлов

```json
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.prettier": "explicit",
    "source.fixAll.eslint": "explicit",
    "source.fixAll.stylelint": "never",
    "source.organizeImports": "never"
  }
}
```

## Порядок выполнения при сохранении

1. **source.fixAll.prettier** - Prettier форматирует код согласно настройкам в `.prettierrc.json`
2. **source.fixAll.eslint** - ESLint применяет правила из `eslint.config.js`

## Конфигурация ESLint

ESLint настроен с `prettierSkipFormatting` для предотвращения конфликтов:

```javascript
import prettierSkipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  // ...
  prettierSkipFormatting
  // ...
)
```

## Конфигурация Prettier

Основные настройки в `.prettierrc.json`:

```json
{
  "semi": false,
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "trailingComma": "es5",
  "singleAttributePerLine": true,
  "bracketSameLine": false,
  "vueIndentScriptAndStyle": false
}
```

## Тестирование настроек

### Ручное тестирование

```bash
# Проверить форматирование Prettier
npx prettier --check src/components/**/*.vue

# Применить форматирование Prettier
npx prettier --write src/components/**/*.vue

# Проверить ESLint
npx eslint src/components/**/*.vue

# Применить исправления ESLint
npx eslint src/components/**/*.vue --fix
```

### Автоматическое форматирование

При сохранении файла в VS Code автоматически выполняется:

1. Prettier форматирование
2. ESLint исправления
3. Stylelint для CSS/SCSS

## Результат

Настройка обеспечивает:

- ✅ Prettier форматирует код первым
- ✅ ESLint применяет правила кодирования после
- ✅ Нет конфликтов между инструментами
- ✅ Автоматическая работа при сохранении
- ✅ Консистентное форматирование всех файлов

## Дополнительные задачи

В проекте также доступны задачи для массового форматирования:

- `Format All: Complete` - полное форматирование всех файлов
- `ESLint: Fix All` - исправление всех ESLint ошибок
- `Prettier: Format All` - форматирование всех файлов Prettier
- `Stylelint: Fix All` - исправление всех Stylelint ошибок
