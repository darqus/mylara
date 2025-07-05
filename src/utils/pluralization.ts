/**
 * Утилиты для склонения слов по числам
 */

/**
 * Возвращает правильную форму слова "запись" в зависимости от числа
 * @param count - количество записей
 * @returns правильно склоненная форма слова
 */
export function pluralizeRecords(count: number): string {
  const lastDigit = count % 10
  const lastTwoDigits = count % 100

  // Особые случаи для чисел от 11 до 14
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return 'записей'
  }

  // Склонение по последней цифре
  if (lastDigit === 1) {
    return 'запись'
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return 'записи'
  } else {
    return 'записей'
  }
}

/**
 * Возвращает строку с числом и правильно склоненным словом "запись"
 * @param count - количество записей
 * @returns строка вида "1 запись", "2 записи", "5 записей"
 */
export function formatRecordsCount(count: number): string {
  return `${count} ${pluralizeRecords(count)}`
}

/**
 * Универсальная функция для склонения любых слов
 * @param count - количество
 * @param forms - массив форм [единственное число, 2-4, множественное число]
 * @returns правильно склоненная форма
 *
 * @example
 * pluralize(1, ['файл', 'файла', 'файлов']) // 'файл'
 * pluralize(2, ['файл', 'файла', 'файлов']) // 'файла'
 * pluralize(5, ['файл', 'файла', 'файлов']) // 'файлов'
 */
export function pluralize(count: number, forms: [ string, string, string, ]): string {
  const lastDigit = count % 10
  const lastTwoDigits = count % 100

  // Особые случаи для чисел от 11 до 14
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return forms[2]
  }

  // Склонение по последней цифре
  if (lastDigit === 1) {
    return forms[0]
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return forms[1]
  } else {
    return forms[2]
  }
}

/**
 * Возвращает строку с числом и правильно склоненным словом
 * @param count - количество
 * @param forms - массив форм [единственное число, 2-4, множественное число]
 * @returns строка с числом и склоненным словом
 *
 * @example
 * formatCount(1, ['файл', 'файла', 'файлов']) // '1 файл'
 * formatCount(2, ['файл', 'файла', 'файлов']) // '2 файла'
 * formatCount(5, ['файл', 'файла', 'файлов']) // '5 файлов'
 */
export function formatCount(count: number, forms: [ string, string, string, ]): string {
  return `${count} ${pluralize(count, forms)}`
}
