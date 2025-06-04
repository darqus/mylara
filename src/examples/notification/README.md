# Примеры использования NotificationService

Сервис уведомлений (`notificationService`) предоставляет удобный интерфейс для работы с системой уведомлений Quasar.

## Основное использование

```typescript
import { notificationService } from 'src/services'

// Простые уведомления
notificationService.success('Операция успешно выполнена')
notificationService.error('Произошла ошибка')
notificationService.warning('Внимание!')
notificationService.info('Полезная информация')
```

## Расширенные опции

```typescript
// С пользовательскими настройками
notificationService.success('Файл сохранен', {
  icon: 'save', // Иконка Material Icons
  position: 'top-right', // Позиция уведомления
  timeout: 3000, // Время отображения в миллисекундах
  closeBtn: true, // Кнопка закрытия
})

// С HTML разметкой
notificationService.info('Посетите <a href="#">нашу страницу</a>', {
  html: true, // Разрешить HTML в сообщении
})
```

## Позиционирование

Доступные позиции:

- `top-left`
- `top-right`
- `top`
- `bottom-left`
- `bottom-right`
- `bottom`
- `center` (в центре экрана)

```typescript
notificationService.success('Сообщение вверху', {
  position: 'top',
})

notificationService.error('Сообщение внизу справа', {
  position: 'bottom-right',
})
```

## Уведомления с действиями

```typescript
notificationService.warning('Необходимо подтверждение', {
  actions: [
    {
      label: 'Подтвердить',
      color: 'white',
      handler: () => {
        // Код обработки подтверждения
        console.log('Действие подтверждено')
      },
    },
    {
      label: 'Отмена',
      color: 'white',
    },
  ],
  timeout: 0, // Не скрывать автоматически
})
```

## Использование в обработчиках API

```typescript
// При отправке формы
async function submitForm() {
  try {
    // Показываем уведомление о начале процесса
    notificationService.info('Отправка данных...')

    // Выполняем запрос
    const response = await api.post('/endpoint', formData)

    // При успехе
    notificationService.success('Данные успешно отправлены')

    return response.data
  } catch (error) {
    // При ошибке
    notificationService.error(
      `Ошибка: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`,
    )
    throw error
  }
}
```

## Уведомления с прогресс-баром

```typescript
// Создание уведомления с индикатором прогресса
notificationService.info('Загрузка файлов...', {
  progress: true, // Показать прогресс-бар
  timeout: 0, // Не скрывать автоматически
})
```

## Многострочные уведомления

```typescript
notificationService.info('Заголовок уведомления', {
  caption: 'Дополнительное описание или подробности',
  multiLine: true, // Многострочный режим
})
```

## Использование событий

```typescript
notificationService.info('Нажмите на уведомление', {
  onClick: () => {
    console.log('Уведомление было нажато')
    // Код для обработки нажатия
  },
})
```

## Дополнительные возможности

- Изменение цвета: `color: 'primary'`
- Добавление классов CSS: `classes: 'custom-notification'`
- Установка тени: `shadowless: true` (отключение тени)
- Звуковое сопровождение: требуется дополнительная реализация

Полный список параметров доступен в [официальной документации Quasar Notify](https://quasar.dev/quasar-plugins/notify#notify-api).
