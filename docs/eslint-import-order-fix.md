# ✅ Решение: Автоприменение правил линтеров для новых файлов

## Проблема

При создании новых файлов возникают ошибки ESLint:

- `[ESLint] There should be at least one empty line between import groups (import/order)`
- `[ESLint] import should occur before type import (import/order)`

## ✅ Внесенные исправления

### 1. Исправлен файл firebase-storage.service.ts

- Правильный порядок импортов
- Пустые строки между группами импортов
- Type imports после обычных импортов

### 2. Обновлены настройки VS Code (.vscode/settings.json)

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
  "editor.codeActionsOnSaveTimeout": 3000,
  "eslint.run": "onType",
  "eslint.codeActionsOnSave.mode": "all",
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true
}
```

### 3. Добавлены VS Code задачи

- `ESLint: Fix All` - исправить все файлы
- `ESLint: Check Current File` - исправить текущий файл
- `Format All: Complete` - полное форматирование

### 4. Создан скрипт автоформатирования

```bash
./lint-and-format.sh  # Полное форматирование проекта
```

### 5. Добавлены code snippets

- `firebase-service` - шаблон для Firebase сервисов
- `vue-comp` - шаблон для Vue компонентов
- `ts-service` - шаблон для TypeScript сервисов

## 🎯 Как работает автоисправление

### При сохранении файла автоматически:

1. ✅ ESLint исправляет порядок импортов
2. ✅ Prettier форматирует код
3. ✅ Stylelint исправляет стили
4. ✅ Убираются лишние пробелы
5. ✅ Добавляется финальная пустая строка

### При вводе кода (onType):

- ESLint показывает ошибки в реальном времени
- Автоматические исправления предлагаются через Quick Fix (Ctrl+.)

## 📋 Правильный порядок импортов

```typescript
// 1. External packages (Vue, Quasar, Firebase)
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import { getStorage, ref as storageRef } from 'firebase/storage'

// 2. Internal services/utils
import { getFirebaseStorage } from './firebase'
import { formatFileSize } from 'src/utils/format'

// 3. Type imports
import type { FirebaseStorage } from 'firebase/storage'
import type { ComponentEmits } from 'vue'
```

## 🚀 Быстрые команды

### В Command Palette (Ctrl+Shift+P):

- `Tasks: Run Task` → `ESLint: Fix All`
- `Tasks: Run Task` → `Format All: Complete`

### Горячие клавиши:

- `Ctrl+S` - автосохранение с форматированием
- `Ctrl+.` - Quick Fix для исправления ошибок
- `Shift+Alt+F` - форматирование документа

### В терминале:

```bash
# Быстрое исправление текущих ошибок
npx eslint . --fix

# Полное форматирование
./lint-and-format.sh
```

## 🔧 Отладка проблем

### Если автоисправление не работает:

1. Перезагрузите VS Code
2. Проверьте статус ESLint в статусной строке
3. Запустите: `Developer: Reload Window` (Ctrl+Shift+P)

### Если ошибки все еще появляются:

1. Откройте Output panel (View → Output)
2. Выберите "ESLint" в dropdown
3. Проверьте ошибки конфигурации

## ✨ Результат

- 🎯 Новые файлы автоматически форматируются при сохранении
- 🎯 Импорты организуются в правильном порядке
- 🎯 Код соответствует всем правилам проекта
- 🎯 Нет необходимости вручную исправлять formatting ошибки
