/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { REGEXP } from './validation-patterns'

/**
 * Rule to check if a field is required
 * @param message Custom error message
 * @returns Validation rule function
 */
export const requiredRule =
  (message = 'Обязательно для заполнения') =>
  (val: unknown): boolean | string =>
    (val !== undefined && val !== null && val !== '') || message

/**
 * Rule to validate email format
 * @param message Custom error message
 * @returns Validation rule function
 */
export const emailRule =
  (message = 'Введите корректный email адрес') =>
  (val: string): boolean | string =>
    !val || REGEXP.EMAIL.test(val) || message

/**
 * Rule to validate minimum string length
 * @param length Minimum length
 * @param message Custom error message
 * @returns Validation rule function
 */
export const minLengthRule =
  (length: number, message?: string) =>
  (val: string): boolean | string =>
    !val ||
    val.length >= length ||
    message ||
    `Минимальная длина - ${length} символов`

/**
 * Rule to validate maximum string length
 * @param length Maximum length
 * @param message Custom error message
 * @returns Validation rule function
 */
export const maxLengthRule =
  (length: number, message?: string) =>
  (val: string): boolean | string =>
    !val ||
    val.length <= length ||
    message ||
    `Максимальная длина - ${length} символов`

/**
 * Rule to validate minimum numeric value
 * @param min Minimum value
 * @param message Custom error message
 * @returns Validation rule function
 */
export const minRule =
  (min: number, message?: string) =>
  (val: number): boolean | string =>
    val === null ||
    val === undefined ||
    val >= min ||
    message ||
    `Минимальное значение - ${min}`

/**
 * Rule to validate maximum numeric value
 * @param max Maximum value
 * @param message Custom error message
 * @returns Validation rule function
 */
export const maxRule =
  (max: number, message?: string) =>
  (val: number): boolean | string =>
    val === null ||
    val === undefined ||
    val <= max ||
    message ||
    `Максимальное значение - ${max}`

/**
 * Rule to validate date format
 * @param message Custom error message
 * @returns Validation rule function
 */
export const dateFormatRule =
  (message = 'Введите дату в формате ДД.ММ.ГГГГ') =>
  (val: string): boolean | string =>
    !val || REGEXP.DATE.test(val) || message

/**
 * Rule to validate name/surname (letters only)
 * @param message Custom error message
 * @returns Validation rule function
 */
export const wordRule =
  (message = 'Допустимы только буквы') =>
  (val: string): boolean | string =>
    !val || REGEXP.SINGLE_WORD.test(val) || message

/**
 * Rule to validate that field contains only a single word (no spaces)
 * @param message Custom error message
 * @returns Validation rule function
 */
export const singleWordRule =
  (message = 'Должно содержать только одно слово (без пробелов)') =>
  (val: string): boolean | string =>
    !val || REGEXP.SINGLE_WORD.test(val) || message

/**
 * Rule to validate multiple words (letters and spaces allowed)
 * @param message Custom error message
 * @returns Validation rule function
 */
export const multipleWordsRule =
  (message = 'Допустимы буквы и пробелы') =>
  (val: string): boolean | string =>
    !val || REGEXP.MULTIPLE_WORDS.test(val) || message

/**
 * Rule to validate that a date is valid (exists in calendar)
 * @param message Custom error message
 * @returns Validation rule function
 */
export const validDateRule =
  (message = 'Введите корректную дату') =>
  (val: string): boolean | string => {
    if (!val) {
      return true
    }

    // Check format first with regex
    if (!REGEXP.DATE.test(val)) {
      return message
    }

    // Parse date parts
    const parts = val.split('.')
    const day = parseInt(parts[0] || '', 10)
    const month = parseInt(parts[1] || '', 10) - 1 // JS months are 0-based
    const year = parseInt(parts[2] || '', 10)

    // Create date object and verify parts match (handles invalid dates like Feb 31)
    const date = new Date(year, month, day)

    return (
      (date.getFullYear() === year &&
        date.getMonth() === month &&
        date.getDate() === day) ||
      message
    )
  }

/**
 * Rule to validate that password contains at least one uppercase letter
 * @param message Custom error message
 * @returns Validation rule function
 */
export const hasUppercaseRule =
  (message = 'Пароль должен содержать хотя бы одну заглавную букву') =>
  (val: string): boolean | string =>
    !val || REGEXP.HAS_UPPERCASE.test(val) || message

/**
 * Rule to validate that password contains at least one digit
 * @param message Custom error message
 * @returns Validation rule function
 */
export const hasDigitRule =
  (message = 'Пароль должен содержать хотя бы одну цифру') =>
  (val: string): boolean | string =>
    !val || REGEXP.HAS_DIGIT.test(val) || message

/**
 * Rule to validate phone number format
 * @param message Custom error message
 * @returns Validation rule function
 */
export const phoneRule =
  (message = 'Введите корректный номер телефона') =>
  (val: string): boolean | string =>
    !val || REGEXP.PHONE.test(val) || message

/**
 * Rule to validate birth date within age range
 * @param minAge Minimum age allowed (e.g. 18)
 * @param maxAge Maximum age allowed (e.g. 100)
 * @param message Custom error message
 * @returns Validation rule function
 */
export const birthDateAgeRangeRule =
  (minAge: number, maxAge: number, message?: string) =>
  (val: string): boolean | string => {
    if (!val) {
      return true
    }

    // Check format first with regex
    if (!REGEXP.DATE.test(val)) {
      return message || 'Введите дату в формате ДД.ММ.ГГГГ'
    }

    // Parse date parts
    const parts = val.split('.')
    const day = parseInt(parts[0] || '', 10)
    const month = parseInt(parts[1] || '', 10) - 1 // JS months are 0-based
    const year = parseInt(parts[2] || '', 10)

    // Create date object for birth date
    const birthDate = new Date(year, month, day)

    // Only proceed if date is valid
    if (
      !(
        birthDate.getFullYear() === year &&
        birthDate.getMonth() === month &&
        birthDate.getDate() === day
      )
    ) {
      return message || 'Введите корректную дату'
    }

    // Calculate current date and age boundaries
    const currentDate = new Date()

    // Calculate minimum allowed birth date (for maximum age)
    const minBirthDate = new Date(currentDate)

    minBirthDate.setFullYear(currentDate.getFullYear() - maxAge)

    // Calculate maximum allowed birth date (for minimum age)
    const maxBirthDate = new Date(currentDate)

    maxBirthDate.setFullYear(currentDate.getFullYear() - minAge)

    // Check if birth date is within the allowed range
    if (birthDate < minBirthDate) {
      return message || `Возраст не может быть больше ${maxAge} лет`
    }

    if (birthDate > maxBirthDate) {
      return message || `Возраст не может быть меньше ${minAge} лет`
    }

    return true
  }
