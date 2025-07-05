# Решение конфликтов форматирования

Дата: 5 июля 2025 г.

## Проблема

В проекте возникали постоянные конфликты при форматировании между Prettier и ESLint, которые проявлялись в виде:

```diff
 const {
-  initAuth,
+  initAuth,
 } = useAdminAuth()
```

## Анализ причин

Конфликт происходил из-за несовместимости между:

1. **Prettier настройка**: `trailingComma: "all"` - добавляет запятые везде где возможно
2. **ESLint правило**: `object-curly-newline` с `minProperties: 1` - требует переносы для любого объекта/деструктуризации
3. **ESLint правило**: `comma-dangle: "always"` - требует запятые в конце для многострочных конструкций

## Внесенные исправления

### 1. Изменения в `.prettierrc.json`

```diff
- "trailingComma": "all",
+ "trailingComma": "es5",
+ "bracketSameLine": false,
+ "printWidth": 80,
```

### 2. Изменения в `.config/eslint-rules/modules/common.js`

```diff
  'object-curly-newline': [
    'error',
    {
      ImportDeclaration: {
        multiline: true,
        minProperties: 2,
      },
      ExportDeclaration: {
        multiline: true,
        minProperties: 2,
      },
      ObjectExpression: {
        multiline: true,
-       minProperties: 1,
+       minProperties: 2,
      },
      ObjectPattern: {
        multiline: true,
-       minProperties: 1,
+       minProperties: 2,
      },
    },
  ],
```

```diff
  'comma-dangle': [
    'error',
    {
-     arrays: 'always',
-     objects: 'always',
-     imports: 'always',
-     exports: 'always',
+     arrays: 'only-multiline',
+     objects: 'only-multiline',
+     imports: 'only-multiline',
+     exports: 'only-multiline',
      functions: 'never',
    },
  ],
```

## Результат

После внесения изменений:

- ✅ Одиночные деструктуризации остаются на одной строке: `const { initAuth } = useAdminAuth()`
- ✅ Множественные деструктуризации переносятся на новые строки при необходимости
- ✅ Исчезли "форматировочные войны" между инструментами
- ✅ Consistent formatting между IDE и командной строкой

## Инструменты для проверки

Создан скрипт `check-format-stability.sh` для автоматической проверки стабильности форматирования:

```bash
./check-format-stability.sh
```

## Рекомендации

1. **Запускайте `check-format-stability.sh`** после любых изменений в конфигурации форматирования
2. **Используйте команду `./format.sh`** для полного форматирования проекта
3. **Настройте pre-commit хуки** для автоматической проверки форматирования
4. **Периодически проверяйте** совместимость настроек при обновлении зависимостей

## Команды для проверки

```bash
# Проверить один файл
npx prettier --check src/App.vue
npx eslint src/App.vue

# Полное форматирование проекта
./format.sh

# Проверка стабильности форматирования
./check-format-stability.sh
```
