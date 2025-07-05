# Конфигурация автоматического форматирования для проекта

## Настройки VS Code для автоприменения правил линтеров

Проект настроен для автоматического исправления ошибок форматирования при сохранении файлов.

### Активированные автоматические действия

#### При сохранении файла (formatOnSave)

- ✅ **Prettier** - автоформатирование кода
- ✅ **ESLint** - автоисправление правил JavaScript/TypeScript/Vue
- ✅ **Stylelint** - автоисправление стилей CSS/SCSS

#### Автоматически исправляемые ошибки ESLint

- `import/order` - правильный порядок импортов
- `import/newlines-between` - пустые строки между группами импортов
- Semi-colon правила
- Отступы и форматирование
- Quotes (одинарные кавычки)
- И другие auto-fixable правила

### Настроенные команды VS Code

#### Через Command Palette (Ctrl+Shift+P)

- `Tasks: Run Task` → `ESLint: Fix All` - исправить все файлы
- `Tasks: Run Task` → `ESLint: Check Current File` - исправить текущий файл
- `Tasks: Run Task` → `Prettier: Format All` - форматировать все файлы
- `Tasks: Run Task` → `Format All: Complete` - полное форматирование

#### Через терминал

```bash
# Исправить все файлы
./lint-and-format.sh

# Только ESLint
npx eslint . --fix

# Только Prettier
npx prettier --write "**/*.{js,ts,vue,json,md,scss,css,html}"

# Только Stylelint
npx stylelint "**/*.{css,scss,vue}" --fix
```

### Настройки .vscode/settings.json

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
  "editor.codeActionsOnSaveTimeout": 3000
}
```

### Правила импортов (import/order)

Порядок групп импортов:

1. **builtin** - встроенные модули Node.js
2. **external** - внешние пакеты из node_modules
3. **internal** - внутренние модули проекта
4. **parent/sibling** - относительные импорты
5. **index** - индексные файлы
6. **type** - типы TypeScript
7. **object** - объектные импорты

### Специальные группы для Vue/Quasar

- Vue, Pinia, Quasar импорты - в начале external группы
- Компоненты, сервисы, утилиты - в internal группе
- Стили (.scss) - в конце

### Пример правильного порядка импортов

```typescript
// External packages
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'

// Internal services
import { getFirebaseStorage } from './firebase'

// Type imports
import type { FirebaseStorage } from 'firebase/storage'
```

### Pre-commit hook

Установлен git hook, который проверяет форматирование перед коммитом:

- Проверяет Prettier
- Проверяет ESLint
- Блокирует коммит при наличии ошибок

### Отладка проблем форматирования

1. **Проверить статус ESLint**: `npx eslint . --ext .js,.ts,.vue`
2. **Проверить конфигурацию**: файлы в `.config/eslint-rules/`
3. **Проверить VS Code настройки**: `.vscode/settings.json`
4. **Перезагрузить VS Code** после изменения настроек

### Игнорирование правил

При необходимости можно отключить правила:

```typescript
// eslint-disable-next-line import/order
import { specialImport } from './special'

/* eslint-disable import/order */
// Блок кода с отключенной проверкой импортов
/* eslint-enable import/order */
```

### Производительность

- Кэширование ESLint активировано
- Автосохранение настроено на `onFocusChange`
- Исключены папки: `node_modules`, `dist`, `.quasar`
