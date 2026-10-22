import type { CollectionConfig, FormField } from '@/types/admin'
import { htmlToText, stringifyValue, truncate } from '@/utils/format'

/**
 * Текстовое представление ячейки: любые значения приводятся к строке,
 * HTML вычищается, длинные строки обрезаются для читаемости таблицы.
 *
 * @param value - Сырое значение поля документа
 * @param maxLength - Максимальная длина перед добавлением многоточия
 */
export function getCellText(value: unknown, maxLength = 80): string {
  return truncate(htmlToText(value).trim(), maxLength)
}

/**
 * Тип поля из конфига коллекции (например, `base64-image`).
 *
 * @returns Тип поля или `undefined`, если поля нет в конфиге
 */
export function getFieldType(
  config: CollectionConfig | undefined,
  fieldName: string
): FormField['type'] | undefined {
  return config?.fields.find((field) => field.name === fieldName)?.type
}

/**
 * Подпись значения select-поля (например, `text-left` → «Текст слева»).
 * Варианты берутся из конфига поля, без хардкода в шаблоне.
 *
 * @param config - Конфигурация текущей коллекции
 * @param value - Значение поля документа
 */
export function getLayoutLabel(
  config: CollectionConfig | undefined,
  value: unknown
): string {
  const raw = stringifyValue(value)

  if (!raw) {
    return 'Не указано'
  }

  for (const field of config?.fields ?? []) {
    const option = field.options?.find((item) => String(item.value) === raw)

    if (option) {
      return option.label
    }
  }

  return raw
}
