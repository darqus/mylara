import { describe, expect, it } from 'vitest'

import {
  birthDateAgeRangeRule,
  dateFormatRule,
  emailRule,
  hasDigitRule,
  hasUppercaseRule,
  maxLengthRule,
  maxRule,
  minLengthRule,
  minRule,
  multipleWordsRule,
  phoneRule,
  requiredRule,
  singleWordRule,
  validDateRule,
  wordRule,
} from './rules'

describe('Validation rules', () => {
  describe('requiredRule', () => {
    it('should return true for non-empty values', () => {
      expect(requiredRule()('test')).toBe(true)
      expect(requiredRule()(0)).toBe(true)
      expect(requiredRule()(false)).toBe(true)
      expect(requiredRule()([])).toBe(true)
      expect(requiredRule()({})).toBe(true)
    })

    it('should return error message for empty values', () => {
      expect(requiredRule()('')).toBe('Обязательно для заполнения')
      expect(requiredRule()(null)).toBe('Обязательно для заполнения')
      expect(requiredRule()(undefined)).toBe('Обязательно для заполнения')
    })

    it('should use custom error message when provided', () => {
      const customMsg = 'Это поле обязательно'

      expect(requiredRule(customMsg)('')).toBe(customMsg)
    })
  })

  describe('emailRule', () => {
    it('should return true for valid email addresses', () => {
      expect(emailRule()('test@example.com')).toBe(true)
      expect(emailRule()('user.name@domain.co.uk')).toBe(true)
      expect(emailRule()('a@b.cc')).toBe(true)
    })

    it('should return true for empty values', () => {
      expect(emailRule()('')).toBe(true)
    })

    it('should return error message for invalid email addresses', () => {
      expect(emailRule()('test')).toBe('Введите корректный email адрес')
      expect(emailRule()('test@')).toBe('Введите корректный email адрес')
      expect(emailRule()('test@domain')).toBe('Введите корректный email адрес')
      expect(emailRule()('@domain.com')).toBe('Введите корректный email адрес')
      expect(emailRule()('test@domain.')).toBe('Введите корректный email адрес')
      expect(emailRule()('test@.com')).toBe('Введите корректный email адрес')
    })

    it('should use custom error message when provided', () => {
      const customMsg = 'Неверный формат email'

      expect(emailRule(customMsg)('test')).toBe(customMsg)
    })
  })

  describe('minLengthRule', () => {
    it('should return true when string length is >= minimum', () => {
      expect(minLengthRule(3)('abc')).toBe(true)
      expect(minLengthRule(3)('abcd')).toBe(true)
      expect(minLengthRule(0)('')).toBe(true)
    })

    it('should return true for empty values', () => {
      expect(minLengthRule(5)('')).toBe(true)
    })

    it('should return error message when string length is < minimum', () => {
      expect(minLengthRule(5)('abc')).toBe('Минимальная длина - 5 символов')
    })

    it('should use custom error message when provided', () => {
      const customMsg = 'Слишком короткий текст'

      expect(minLengthRule(5, customMsg)('abc')).toBe(customMsg)
    })
  })

  describe('maxLengthRule', () => {
    it('should return true when string length is <= maximum', () => {
      expect(maxLengthRule(3)('abc')).toBe(true)
      expect(maxLengthRule(3)('ab')).toBe(true)
      expect(maxLengthRule(3)('')).toBe(true)
    })

    it('should return true for empty values', () => {
      expect(maxLengthRule(5)('')).toBe(true)
    })

    it('should return error message when string length is > maximum', () => {
      expect(maxLengthRule(3)('abcd')).toBe('Максимальная длина - 3 символов')
    })

    it('should use custom error message when provided', () => {
      const customMsg = 'Слишком длинный текст'

      expect(maxLengthRule(3, customMsg)('abcd')).toBe(customMsg)
    })
  })

  describe('minRule', () => {
    it('should return true when value is >= minimum', () => {
      expect(minRule(5)(5)).toBe(true)
      expect(minRule(5)(10)).toBe(true)
    })

    it('should return error message when value is < minimum', () => {
      expect(minRule(5)(3)).toBe('Минимальное значение - 5')
    })

    it('should use custom error message when provided', () => {
      const customMsg = 'Значение слишком маленькое'

      expect(minRule(5, customMsg)(3)).toBe(customMsg)
    })
  })

  describe('maxRule', () => {
    it('should return true when value is <= maximum', () => {
      expect(maxRule(5)(5)).toBe(true)
      expect(maxRule(5)(3)).toBe(true)
    })

    it('should return error message when value is > maximum', () => {
      expect(maxRule(5)(8)).toBe('Максимальное значение - 5')
    })

    it('should use custom error message when provided', () => {
      const customMsg = 'Значение слишком большое'

      expect(maxRule(5, customMsg)(8)).toBe(customMsg)
    })
  })

  describe('dateFormatRule', () => {
    it('should return true for valid date format', () => {
      expect(dateFormatRule()('01.01.2023')).toBe(true)
      expect(dateFormatRule()('31.12.2023')).toBe(true)
    })

    it('should return true for empty values', () => {
      expect(dateFormatRule()('')).toBe(true)
    })

    it('should return error message for invalid date format', () => {
      expect(dateFormatRule()('2023-01-01')).toBe(
        'Введите дату в формате ДД.ММ.ГГГГ'
      )
      expect(dateFormatRule()('1.1.2023')).toBe(
        'Введите дату в формате ДД.ММ.ГГГГ'
      )
    })

    it('should use custom error message when provided', () => {
      const customMsg = 'Формат даты: ДД.ММ.ГГГГ'

      expect(dateFormatRule(customMsg)('2023-01-01')).toBe(customMsg)
    })
  })

  describe('wordRule', () => {
    it('should return true for words with only letters', () => {
      expect(wordRule()('Test')).toBe(true)
      expect(wordRule()('Тест')).toBe(true)
      expect(wordRule()('ТестTest')).toBe(true)
    })

    it('should return true for empty values', () => {
      expect(wordRule()('')).toBe(true)
    })

    it('should return error message for values with non-letters', () => {
      expect(wordRule()('Test123')).toBe('Допустимы только буквы')
      expect(wordRule()('Тест!')).toBe('Допустимы только буквы')
      expect(wordRule()('Тест Тест')).toBe('Допустимы только буквы')
    })

    it('should use custom error message when provided', () => {
      const customMsg = 'Только буквы допустимы'

      expect(wordRule(customMsg)('Test123')).toBe(customMsg)
    })
  })

  describe('singleWordRule', () => {
    it('should return true for single words with only letters', () => {
      expect(singleWordRule()('Test')).toBe(true)
      expect(singleWordRule()('Тест')).toBe(true)
    })

    it('should return true for empty values', () => {
      expect(singleWordRule()('')).toBe(true)
    })

    it('should return error message for multiple words or values with non-letters', () => {
      expect(singleWordRule()('Test Test')).toBe(
        'Должно содержать только одно слово (без пробелов)'
      )
      expect(singleWordRule()('Test123')).toBe(
        'Должно содержать только одно слово (без пробелов)'
      )
    })

    it('should use custom error message when provided', () => {
      const customMsg = 'Введите одно слово без пробелов'

      expect(singleWordRule(customMsg)('Test Test')).toBe(customMsg)
    })
  })

  describe('multipleWordsRule', () => {
    it('should return true for words with only letters and spaces', () => {
      expect(multipleWordsRule()('Test')).toBe(true)
      expect(multipleWordsRule()('Test Test')).toBe(true)
      expect(multipleWordsRule()('Тест Тест')).toBe(true)
    })

    it('should return true for empty values', () => {
      expect(multipleWordsRule()('')).toBe(true)
    })

    it('should return error message for values with non-letters (except spaces)', () => {
      expect(multipleWordsRule()('Test123')).toBe('Допустимы буквы и пробелы')
      expect(multipleWordsRule()('Test!')).toBe('Допустимы буквы и пробелы')
    })

    it('should use custom error message when provided', () => {
      const customMsg = 'Только буквы и пробелы допустимы'

      expect(multipleWordsRule(customMsg)('Test123')).toBe(customMsg)
    })
  })

  describe('validDateRule', () => {
    it('should return true for valid dates', () => {
      expect(validDateRule()('01.01.2023')).toBe(true)
      expect(validDateRule()('31.12.2023')).toBe(true)
      expect(validDateRule()('29.02.2024')).toBe(true) // Leap year
    })

    it('should return true for empty values', () => {
      expect(validDateRule()('')).toBe(true)
    })

    it('should return error message for invalid date format', () => {
      expect(validDateRule()('2023-01-01')).toBe('Введите корректную дату')
    })

    it('should return error message for nonexistent dates', () => {
      expect(validDateRule()('31.02.2023')).toBe('Введите корректную дату') // February 31st doesn't exist
      expect(validDateRule()('29.02.2023')).toBe('Введите корректную дату') // Not a leap year
    })

    it('should use custom error message when provided', () => {
      const customMsg = 'Некорректная дата'

      expect(validDateRule(customMsg)('31.02.2023')).toBe(customMsg)
    })
  })

  describe('hasUppercaseRule', () => {
    it('should return true for strings with at least one uppercase letter', () => {
      expect(hasUppercaseRule()('Test')).toBe(true)
      expect(hasUppercaseRule()('testT')).toBe(true)
      expect(hasUppercaseRule()('ТЕСТ')).toBe(true)
    })

    it('should return true for empty values', () => {
      expect(hasUppercaseRule()('')).toBe(true)
    })

    it('should return error message for strings without uppercase letters', () => {
      expect(hasUppercaseRule()('test')).toBe(
        'Пароль должен содержать хотя бы одну заглавную букву'
      )
      expect(hasUppercaseRule()('123')).toBe(
        'Пароль должен содержать хотя бы одну заглавную букву'
      )
    })

    it('should use custom error message when provided', () => {
      const customMsg = 'Нужна хотя бы одна заглавная буква'

      expect(hasUppercaseRule(customMsg)('test')).toBe(customMsg)
    })
  })

  describe('hasDigitRule', () => {
    it('should return true for strings with at least one digit', () => {
      expect(hasDigitRule()('test1')).toBe(true)
      expect(hasDigitRule()('1test')).toBe(true)
      expect(hasDigitRule()('123')).toBe(true)
    })

    it('should return true for empty values', () => {
      expect(hasDigitRule()('')).toBe(true)
    })

    it('should return error message for strings without digits', () => {
      expect(hasDigitRule()('test')).toBe(
        'Пароль должен содержать хотя бы одну цифру'
      )
      expect(hasDigitRule()('Test')).toBe(
        'Пароль должен содержать хотя бы одну цифру'
      )
    })

    it('should use custom error message when provided', () => {
      const customMsg = 'Нужна хотя бы одна цифра'

      expect(hasDigitRule(customMsg)('test')).toBe(customMsg)
    })
  })

  describe('phoneRule', () => {
    it('should return true for valid phone numbers', () => {
      expect(phoneRule()('+71234567890')).toBe(true)
      expect(phoneRule()('81234567890')).toBe(true)
      expect(phoneRule()('+7(123)4567890')).toBe(true)
      expect(phoneRule()('8(123)456-78-90')).toBe(true)
      expect(phoneRule()('+7 123 456 78 90')).toBe(true)
    })

    it('should return true for empty values', () => {
      expect(phoneRule()('')).toBe(true)
    })

    it('should return error message for invalid phone numbers', () => {
      expect(phoneRule()('1234567890')).toBe(
        'Введите корректный номер телефона'
      )
      expect(phoneRule()('+7123')).toBe('Введите корректный номер телефона')
      expect(phoneRule()('+712345678901')).toBe(
        'Введите корректный номер телефона'
      )
    })

    it('should use custom error message when provided', () => {
      const customMsg = 'Неверный формат телефона'

      expect(phoneRule(customMsg)('1234567890')).toBe(customMsg)
    })
  })

  describe('birthDateAgeRangeRule', () => {
    it('should return true for birth dates within allowed age range', () => {
      // For age range 18-100, test both boundary cases and a middle case
      // Someone who just turned 18 (born April 18, 2007)
      expect(birthDateAgeRangeRule(18, 100)('18.04.2007')).toBe(true)

      // Someone in the middle of the range (age 50, born in 1975)
      expect(birthDateAgeRangeRule(18, 100)('01.01.1975')).toBe(true)
    })

    it('should return true for empty values', () => {
      expect(birthDateAgeRangeRule(18, 100)('')).toBe(true)
    })

    it('should return error message for invalid date format', () => {
      expect(birthDateAgeRangeRule(18, 100)('2000-01-01')).toBe(
        'Введите дату в формате ДД.ММ.ГГГГ'
      )
    })

    it('should return error message for nonexistent dates', () => {
      expect(birthDateAgeRangeRule(18, 100)('31.02.2000')).toBe(
        'Введите корректную дату'
      )
    })

    it('should return error message for ages below minimum', () => {
      // Someone who is 17 (born May 1, 2008)
      expect(birthDateAgeRangeRule(18, 100)('01.05.2008')).toBe(
        'Возраст не может быть меньше 18 лет'
      )

      // Someone who is way too young (born in 2020)
      expect(birthDateAgeRangeRule(18, 100)('01.01.2020')).toBe(
        'Возраст не может быть меньше 18 лет'
      )
    })

    it('should return error message for ages above maximum', () => {
      // Someone who is 100+ (born April 17, 1925)
      expect(birthDateAgeRangeRule(18, 100)('17.04.1925')).toBe(
        'Возраст не может быть больше 100 лет'
      )

      // Someone who is way too old (born in 1900)
      expect(birthDateAgeRangeRule(18, 100)('01.01.1900')).toBe(
        'Возраст не может быть больше 100 лет'
      )
    })

    it('should use custom error message when provided', () => {
      const customMsg = 'Некорректный возраст'

      expect(birthDateAgeRangeRule(18, 100, customMsg)('01.01.2020')).toBe(
        customMsg
      )
    })
  })
})
