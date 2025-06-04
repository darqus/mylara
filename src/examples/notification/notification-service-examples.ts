/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Примеры использования NotificationService
 *
 * Этот файл содержит примеры использования сервиса уведомлений
 * и не предназначен для импорта в реальном приложении
 */
import { notificationService, } from 'src/services'

/**
 * Пример 1: Базовое использование
 */
const basicUsageExamples = (): void => {
  // Простые уведомления без дополнительных опций
  notificationService.success('Операция успешно выполнена')
  notificationService.error('Произошла ошибка при обработке запроса')
  notificationService.warning('Проверьте введенные данные')
  notificationService.info('Новая версия доступна')
}

/**
 * Пример 2: Настройка уведомлений с дополнительными опциями
 */
const advancedUsageExamples = (): void => {
  // С пользовательскими иконками
  notificationService.success('Данные сохранены', {
    icon: 'save',
  })

  // С позиционированием
  notificationService.error('Ошибка авторизации', {
    position: 'top',
  })

  // С таймаутом (время в мс)
  notificationService.warning('Сессия истекает через 5 минут', {
    timeout: 10000, // 10 секунд
  })

  // С кнопкой закрытия
  notificationService.info('Обновление системы', {
    closeBtn: true,
  })

  // С действием при клике
  notificationService.info('Щелкните для просмотра деталей' /* {
    onClick: () => {
      console.error('Уведомление было нажато')

      // Здесь может быть код для открытия модального окна или перехода на новую страницу
    },
  } */)
}

/**
 * Пример 3: Создание многострочных уведомлений
 */
const multilineNotifications = (): void => {
  notificationService.error('Ошибка при загрузке файла.\nПроверьте формат файла и повторите попытку.', {
    html: true,
  })

  // С HTML форматированием
  notificationService.info(
    'Вы можете <b>форматировать</b> текст с <i>HTML</i> тегами.',
    {
      html: true,
    }
  )
}

/**
 * Пример 4: Уведомления с действиями
 */
const notificationsWithActions = (): void => {
  notificationService.warning('Необходимо обновить систему', {
    actions: [
      {
        label: 'Обновить',
        color: 'white',
        handler: () => {
          console.error('Запущен процесс обновления')

          // Код для запуска обновления
        },
      },
      {
        label: 'Отменить',
        color: 'white',
      },
    ],
  })

  // Пример с множественными кнопками
  notificationService.info('Напоминание о встрече через 15 минут', {
    actions: [
      {
        label: 'Подтвердить',
        color: 'white',
        handler: () => {
          console.error('Встреча подтверждена')
        },
      },
      {
        label: 'Отложить',
        color: 'white',
        handler: () => {
          console.error('Встреча отложена')
          notificationService.info('Напоминание отложено на 5 минут')
        },
      },
      {
        label: 'Отменить',
        color: 'white',
        handler: () => {
          console.error('Встреча отменена')
        },
      },
    ],
    timeout: 0, // Уведомление не будет скрываться автоматически
  })
}

/**
 * Пример 5: Интеграция с API запросами
 */
const notificationsWithApiRequests = async (): Promise<void> => {
  try {
    // Имитация API запроса
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // При успешном выполнении запроса
    notificationService.success('Данные успешно загружены', {
      position: 'bottom-right',
      timeout: 2000,
    })
  } catch (error) {
    // При ошибке
    notificationService.error(`Ошибка при загрузке данных: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`, {
      position: 'bottom-right',
      timeout: 4000,
      closeBtn: true,
    })
  }
}

/**
 * Пример 6: Уведомления с прогресс-баром
 */
const notificationsWithProgress = (): void => {  // Создание уведомления с прогресс-баром
  notificationService.info('Загрузка файла...', {
    progress: true, // Включить прогресс-бар
    timeout: 0, // Без автоматического закрытия
  })

  // В реальном приложении здесь был бы код обновления прогресса
}

// Эти функции не вызываются в данном примере,
// они предназначены для демонстрации использования
