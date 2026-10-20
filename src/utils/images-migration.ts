/**
 * Утилита для миграции изображений из Firebase Storage URL в base64
 *
 * ВАЖНО: Этот файл содержит вспомогательные функции для миграции.
 * Для выполнения миграции используйте браузерную консоль:
 *
 * 1. Откройте приложение в браузере
 * 2. Откройте консоль разработчика (F12)
 * 3. Выполните: await window.imagesMigration.migrateAllImages()
 */

import { useBase64Image } from '@/composables/useBase64Image'

type CollectionItem = {
  id: string
  img?: string
  [key: string]: unknown
}

/**
 * Конвертирует URL изображения в base64
 */
export async function convertImageUrlToBase64(
  imageUrl: string,
  options?: {
    maxWidth?: number
    maxHeight?: number
    quality?: number
  }
): Promise<string | null> {
  try {
    const { fileToBase64 } = useBase64Image()

    // Загружаем изображение как Blob
    const response = await fetch(imageUrl)

    if (!response.ok) {
      console.error('Ошибка загрузки изображения:', response.statusText)

      return null
    }

    const blob = await response.blob()

    // Создаем File объект из Blob
    const file = new File([blob], 'image.jpg', { type: blob.type })

    // Конвертируем в base64 с настройками сжатия
    const result = await fileToBase64(file, {
      maxWidth: options?.maxWidth ?? 1200,
      maxHeight: options?.maxHeight ?? 800,
      quality: options?.quality ?? 0.85,
    })

    return result?.base64 ?? null
  } catch (error) {
    console.error('Ошибка конвертации изображения в base64:', error)

    return null
  }
}

/**
 * Упрощенная функция для миграции коллекции
 */
async function migrateCollection(
  collectionName: string,
  imageOptions: { maxWidth: number; maxHeight: number; quality: number }
) {
  const { firestoreService } = await import('@/services/firestore.service')

  const response =
    await firestoreService.getCollection<CollectionItem>(collectionName)

  if (response.error) {
    console.error(
      `Ошибка получения коллекции ${collectionName}:`,
      response.error
    )

    return
  }

  const { items } = response

  // biome-ignore lint/suspicious/noConsole: migration progress logging
  console.log(`Найдено ${items.length} записей в коллекции ${collectionName}`)

  for (const item of items) {
    if (
      item.img &&
      typeof item.img === 'string' &&
      item.img.startsWith('http')
    ) {
      // biome-ignore lint/suspicious/noConsole: migration progress logging
      console.log(`Миграция изображения для записи ${item.id}...`)

      const base64Image = await convertImageUrlToBase64(item.img, imageOptions)

      if (base64Image) {
        await firestoreService.updateDocument(collectionName, item.id, {
          ...item,
          img: base64Image,
        })
        // biome-ignore lint/suspicious/noConsole: migration progress logging
        console.log(`✅ Успешно обновлена запись ${item.id}`)
      } else {
        console.error(
          `❌ Не удалось конвертировать изображение для записи ${item.id}`
        )
      }
    }
  }

  // biome-ignore lint/suspicious/noConsole: migration progress logging
  console.log(`🎉 Миграция коллекции ${collectionName} завершена!`)
}

/**
 * Миграция коллекции carousel
 */
export async function migrateCarouselImages() {
  await migrateCollection('carousel', {
    maxWidth: 1200,
    maxHeight: 800,
    quality: 0.85,
  })
}

/**
 * Миграция коллекции slides
 */
export async function migrateSlidesImages() {
  await migrateCollection('slides', {
    maxWidth: 1920,
    maxHeight: 1080,
    quality: 0.9,
  })
}

/**
 * Полная миграция обеих коллекций
 */
export async function migrateAllImages() {
  // biome-ignore lint/suspicious/noConsole: migration progress logging
  console.log('🚀 Начинаем миграцию изображений в base64...')

  await migrateCarouselImages()
  await migrateSlidesImages()

  // biome-ignore lint/suspicious/noConsole: migration progress logging
  console.log('✅ Миграция всех изображений завершена!')
}

// Добавляем функции в глобальный объект для использования в консоли
if (typeof window !== 'undefined') {
  // biome-ignore lint/suspicious/noExplicitAny: expose migration helpers on window
  ;(window as any).imagesMigration = {
    migrateCarouselImages,
    migrateSlidesImages,
    migrateAllImages,
    convertImageUrlToBase64,
  }
}
