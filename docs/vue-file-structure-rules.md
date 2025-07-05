# Vue File Structure Rules

## Обязательный порядок секций в Vue файлах

Все Vue Single File Components (SFC) должны строго соответствовать следующему порядку:

### 1. `<script>` - Всегда первый

```vue
<script setup lang="ts">
// Импорты
import { ref, onMounted } from 'vue'
import SomeComponent from './SomeComponent.vue'

// Композаблы
const { isMobile } = useDevice()

// Реактивные данные
const currentIndex = ref(0)

// Методы
const handleClick = () => {
  // логика
}

// Хуки жизненного цикла
onMounted(() => {
  // инициализация
})
</script>
```

### 2. `<template>` - Всегда второй

```vue
<template>
  <div class="component-wrapper">
    <!-- Разметка компонента -->
  </div>
</template>
```

### 3. `<style>` - Всегда последний

```vue
<style scoped lang="scss">
.component-wrapper {
  // стили компонента
}
</style>
```

## Автоматическое исправление

### ESLint правило

Добавлено правило `vue/component-tags-order` которое автоматически проверяет и исправляет порядок блоков.

### VS Code задачи

- **Vue: Fix Block Order** - исправить порядок во всех Vue файлах
- **Vue: Fix Current File Block Order** - исправить порядок в текущем файле

### Команды терминала

```bash
# Исправить все Vue файлы
npx eslint "**/*.vue" --fix --rule "vue/component-tags-order:error"

# Исправить конкретный файл
npx eslint "path/to/file.vue" --fix --rule "vue/component-tags-order:error"

# Полное форматирование (включает исправление порядка блоков)
./lint-and-format.sh
```

## GitHub Copilot инструкции

Созданы инструкции для Copilot в `.github/copilot-instructions.md` которые автоматически направляют AI на создание Vue файлов с правильной структурой.

## Проверка соответствия

Для проверки, что все Vue файлы соответствуют правилам:

```bash
# Проверить без автофикса
npx eslint "**/*.vue" --rule "vue/component-tags-order:error"

# Исправить автоматически
npx eslint "**/*.vue" --fix --rule "vue/component-tags-order:error"
```

## Интеграция с CI/CD

Правило `vue/component-tags-order` включено в основную конфигурацию ESLint, поэтому будет проверяться автоматически при каждом запуске линтера.
