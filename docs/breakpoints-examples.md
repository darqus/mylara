# Примеры использования системы Breakpoints

## Практические примеры миграции

### 1. Адаптивная таблица

**Было:**

```scss
.products-table {
  @media (max-width: 768px) {
    :deep(.q-td),
    :deep(.q-th) {
      padding: 8px 12px;
      font-size: 13px;
    }
  }
}
```

**Стало:**

```scss
.products-table {
  @include screen-lt-md {
    :deep(.q-td),
    :deep(.q-th) {
      padding: 8px 12px;
      font-size: 13px;
    }
  }
}
```

### 2. Адаптивный лендинг

**Было:**

```scss
.landing-slogan {
  &.reverse {
    flex-direction: row-reverse;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    .text-h4 {
      font-size: 1.5rem;
    }
  }
}
```

**Стало:**

```scss
.landing-slogan {
  &.reverse {
    flex-direction: row-reverse;
    @include screen-lt-md {
      flex-direction: column;
    }
  }

  @include screen-lt-md {
    .text-h4 {
      font-size: 1.5rem;
    }
  }
}
```

### 3. Сложная адаптивность

```scss
.responsive-component {
  // Базовые стили для всех размеров
  padding: 16px;

  // Только мобильные (xs: 0-599px)
  @include screen-xs {
    padding: 8px;
    font-size: 14px;
  }

  // Только планшеты (sm: 600-1023px)
  @include screen-sm {
    padding: 12px;
    font-size: 16px;
  }

  // Десктоп и больше (md+: 1024px+)
  @include screen-gt-sm {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  // Большие экраны (lg+: 1440px+)
  @include screen-gt-md {
    grid-template-columns: repeat(4, 1fr);
    padding: 24px;
  }
}
```

### 4. Навигация

```scss
.main-navigation {
  // Мобильная навигация (xs + sm)
  @include screen-lt-md {
    .nav-menu {
      position: fixed;
      top: 0;
      left: -100%;
      width: 80%;
      height: 100vh;
      transition: left 0.3s ease;

      &.open {
        left: 0;
      }
    }

    .nav-toggle {
      display: block;
    }
  }

  // Десктопная навигация (md+)
  @include screen-gt-sm {
    .nav-menu {
      position: static;
      display: flex;
      width: auto;
      height: auto;
    }

    .nav-toggle {
      display: none;
    }
  }
}
```

### 5. Карточки товаров

```scss
.product-grid {
  display: grid;
  gap: 16px;

  // Мобильные: 1 колонка
  @include screen-xs {
    grid-template-columns: 1fr;
  }

  // Планшеты: 2 колонки
  @include screen-sm {
    grid-template-columns: repeat(2, 1fr);
  }

  // Десктоп: 3 колонки
  @include screen-md {
    grid-template-columns: repeat(3, 1fr);
  }

  // Большие экраны: 4 колонки
  @include screen-gt-md {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
}
```

## Комбинирование с Quasar классами

Можно комбинировать с встроенными responsive классами Quasar:

```vue
<template>
  <!-- Используем Quasar классы для быстрой разметки -->
  <div class="row q-gutter-md">
    <div class="col-xs-12 col-sm-6 col-md-4">
      <!-- Контент -->
    </div>
  </div>

  <!-- Кастомные стили через SCSS миксины -->
  <div class="custom-component">
    <!-- Контент -->
  </div>
</template>

<style lang="scss" scoped>
.custom-component {
  @include screen-lt-md {
    // Кастомные стили для мобильных
  }
}
</style>
```

## Отладка

Для отладки можно временно добавить индикатор текущего breakpoint:

```scss
body::before {
  content: 'xs';
  position: fixed;
  top: 0;
  right: 0;
  background: red;
  color: white;
  padding: 4px 8px;
  z-index: 9999;

  @include screen-sm {
    content: 'sm';
    background: orange;
  }
  @include screen-md {
    content: 'md';
    background: green;
  }
  @include screen-lg {
    content: 'lg';
    background: blue;
  }
  @include screen-xl {
    content: 'xl';
    background: purple;
  }
}
```
