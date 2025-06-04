// Regular expressions for form validation
export const REGEXP = {
  REQUIRED: /^.+$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/,
  DATE: /^\d{2}.\d{2}.\d{4}$/,
  SINGLE_WORD: /^[A-Za-zА-Яа-яЁё]+$/,
  MULTIPLE_WORDS: /^[A-Za-zА-Яа-яЁё\s]+$/,
  HAS_UPPERCASE: /[A-ZА-ЯЁ]/,
  HAS_DIGIT: /[0-9]/,
  PHONE: /^(\+7|8)[- ]?(\(?\d{3}\)?)[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2})$/,
}
