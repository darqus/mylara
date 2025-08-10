# Система Breakpoints Quasar

Эта система заменяет обычные CSS `@media` queries на более эффективную систему body classes от Quasar.

## Преимущества

- ✅ Более производительно чем CSS media queries
- ✅ Автоматическая синхронизация с JavaScript Screen Plugin
- ✅ Единая система breakpoints для CSS и JS
- ✅ Поддержка всех стандартных breakpoints Quasar

## Breakpoints Quasar

```scss
// xs: 0px - 599.99px (мобильные)
// sm: 600px - 1023.99px (планшеты)  
// md: 1024px - 1439.99px (десктоп)
// lg: 1440px - 1919.99px (большие экраны)
// xl: 1920px+ (очень большие экраны)
```

## Использование

### Точные breakpoints

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

### Было:
```scss
@media (max-width: 768px) {
  .my-element {
    padding: 8px;
  }
}
```

### Стало:
```scss
@include screen-lt-md {
  .my-element {
    padding: 8px;
  }
}
```

## Доступные миксины

### Точные размеры
- `@include screen-xs` - только мобильные
- `@include screen-sm` - только планшеты
- `@include screen-md` - только десктоп
- `@include screen-lg` - только большие экраны
- `@include screen-xl` - только очень большие экраны

### Диапазоны "меньше чем"
- `@include screen-lt-sm` - только xs
- `@include screen-lt-md` - xs + sm
- `@include screen-lt-lg` - xs + sm + md
- `@include screen-lt-xl` - xs + sm + md + lg

### Диапазоны "больше чем"
- `@include screen-gt-xs` - sm + md + lg + xl
- `@include screen-gt-sm` - md + lg + xl
- `@include screen-gt-md` - lg + xl
- `@include screen-gt-lg` - только xl

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