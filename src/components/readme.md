# Соглашения по именованию и организации общих компонентов

## Общие принципы именования компонентов

### Префиксы для компонентов

| Префикс | Тип компонента                                                  | Примеры                                               |
| ------- | --------------------------------------------------------------- | ----------------------------------------------------- |
| `Base`  | Базовые компоненты, которые используются повсеместно            | `BaseButton.vue`, `BaseInput.vue`, `BaseIcon.vue`     |
| `App`   | Компоненты уровня приложения, обычно одиночные экземпляры       | `AppHeader.vue`, `AppFooter.vue`, `AppNavigation.vue` |
| `The`   | Уникальные компоненты, используемые только один раз на странице | `TheHeader.vue`, `TheFooter.vue`, `TheSidebar.vue`    |
| `Q`     | Обертки над компонентами Quasar с кастомизированным поведением  | `QCustomTable.vue`, `QExtendedBtn.vue`                |

### Суффиксы для компонентов

| Суффикс   | Назначение              | Примеры                                              |
| --------- | ----------------------- | ---------------------------------------------------- |
| `Page`    | Компоненты страниц      | `HomePage.vue`, `ContactPage.vue`, `ProfilePage.vue` |
| `Section` | Большие разделы страниц | `HeroSection.vue`, `FeaturesSection.vue`             |
| `List`    | Списки элементов        | `UserList.vue`, `ProductList.vue`                    |
| `Item`    | Элементы списков        | `UserItem.vue`, `ProductItem.vue`                    |
| `Form`    | Формы                   | `LoginForm.vue`, `RegistrationForm.vue`              |
| `Field`   | Поля формы              | `FormField.vue`, `TextField.vue`                     |
| `Layout`  | Компоненты макетов      | `DefaultLayout.vue`, `AdminLayout.vue`               |
| `Modal`   | Модальные окна          | `ConfirmModal.vue`, `AlertModal.vue`                 |
| `Card`    | Карточки с информацией  | `ProductCard.vue`, `UserCard.vue`                    |

## Организация файлов и папок компонентов

### Структура папок для общих компонентов

```
src/
  components/
    base/              # Базовые компоненты (BaseButton, BaseInput и т.д.)
    form/              # Компоненты форм
    ui/                # UI компоненты (модальные окна, уведомления и т.д.)
    layout/            # Компоненты макетов
    common/            # Другие общие компоненты
    specific/          # Компоненты для конкретных функций
```

### Группировка связанных компонентов

Если компонент сложный и состоит из нескольких частей, создаем подпапку:

```
components/
  DataTable/
    DataTable.vue       # Основной компонент
    DataTableHeader.vue # Подкомпонент заголовка
    DataTableRow.vue    # Подкомпонент строки
    DataTableCell.vue   # Подкомпонент ячейки
    index.ts            # Экспорт всех компонентов
```

## Именование свойств и методов в компонентах

### Props (входные свойства)

- Используем camelCase: `inputValue`, `isDisabled`, `onSubmit`
- Булевы свойства предваряем `is`, `has`, `should`: `isRequired`, `hasError`
- Функции-обработчики событий: `onSubmit`, `onClick`, `onInput`

### События (events)

- Используем kebab-case: `@click`, `@input`, `@form-submitted`
- События изменения имеют префикс `update:`: `@update:model-value`
- Кастомные события описывают действие: `@item-selected`, `@modal-closed`

### CSS классы в компонентах

- Корневой элемент компонента именуем по имени компонента в kebab-case: `base-button`, `data-table`
- Используем BEM нотацию:
  - Блок: `form-field`
  - Элемент: `form-field__input`, `form-field__label`
  - Модификатор: `form-field--disabled`, `form-field__input--error`

## Пример структуры компонента

```vue
<template>
  <div
    class="base-input"
    :class="{ 'base-input--error': hasError }"
  >
    <label
      v-if="label"
      class="base-input__label"
      >{{ label }}</label
    >
    <input
      class="base-input__field"
      :value="modelValue"
      @input="updateValue"
      :placeholder="placeholder"
      :type="type"
    />
    <span
      v-if="errorMessage"
      class="base-input__error"
      >{{ errorMessage }}</span
    >
  </div>
</template>

<script setup lang="ts">
// Определение props
interface Props {
  modelValue?: string
  label?: string
  placeholder?: string
  type?: string
  errorMessage?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  modelValue: '',
})

// Определение emits
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

// Вычисляемые свойства
const hasError = computed(() => !!props.errorMessage)

// Методы
const updateValue = (event: Event) => {
  const value = (event.target as HTMLInputElement).value.trim()
  emit('update:modelValue', value)
}
</script>

<style lang="scss" scoped>
.base-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  &__label {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  &__field {
    padding: 0.5rem;
    border: 1px solid $border-color;
    border-radius: 4px;

    &:focus {
      outline: none;
      border-color: $primary;
    }
  }

  &__error {
    color: $negative;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }

  &--error {
    .base-input__field {
      border-color: $negative;
    }
  }
}
</style>
```

## Правила использования компонентов

1. **Переиспользование**: Создавайте компоненты, которые можно переиспользовать в различных частях приложения
2. **Композиция**: Предпочитайте композицию наследованию
3. **Единственная ответственность**: Каждый компонент должен отвечать только за одну функцию
4. **Интерфейсы**: Определяйте четкие интерфейсы для props и emits
5. **Документация**: Добавляйте JSDoc комментарии для описания компонентов, их props и методов

## Рекомендации по созданию общих компонентов

1. **Гибкость**: Делайте компоненты достаточно гибкими, но не переусложняйте
2. **Настраиваемость**: Обеспечьте возможность кастомизации через props
3. **Контроль**: Компоненты должны сами контролировать свою внутреннюю логику
4. **Прозрачность**: Компоненты должны быть простыми в использовании и понимании
5. **Совместимость**: Обеспечьте совместимость с экосистемой Vue и Quasar

## Приоритет при создании общих компонентов

1. Общие компоненты UI должны использовать базовые стили проекта
2. Компоненты должны корректно работать на мобильных устройствах
3. Тестируемость: компоненты должны быть легко тестируемыми
4. Производительность: избегайте ненужных рендеров
5. Доступность: обеспечьте ARIA атрибуты и работу с клавиатурой
