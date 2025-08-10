# Система Breakpoints Quasar

Проект поддерживает два подхода к работе с breakpoints:

## 🆕 Новый подход (рекомендуется)

Использует body classes Quasar вместо CSS media queries.

### Преимущества

- ✅ Более производительно чем CSS media queries
- ✅ Автоматическая синхронизация с JavaScript Screen Plugin
- ✅ Единая система breakpoints для CSS и JS
- ✅ Мгновенное применение стилей при изменении размера

## 🔄 Старый подход (совместимость)

Использует традиционные миксины с body classes под капотом.

### Преимущества

- ✅ Обратная совместимость с существующим кодом
- ✅ Привычный синтаксис для разработчиков
- ✅ Автоматическая миграция на body classes

## Breakpoints Quasar

```scss
// xs: 0px - 599.99px (мобильные)
// sm: 600px - 1023.99px (планшеты)
// md: 1024px - 1439.99px (десктоп)
// lg: 1440px - 1919.99px (большие экраны)
// xl: 1920px+ (очень большие экраны)
```

## Использование

### 🆕 Новый подход (рекомендуется)

#### Точные breakpoints

```scss
.my-component {
  // Только для мобильных (xs)
  @include screen-xs {
    font-size: 14px;
  }

  // Только для планшетов (sm)
  @include screen-sm {
    font-size: 16px;
  }

  // Только для десктопа (md)
  @include screen-md {
    font-size: 18px;
  }
}
```

### 🔄 Старый подход (совместимость)

#### Традиционные миксины

```scss
.my-component {
  // Мобильные и выше
  @include breakpoint(xs) {
    font-size: 14px;
  }

  // Планшеты и выше
  @include breakpoint(sm) {
    font-size: 16px;
  }

  // Десктоп и выше
  @include breakpoint(md) {
    font-size: 18px;
  }
}
```

### Диапазоны (меньше чем)

```scss
.my-component {
  // Меньше чем md (xs + sm)
  @include screen-lt-md {
    padding: 8px;
  }

  // Меньше чем lg (xs + sm + md)
  @include screen-lt-lg {
    margin: 16px;
  }
}
```

### Диапазоны (больше чем)

```scss
.my-component {
  // Больше чем xs (sm + md + lg + xl)
  @include screen-gt-xs {
    display: flex;
  }

  // Больше чем sm (md + lg + xl)
  @include screen-gt-sm {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Миграция с @media queries

### 🆕 Новый подход (рекомендуется)

**Было:**

```scss
@media (max-width: 768px) {
  .my-element {
    padding: 8px;
  }
}
```

**Стало:**

```scss
@include screen-lt-md {
  .my-element {
    padding: 8px;
  }
}
```

### 🔄 Старый подход (совместимость)

**Остается без изменений:**

```scss
@include breakpoint(sm) {
  .my-element {
    padding: 8px;
  }
}
```

**Или с переменными:**

```scss
.container {
  max-width: map-get($breakpoints, md);
}
```

## Доступные миксины

### 🆕 Новые миксины (рекомендуется)

#### Точные размеры

- `@include screen-xs` - только мобильные (0-599px)
- `@include screen-sm` - только планшеты (600-1023px)
- `@include screen-md` - только десктоп (1024-1439px)
- `@include screen-lg` - только большие экраны (1440-1919px)
- `@include screen-xl` - только очень большие (1920px+)

#### Диапазоны "меньше чем"

- `@include screen-lt-sm` - только xs
- `@include screen-lt-md` - xs + sm (до 1024px)
- `@include screen-lt-lg` - xs + sm + md (до 1440px)
- `@include screen-lt-xl` - xs + sm + md + lg (до 1920px)

#### Диапазоны "больше чем"

- `@include screen-gt-xs` - sm + md + lg + xl (от 600px)
- `@include screen-gt-sm` - md + lg + xl (от 1024px)
- `@include screen-gt-md` - lg + xl (от 1440px)
- `@include screen-gt-lg` - только xl (от 1920px)

### 🔄 Старые миксины (совместимость)

#### Mobile-first подход

- `@include breakpoint(xs)` - xs и выше (от 0px)
- `@include breakpoint(sm)` - sm и выше (от 600px)
- `@include breakpoint(md)` - md и выше (от 1024px)
- `@include breakpoint(lg)` - lg и выше (от 1440px)
- `@include breakpoint(xl)` - xl и выше (от 1920px)

#### Переменные

- `$breakpoints` - карта с значениями breakpoints
- `$breakpoint-remainder` - остаток для точных вычислений

## Настройка

Система автоматически включена в `quasar.config.ts`:

```typescript
framework: {
  config: {
    screen: {
      bodyClasses: true // Включены body classes для breakpoints
    }
  }
}
```

## Как это работает

Quasar автоматически добавляет классы к `<body>`:

- `screen--xs` - для мобильных
- `screen--sm` - для планшетов
- `screen--md` - для десктопа
- `screen--lg` - для больших экранов
- `screen--xl` - для очень больших экранов

Наши миксины используют эти классы вместо media queries.

## 🎯 Какой подход выбрать?

### Используйте новые миксины для:

- ✅ Новых компонентов
- ✅ Когда нужна максимальная производительность
- ✅ Точного контроля над размерами экрана
- ✅ Синхронизации с JavaScript

### Оставляйте старые миксины для:

- 🔄 Существующего кода (не требует изменений)
- 🔄 Когда нужен mobile-first подход
- 🔄 Работы с переменными и вычислениями

### Пример комбинирования:

```scss
.responsive-component {
  // Новый подход для точного контроля
  @include screen-xs {
    padding: 8px;
  }

  // Старый подход для mobile-first
  @include breakpoint(md) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
```
