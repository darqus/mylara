# Система форматирования кода

Этот проект использует комплексную систему форматирования кода, которая интегрирует правила линтинга из папки `.config`, настройки VS Code и различные инструменты форматирования.

## 🛠 Инструменты

- **Prettier** - базовое форматирование кода
- **ESLint** - проверка качества кода и исправление ошибок
- **Stylelint** - форматирование и проверка SCSS/CSS
- **TypeScript** - проверка типов

## 📁 Структура конфигураций

```text
.config/
└── eslint-rules/
    ├── index.js              # Основной файл правил
    └── modules/
        ├── common.js         # Общие правила
        ├── ts.js            # Правила для TypeScript
        └── vue.js           # Правила для Vue

.vscode/
└── settings.json            # Настройки VS Code

eslint.config.js             # Конфигурация ESLint
stylelint.config.mjs         # Конфигурация Stylelint
.prettierrc.json            # Конфигурация Prettier
```

## 🚀 Скрипты форматирования

### Основное форматирование

```bash
./format.sh
# или
yarn format
```

**Что делает:**

- Полное форматирование с проверкой типов TypeScript
- Применяет все правила из `.config/eslint-rules/`
- Обрабатывает файлы: `.ts`, `.mts`, `.js`, `.mjs`, `.cjs`, `.vue`, `.scss`, `.css`
- Включает кэширование для ускорения повторных запусков

### Быстрое форматирование

```bash
./format-quick.sh
# или
yarn format:quick
```

**Что делает:**

- Быстрое форматирование без проверки типов
- Подходит для разработки
- Базовые проверки ESLint и Stylelint

### Валидация конфигурации

```bash
./validate-config.sh
# или
yarn format:validate
```

**Что делает:**

- Проверяет наличие всех конфигурационных файлов
- Валидирует настройки VS Code
- Проверяет зависимости в `package.json`
- Выводит отчет о состоянии конфигурации

### Форматирование по типам файлов

- **TypeScript/JavaScript**: ESLint + Prettier
- **Vue**: ESLint + Prettier (специальные правила)
- **SCSS/CSS**: Stylelint + Prettier
- **JSON/JSONC**: встроенный форматировщик VS Code
- **Markdown**: Prettier + Markdownlint

### Автоматические действия

- Форматирование при сохранении
- Исправление ошибок ESLint/Stylelint
- Организация импортов (отключена)

## 📋 Правила линтинга

### Общие правила (common.js)

- Без точки с запятой
- Одинарные кавычки
- Trailing comma
- Сортировка импортов
- Отступы (2 пробела)
- Пустые строки между блоками

### TypeScript правила (ts.js)

- Строгие типы
- Проверка неиспользуемых переменных
- Предпочтение интерфейсов

### Vue правила (vue.js)

- Строгие правила Vue 3
- Правильная структура компонентов
- Именование компонентов

## 🔍 Отладка

### Проверка конфигурации

```bash
yarn format:validate
```

### Проверка отдельных инструментов

```bash
# Только Prettier
npx prettier --check "**/*.{ts,vue,scss}"

# Только ESLint
npx eslint "**/*.{ts,vue}" --config eslint.config.js

# Только Stylelint
npx stylelint "**/*.scss" --config stylelint.config.mjs
```

### Кэши

Система использует кэши для ускорения:

- `.eslintcache` - кэш ESLint
- `.stylelintcache` - кэш Stylelint
- `.prettierCache` - кэш Prettier

Для сброса кэшей:

```bash
rm -f .eslintcache .stylelintcache .prettierCache
```

## 📦 Зависимости

Основные зависимости для работы системы:

- `prettier`
- `eslint`
- `stylelint`
- `@vue/eslint-config-typescript`
- `eslint-plugin-vue`
- `eslint-plugin-prettier`
- `stylelint-config-recommended-scss`

## 🎯 Рекомендуемые расширения VS Code

1. **ESLint** (`dbaeumer.vscode-eslint`)
2. **Prettier** (`esbenp.prettier-vscode`)
3. **Stylelint** (`stylelint.vscode-stylelint`)
4. **Vue Language Features** (`Vue.volar`)
5. **TypeScript Importer** (`pmneo.tsimporter`)

## 🔄 Workflow

1. **Разработка**: используйте `yarn format:quick` для быстрого форматирования
2. **Перед коммитом**: запустите `yarn format` для полной проверки
3. **Настройка проекта**: запустите `yarn format:validate` и `yarn format:sync-vscode`
4. **Проблемы**: используйте отладочные команды выше

## ⚡ Производительность

- Все инструменты используют кэширование
- Быстрый режим пропускает проверку типов
- Игнорируются `node_modules`, `dist`, `.quasar`
- Параллельная обработка файлов где возможно
