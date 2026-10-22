/**
 * Declines depending on the number
 * @param {number} number
 * @param {string[]} titles Strings for decline
 * @param {boolean} [full=false] If true - returns number + string
 * @return {string}
 */
export const incline = (
  number: number,
  titles: string[],
  full: boolean = false
): string => {
  const cases = [2, 0, 1, 1, 1, 2]

  if (number < 0) {
    throw new Error('Number must be non-negative')
  }

  const result =
    titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : (cases[number % 10 < 5 ? number % 10 : 5] ?? 2)
    ] ?? ''

  return full ? `${number} ${result}` : result
}

/* Массив склоняемых слов
первый элемент в массиве склоняется, если слово имеет количество 1
второй элемент в массиве склоняется, если слово имеет количество 2
третий элемент в массиве склоняется, если слово имеет количество 5 */
export const INCLINE = {
  YEAR: ['год', 'года', 'лет'],
  LIST: ['лист', 'листа', 'листов'],
  LESSON: ['урок', 'урока', 'уроков'],
  MINUTE: ['минута', 'минуты', 'минут'],
  DAY: ['день', 'дня', 'дней'],
  MONTH: ['месяц', 'месяца', 'месяцев'],
  HOUR: ['час', 'часа', 'часов'],
  TIMES: ['раз', 'раза', 'раз'],
  WEEK: ['неделя', 'недели', 'недель'],
  CARTOON: ['мультфильм', 'мультфильма', 'мультфильмов'],
  GAME: ['игра', 'игры', 'игр'],
  QUESTION: ['вопрос', 'вопроса', 'вопросов'],
  PART: ['части', 'частей', 'частей'],
}

// Example usage
// console.log(incline(1, ['стол', 'стола', 'столов'])) // Output: стол
// console.log(incline(2, ['стол', 'стола', 'столов'])) // Output: стола
// console.log(incline(5, ['стол', 'стола', 'столов'])) // Output: столов

/**
 * Converts the first character of a string to uppercase.
 * @param {string} input - The string to convert.
 * @returns {string} A new string with the first character converted to uppercase.
 */
export const toCapitalCase = (input: string): string =>
  input.charAt(0).toUpperCase() + input.slice(1)

/**
 * Formats a number with spaces according to Russian locale conventions.
 *
 * This function uses the Intl.NumberFormat API to format numbers with space
 * separators for thousands, in accordance with Russian formatting standards.
 * Decimal places are removed from the output.
 *
 * @param number - The number to format
 * @returns A string representation of the number with proper spacing between digit groups
 *
 * @example
 * // Returns "1 234 567"
 * formatNumberWithSpaces(1234567);
 */
export const formatNumberWithSpaces = (number: number): string => {
  const formatter = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    useGrouping: true,
    style: 'decimal',
  })

  return formatter.format(number)
}

/**
 * Formats a number as a Russian Ruble currency string.
 *
 * Uses the Russian locale format with no decimal places.
 * Example: 1000 -> "1 000 ₽"
 *
 * @param number - The number to format as currency
 * @returns The formatted currency string in Russian Rubles
 */
export const formatNumberToCurrency = (number: number): string => {
  const formatter = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    useGrouping: true,
    style: 'currency',
    currency: 'RUB',
  })

  return formatter.format(number)
}

/**
 * Named HTML entities that JSON.stringify / innerHTML would otherwise leak as
 * raw text. Kept short on purpose: only the entities that realistically reach
 * the admin table cells.
 */
const HTML_ENTITIES: Record<string, string> = {
  '&nbsp;': ' ',
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&apos;': "'",
}

const HTML_ENTITY_PATTERN = /&(?:[a-zA-Z]+|#\d+|#x[\da-fA-F]+);/g

/**
 * Converts an arbitrary Firestore value to a display string.
 *
 * Firestore fields are untyped at runtime, so a column may hold a string, a
 * number, a boolean or a nested object. Objects/arrays are stringified.
 *
 * @param value - Raw field value
 * @returns A string representation (empty string for null/undefined)
 */
export const stringifyValue = (value: unknown): string => {
  if (value === null || value === undefined) {
    return ''
  }

  if (typeof value === 'string') {
    return value
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value)
  }

  try {
    return JSON.stringify(value)
  } catch {
    return String(value)
  }
}

/**
 * Strips HTML tags and decodes common entities into plain text.
 *
 * Deliberately avoids `document.createElement('textarea')` so the helper also
 * works in non-DOM environments (tests, SSR-safe code).
 *
 * @param input - HTML string (or any value)
 * @returns Plain text without tags or entities
 */
export const htmlToText = (input: unknown): string => {
  const raw = stringifyValue(input)

  if (!raw) {
    return ''
  }

  const withoutTags = raw.replace(/<[^>]*>/g, '')

  return withoutTags.replace(HTML_ENTITY_PATTERN, (entity) => {
    if (entity in HTML_ENTITIES) {
      return HTML_ENTITIES[entity] ?? entity
    }

    // Numeric entities: &#39; / &#x27;
    const numeric = entity.startsWith('&#x')
      ? Number.parseInt(entity.slice(3, -1), 16)
      : Number.parseInt(entity.slice(2, -1), 10)

    return Number.isNaN(numeric) ? entity : String.fromCodePoint(numeric)
  })
}

/**
 * Truncates a string to `maxLength`, appending an ellipsis when cut.
 *
 * @param input - Source string
 * @param maxLength - Maximum length before truncation
 * @returns The original string or its truncated form
 */
export const truncate = (input: string, maxLength: number): string =>
  input.length > maxLength ? `${input.substring(0, maxLength)}...` : input
