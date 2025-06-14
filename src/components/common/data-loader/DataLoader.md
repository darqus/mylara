# DataLoader

Компонент `DataLoader` предназначен для управления различными состояниями загрузки данных в приложении. Он обрабатывает три основных состояния: загрузка, ошибка и отображение данных (включая пустое состояние).

## Импорт

```vue
<script setup>
import DataLoader from 'src/components/common/DataLoader.vue'
</script>
```

## Props

| Название    | Тип     | По умолчанию                           | Описание                    |
| ----------- | ------- | -------------------------------------- | --------------------------- |
| loading     | Boolean | false                                  | Состояние загрузки данных   |
| error       | Boolean | false                                  | Состояние ошибки            |
| isEmpty     | Boolean | false                                  | Флаг отсутствия данных      |
| loadingText | String  | 'Загрузка данных...'                   | Текст при загрузке          |
| errorText   | String  | 'Произошла ошибка при загрузке данных' | Текст при ошибке            |
| emptyText   | String  | 'Нет доступных данных'                 | Текст при отсутствии данных |

## События

| Название | Описание                                            |
| -------- | --------------------------------------------------- |
| retry    | Вызывается при нажатии на кнопку повторной загрузки |

## Слоты

| Название | Описание                                 |
| -------- | ---------------------------------------- |
| loading  | Кастомный контент для состояния загрузки |
| error    | Кастомный контент для состояния ошибки   |
| content  | Основной слот для отображения данных     |
| empty    | Кастомный контент для пустого состояния  |

## Примеры использования

### Базовое использование

```html
<template>
  <DataLoader
    :loading="isLoading"
    :error="hasError"
    :isEmpty="!data.length"
    @retry="fetchData"
  >
    <template #content>
      <div
        v-for="item in data"
        :key="item.id"
      >
        {{ item.name }}
      </div>
    </template>
  </DataLoader>
</template>

<script setup>
  import { ref } from 'vue'
  import DataLoader from 'src/components/common/DataLoader.vue'

  const isLoading = ref(false)
  const hasError = ref(false)
  const data = ref([])

  const fetchData = async () => {
    try {
      isLoading.value = true
      hasError.value = false
      const response = await api.getData()
      data.value = response.data
    } catch (error) {
      hasError.value = true
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  fetchData()
</script>
```

### Кастомизация слотов

```html
<template>
  <DataLoader
    :loading="isLoading"
    :error="hasError"
    :isEmpty="!data.length"
    @retry="fetchData"
  >
    <!-- Кастомный лоадер -->
    <template #loading>
      <q-spinner-gears
        color="secondary"
        size="50px"
      />
      <div class="q-mt-sm text-secondary">Получаем данные...</div>
    </template>

    <!-- Кастомная ошибка -->
    <template #error>
      <div class="text-negative q-py-md">
        <q-icon
          name="warning"
          size="2rem"
        />
        <div>Не удалось загрузить информацию</div>
        <q-btn
          label="Повторить"
          color="primary"
          @click="fetchData"
        />
      </div>
    </template>

    <!-- Кастомное пустое состояние -->
    <template #empty>
      <div class="q-pa-lg text-center">
        <q-icon
          name="search_off"
          size="3rem"
          color="grey"
        />
        <div class="text-h6 q-mt-md">По вашему запросу ничего не найдено</div>
      </div>
    </template>

    <!-- Основной контент -->
    <template #content>
      <div class="row q-col-gutter-md">
        <div
          v-for="item in data"
          :key="item.id"
          class="col-12 col-md-6"
        >
          <!-- Контент здесь -->
        </div>
      </div>
    </template>
  </DataLoader>
</template>
```

## Принцип работы компонента

1. Если `loading = true` - отображается индикатор загрузки
2. Если `loading = false` и `error = true` - отображается сообщение об ошибке
3. Если `loading = false`, `error = false` и `isEmpty = true` - отображается сообщение о пустых данных
4. Если `loading = false`, `error = false` и `isEmpty = false` - отображается основной контент

## Интеграция с API

```html
<template>
  <DataLoader
    :loading="posts.isLoading"
    :error="posts.isError"
    :isEmpty="!posts.data?.length"
    @retry="posts.refetch"
  >
    <template #content>
      <PostsList :posts="posts.data" />
    </template>
  </DataLoader>
</template>

<script setup>
  import { useQuery } from 'some-query-library'
  import DataLoader from '@/components/common/DataLoader.vue'
  import PostsList from '@/components/blogs/PostsList.vue'

  const posts = useQuery({
    queryKey: ['posts'],
    queryFn: () => api.getPosts(),
  })
</script>
```

## Логика работы компонента

Если указан fetchData, компонент автоматически загружает данные при монтировании

Если loading = true или идет внутренняя загрузка - отображается индикатор загрузки

Если загрузка завершена и есть ошибка - отображается сообщение об ошибке

Если загрузка завершена, ошибок нет, но данные пусты - отображается сообщение о пустых данных

В остальных случаях отображается основной контент

## Рекомендации по использованию

Для простых случаев используйте автоматическую загрузку данных через fetchData и dataKey

Для сложных сценариев управляйте состоянием загрузки, ошибки и пустых данных на уровне компонента-родителя

Используйте слот content с деструктуризацией { data } для доступа к загруженным данным

Обрабатывайте событие data-loaded для выполнения действий после загрузки данных
