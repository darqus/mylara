# 🎯 Автоматическое форматирование Vue атрибутов

## ✅ Что настроено

Проект настроен для автоматического форматирования порядка атрибутов в Vue файлах на основе конфигурации `pluginVue.configs['flat/strongly-recommended']` с дополнительным правилом `vue/attributes-order`:

- **При вводе**: неправильный порядок подчеркивается красной линией
- **При сохранении**: атрибуты автоматически переставляются в правильном порядке

## 🚀 Как использовать

### Автоматически (рекомендуется)

1. Пишите код как обычно
2. Сохраняйте файл (`Ctrl+S`)
3. ESLint автоматически исправит порядок атрибутов

### Вручную

- `Ctrl+Shift+Alt+V` - исправить текущий Vue файл
- `Ctrl+Shift+Alt+A` - исправить все Vue файлы

## 📏 Правильный порядок

```vue
<div
  v-if="condition"        <!-- 1. Условия -->
  id="unique"             <!-- 2. ID -->
  ref="elementRef"        <!-- 3. Ссылки -->
  v-model="value"         <!-- 4. Двусторонняя привязка -->
  :class="dynamic"        <!-- 5. Динамические атрибуты -->
  class="static"          <!-- 6. Статические атрибуты -->
  disabled                <!-- 7. Boolean атрибуты -->
  @click="handler"        <!-- 8. События -->
>
```

## 🔧 Где найти настройки

- Правила ESLint: `.config/eslint-rules/modules/vue-attributes.js`
- Настройки VS Code: `.vscode/settings.json`
- Горячие клавиши: `.vscode/keybindings.json`
- Команды: `.vscode/tasks.json`

## 🎮 Демонстрация

**До исправления:**

```vue
<input
  @input="handleInput"     <!-- Событие первое -->
  class="input-class"      <!-- Статический класс -->
  v-model="value"          <!-- Двусторонняя привязка -->
  :disabled="isDisabled"   <!-- Динамический атрибут -->
  ref="inputRef"           <!-- Ссылка -->
  type="text"              <!-- Статический тип -->
/>
```

**После автоисправления:**

```vue
<input
  ref="inputRef"           <!-- 1. Ссылка -->
  v-model="value"          <!-- 2. Двусторонняя привязка -->
  :disabled="isDisabled"   <!-- 3. Динамический атрибут -->
  class="input-class"      <!-- 4. Статический класс -->
  type="text"              <!-- 5. Статический тип -->
  @input="handleInput"     <!-- 6. Событие -->
/>
```

Подробная документация: [docs/vue-attributes-order.md](vue-attributes-order.md)
