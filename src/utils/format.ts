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
