# Руководство по миграции на систему Breakpoints Quasar

## Быстрая замена

### Таблица соответствий

| Старый @media query          | Новый миксин Quasar     | Описание             |
| ---------------------------- | ----------------------- | -------------------- |
| `@media (max-width: 599px)`  | `@include screen-xs`    | Только мобильные     |
| `@media (max-width: 768px)`  | `@include screen-lt-md` | Мобильные + планшеты |
| `@media (max-width: 1023px)` | `@include screen-lt-md` | До десктопа          |
| `@media (min-width: 600px)`  | `@include screen-gt-xs` | От планшетов         |
| `@media (min-width: 1024px)` | `@include screen-gt-sm` | От десктопа          |
| `@media (min-width: 1440px)` | `@include screen-gt-md` | Большие экраны       |

### Автоматическая замена (regex)

В VS Code используйте поиск и замену с регулярными выражениями:

**Найти:**

```regex
@media \(max-width: 768px\)
```

**Заменить на:**

```scss
@include screen-lt-md;
```

## Пошаговая миграция

### 1. Включить body classes (уже сделано)

```typescript
// quasar.config.ts
framework: {
  config: {
    screen: {
      bodyClasses: true
    }
  }
}
```

### 2. Импортировать миксины

```scss
// В начале SCSS файла
@import 'src/css/breakpoints';
```

### 3. Заменить @media queries

```scss
// Было
@media (max-width: 768px) {
  .my-element {
    padding: 8px;
  }
}

// Стало
@include screen-lt-md {
  .my-element {
    padding: 8px;
  }
}
```

## Преимущества новой системы

- ✅ **Производительность** - CSS применяется мгновенно при изменении размера
- ✅ **Синхронизация** - Одинаковые breakpoints в CSS и JavaScript
- ✅ **Читаемость** - Понятные названия вместо пикселей
- ✅ **Консистентность** - Единая система во всем проекте

## Проверка миграции

После миграции проверьте:

1. **Визуально** - откройте страницы в разных размерах экрана
2. **DevTools** - убедитесь что стили применяются корректно
3. **Body classes** - в инспекторе должны быть классы `screen--xs`, `screen--sm` и т.д.

## Отладка

Если стили не применяются:

1. Проверьте что body classes включены в конфигурации
2. Убедитесь что миксины импортированы
3. Проверьте что на body есть соответствующие классы
4. Используйте временный индикатор breakpoint для отладки
