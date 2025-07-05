# Vue Attributes Order - Автоматическое форматирование порядка атрибутов

## 🎯 Как это работает в проекте

### 1. Подчеркивание ошибок в реальном времени

- ESLint настроен на работу `"onType"` - проверяет код при вводе
- Неправильный порядок атрибутов будет подчеркнут красной линией
- Ошибки отображаются в панели Problems (Ctrl+Shift+M)

### 2. Автоматическое исправление при сохранении

- При сохранении файла (Ctrl+S) ESLint автоматически исправляет порядок атрибутов
- Настройка `"source.fixAll.eslint": "explicit"` в VS Code обеспечивает это поведение

## ⌨️ Горячие клавиши

- **Ctrl+Shift+Alt+V** - Исправить порядок атрибутов в текущем Vue файле
- **Ctrl+Shift+Alt+A** - Исправить порядок атрибутов во всех Vue файлах проекта

## 🛠️ Доступные команды VS Code

1. **Vue: Fix Current File Attributes** - исправить атрибуты в текущем файле
2. **Vue: Fix Attributes Order** - исправить атрибуты во всех Vue файлах
3. **ESLint: Fix Current File** - исправить все ESLint ошибки в текущем файле
4. **ESLint: Fix All** - исправить все ESLint ошибки в проекте

## 📋 Порядок атрибутов в Vue компонентах

Согласно правилу `vue/attributes-order` атрибуты в Vue элементах должны следовать определенному порядку:

### 1. DEFINITION (определение)

- `is`
- `v-is`

### 2. LIST_RENDERING (рендеринг списков)

- `v-for`

### 3. CONDITIONALS (условия)

- `v-if`
- `v-else-if`
- `v-else`
- `v-show`
- `v-cloak`

### 4. RENDER_MODIFIERS (модификаторы рендеринга)

- `v-once`
- `v-memo`

### 5. GLOBAL (глобальные)

- `id`

### 6. UNIQUE, SLOT (уникальные, слоты)

- `ref`
- `key`
- `slot`
- `slot-scope`
- `v-slot`

### 7. TWO_WAY_BINDING (двусторонняя привязка)

- `v-model`

### 8. OTHER_DIRECTIVES (другие директивы)

- `v-custom-directive`

### 9. ATTR_DYNAMIC (динамические атрибуты)

- `:prop="value"`
- `:attribute="value"`
- `v-bind`

### 10. ATTR_STATIC (статические атрибуты)

- `prop="value"`
- `attribute="value"`

### 11. ATTR_SHORTHAND_BOOL (сокращенные булевы)

- `boolean-attr`

### 12. EVENTS (события)

- `@event="handler"`
- `v-on`

### 13. CONTENT (контент)

- `v-html`
- `v-text`

## 💡 Примеры правильного порядка

### Простой пример

```vue
<li v-for="item in items" :key="item.id" @click="handleClick">
  {{ item.name }}
</li>
```

### Комплексный пример

```vue
<component
  :is="componentType"
  v-for="item in items"
  v-if="item.visible"
  :key="item.id"
  ref="itemRef"
  v-model="item.value"
  :data-id="item.id"
  :class="item.class"
  disabled
  @click="handleClick"
  @input="handleInput"
  v-text="item.content"
>
</component>
```

## ⚙️ Настройки проекта

### ESLint конфигурация

```javascript
'vue/attributes-order': [
  'error',
  {
    order: [
      'DEFINITION',
      'LIST_RENDERING',
      'CONDITIONALS',
      'RENDER_MODIFIERS',
      'GLOBAL',
      ['UNIQUE', 'SLOT'],
      'TWO_WAY_BINDING',
      'OTHER_DIRECTIVES',
      'ATTR_DYNAMIC',
      'ATTR_STATIC',
      'ATTR_SHORTHAND_BOOL',
      'EVENTS',
      'CONTENT',
    ],
    alphabetical: true, // Сортировка в алфавитном порядке внутри каждой группы
  },
],
```

### Prettier конфигурация для Vue

```json
{
  "files": "*.vue",
  "options": {
    "singleAttributePerLine": true,
    "htmlWhitespaceSensitivity": "ignore"
  }
}
```

## 🔧 Форматирование

### Автоматическое форматирование

```bash
# Применить форматирование ко всем Vue файлам
npx prettier --write "src/**/*.vue"
npx eslint "src/**/*.vue" --fix

# Полное форматирование проекта
./format.sh
```

### VS Code

При сохранении файла автоматически применяются правила благодаря настройкам:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

## ✅ Результат

После применения правил Vue элементы будут выглядеть так:

- ✅ Атрибуты отсортированы по логическим группам
- ✅ Каждый атрибут на отдельной строке
- ✅ Правильные отступы
- ✅ Консистентное форматирование

Это улучшает читаемость кода и обеспечивает единообразие в команде! 🎯
