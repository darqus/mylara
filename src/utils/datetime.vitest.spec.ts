import {
  describe, it, expect, beforeEach, afterEach, vi,
} from 'vitest'

import {
  adjustDateToTimezone,
  subtractDays,
  convertCustomFormatToIso,
  convertDateToCustomFormat,
  convertDateTimeToISO,
  isCorrectDate,
  getCurrentIsoDateTime,
  getIsoDateFromIsoDateAndMinutes,
  formatISOToInternationalDateTime,
  getTodayYesterdayDate,
  getTodayDateRange,
  getRemainingTime,
  getTimeFromTimestamp,
  calculateRangeDateLimits,
  getCurrentMonthPrepositionalCase,
  DATE_FORMAT,
  DATE_TIME_OPTIONS_PRESET,
} from './datetime'

describe('datetime utils', () => {
  // Подготавливаем мок для Date
  let originalDate: typeof Date

  beforeEach(() => {
    // Сохраняем оригинальную реализацию Date
    originalDate = global.Date

    // Фиксируем текущую дату для тестов
    const mockDate = new Date('2023-05-15T12:00:00.000Z')

    vi.useFakeTimers()
    vi.setSystemTime(mockDate)
  })

  afterEach(() => {
    // Восстанавливаем оригинальную реализацию Date после тестов
    vi.useRealTimers()
    global.Date = originalDate
  })

  describe('DATE_FORMAT', () => {
    it('should have correct format constants', () => {
      expect(DATE_FORMAT).toEqual({
        ISO: 'YYYY-MM-DD',
        CUSTOM: 'DD.MM.YYYY',
        SLASH: 'YYYY/MM/DD',
      })
    })
  })

  describe('DATE_TIME_OPTIONS_PRESET', () => {
    it('should contain predefined format options', () => {
      expect(DATE_TIME_OPTIONS_PRESET).toHaveProperty(
        'formattedDateAndTimeMonthShort'
      )
      expect(DATE_TIME_OPTIONS_PRESET).toHaveProperty('onlyDate')
      expect(DATE_TIME_OPTIONS_PRESET).toHaveProperty('onlyTime')
    })
  })

  describe('adjustDateToTimezone', () => {
    it('should adjust date correctly', () => {
      const date = new Date('2023-05-15T12:00:00.000Z')
      const result = adjustDateToTimezone(date)

      // Проверяем, что результат - это объект Date
      expect(result).toBeInstanceOf(Date)

      // Проверяем корректировку с учетом timezone offset
      const expectedOffset = date.getTimezoneOffset() * 60 * 1000

      expect(result.getTime()).toBe(date.getTime() - expectedOffset)
    })

    it('should handle numeric timestamp input', () => {
      const timestamp = new Date('2023-05-15T12:00:00.000Z').getTime()
      const result = adjustDateToTimezone(timestamp)

      expect(result).toBeInstanceOf(Date)

      // Проверяем корректировку с учетом timezone offset
      const expectedOffset = new Date(timestamp).getTimezoneOffset() * 60 * 1000

      expect(result.getTime()).toBe(timestamp - expectedOffset)
    })

    it('should use current date when no argument is provided', () => {
      const now = new Date()
      const result = adjustDateToTimezone()

      expect(result).toBeInstanceOf(Date)

      // Проверяем корректировку с учетом timezone offset
      const expectedOffset = now.getTimezoneOffset() * 60 * 1000

      expect(result.getTime()).toBe(now.getTime() - expectedOffset)
    })
  })

  describe('subtractDays', () => {
    it('should subtract days correctly', () => {
      const date = new Date('2023-05-15T12:00:00.000Z')
      const result = subtractDays(date, 5)

      expect(result).toBeInstanceOf(Date)
      expect(result.toISOString().split('T')[0]).toBe('2023-05-10')
    })

    it('should handle subtracting zero days', () => {
      const date = new Date('2023-05-15T12:00:00.000Z')
      const result = subtractDays(date, 0)

      expect(result.toISOString().split('T')[0]).toBe('2023-05-15')
    })

    it('should handle month change', () => {
      const date = new Date('2023-05-01T12:00:00.000Z')
      const result = subtractDays(date, 1)

      expect(result.toISOString().split('T')[0]).toBe('2023-04-30')
    })

    it('should handle year change', () => {
      const date = new Date('2023-01-01T12:00:00.000Z')
      const result = subtractDays(date, 1)

      expect(result.toISOString().split('T')[0]).toBe('2022-12-31')
    })
  })

  describe('convertCustomFormatToIso', () => {
    it('should convert custom date format to ISO', () => {
      expect(convertCustomFormatToIso('15.05.2023')).toBe('2023-05-15')
    })

    it('should handle single digit day and month with padding', () => {
      expect(convertCustomFormatToIso('5.7.2023')).toBe('2023-07-05')
    })

    it('should return null for invalid input', () => {
      expect(convertCustomFormatToIso(null)).toBeNull()
      expect(convertCustomFormatToIso('invalid')).toBeNull()
      expect(convertCustomFormatToIso('15.05')).toBeNull()
      expect(convertCustomFormatToIso('15.05.abcd')).toBeNull()
    })
  })

  describe('convertDateToCustomFormat', () => {
    it('should convert ISO date format to custom format', () => {
      expect(convertDateToCustomFormat('2023-05-15')).toBe('15.05.2023')
    })

    it('should return empty string for invalid input', () => {
      expect(convertDateToCustomFormat('')).toBe('')
      expect(convertDateToCustomFormat('invalid')).toBe('')
      expect(convertDateToCustomFormat('2023/05/15')).toBe('')
    })
  })

  describe('convertDateTimeToISO', () => {
    it('should convert date and time strings to ISO format', () => {
      expect(convertDateTimeToISO('15.05.2023', '14:30')).toBe(
        '2023-05-15T14:30:00.000Z'
      )
    })

    it('should handle single digit values with padding', () => {
      expect(convertDateTimeToISO('5.6.2023', '9:5')).toBe(
        '2023-06-05T09:05:00.000Z'
      )
    })

    it('should return empty string for invalid input', () => {
      expect(convertDateTimeToISO('', '14:30')).toBe('')
      expect(convertDateTimeToISO('15.05.2023', '')).toBe('')
      expect(convertDateTimeToISO('invalid', '14:30')).toBe('')
      expect(convertDateTimeToISO('15.05.2023', 'invalid')).toBe('')
    })
  })

  describe('isCorrectDate', () => {
    it('should validate correct date formats', () => {
      expect(isCorrectDate('15.05.2023')).toBe(true)
      expect(isCorrectDate('01.01.2000')).toBe(true)
      expect(isCorrectDate('31.12.2023')).toBe(true)
    })

    it('should reject dates with invalid format', () => {
      expect(isCorrectDate('32.05.2023')).toBe(false) // Invalid day
      expect(isCorrectDate('15.13.2023')).toBe(false) // Invalid month
      expect(isCorrectDate('29.02.2023')).toBe(false) // Not a leap year
      expect(isCorrectDate('abc')).toBe(false)
      expect(isCorrectDate('15/05/2023')).toBe(false)
    })

    it('should accept leap year dates correctly', () => {
      expect(isCorrectDate('29.02.2020')).toBe(true) // Leap year
      expect(isCorrectDate('29.02.2021')).toBe(false) // Not a leap year
      expect(isCorrectDate('29.02.2024')).toBe(true) // Leap year
    })
  })

  describe('getTodayDateRange', () => {
    it("should return today's date range in ISO format", () => {
      const result = getTodayDateRange()
      const today = adjustDateToTimezone()
      const datePrefix = today.toISOString().split('T')[0]

      expect(result).toHaveProperty('dateFrom')
      expect(result).toHaveProperty('dateTo')
      expect(result.dateFrom).toBe(`${datePrefix}T00:00:00.000Z`)
      expect(result.dateTo).toBe(`${datePrefix}T23:59:59.999Z`)
    })
  })

  describe('getCurrentIsoDateTime', () => {
    it('should return current date time in ISO format', () => {
      const result = getCurrentIsoDateTime()

      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)
    })

    it('should return only date part when onlyDate is true', () => {
      const result = getCurrentIsoDateTime(undefined, true)

      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(result).not.toContain('T')
    })

    it('should handle specific date', () => {
      const date = new Date('2023-01-15T10:00:00.000Z')
      const result = getCurrentIsoDateTime(date)

      expect(result).toContain('2023-01-15T')
    })

    it('should handle null date parameter', () => {
      const result = getCurrentIsoDateTime(null)

      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)
    })
  })

  describe('getIsoDateFromIsoDateAndMinutes', () => {
    it('should add minutes to ISO date', () => {
      const result = getIsoDateFromIsoDateAndMinutes(
        '2023-05-15T12:00:00.000Z',
        30
      )

      expect(result).toBe('2023-05-15T12:30:00.000Z')
    })

    it('should subtract minutes when negative', () => {
      const result = getIsoDateFromIsoDateAndMinutes(
        '2023-05-15T12:00:00.000Z',
        -30
      )

      expect(result).toBe('2023-05-15T11:30:00.000Z')
    })

    it('should handle hour change', () => {
      const result = getIsoDateFromIsoDateAndMinutes(
        '2023-05-15T12:00:00.000Z',
        60
      )

      expect(result).toBe('2023-05-15T13:00:00.000Z')
    })

    it('should handle day change', () => {
      const result = getIsoDateFromIsoDateAndMinutes(
        '2023-05-15T23:45:00.000Z',
        30
      )

      expect(result).toBe('2023-05-16T00:15:00.000Z')
    })

    it('should return original date for invalid input', () => {
      const invalidDate = 'not-a-date'

      expect(getIsoDateFromIsoDateAndMinutes(invalidDate, 30)).toBe(invalidDate)
    })
  })

  describe('formatISOToInternationalDateTime', () => {
    // Этот тест может зависеть от локальных настроек, поэтому проверим общую структуру
    it('should format ISO date to international format', () => {
      const formattedDate = formatISOToInternationalDateTime(
        '2023-05-15T12:00:00.000Z'
      )

      expect(typeof formattedDate).toBe('string')
      expect(formattedDate.length).toBeGreaterThan(0)
    })

    it('should accept custom formatting options', () => {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      } as Intl.DateTimeFormatOptions
      const formattedDate = formatISOToInternationalDateTime(
        '2023-05-15T12:00:00.000Z',
        options
      )

      expect(typeof formattedDate).toBe('string')

      // Результат может зависеть от локали, но должен содержать год
      expect(formattedDate).toContain('2023')
    })
  })

  describe('getTodayYesterdayDate', () => {
    it('should return today and yesterday dates', () => {
      const result = getTodayYesterdayDate()

      expect(result).toHaveProperty('today')
      expect(result).toHaveProperty('yesterday')
      expect(result).toHaveProperty('todayIso')
      expect(result).toHaveProperty('yesterdayIso')
      expect(result).toHaveProperty('todayShort')
      expect(result).toHaveProperty('yesterdayShort')

      // Проверяем, что сегодняшний и вчерашний день отличаются на 1 день (86400000 мс)
      const timeDiff = result.today.getTime() - result.yesterday.getTime()

      expect(timeDiff).toBe(24 * 60 * 60 * 1000)
    })

    it('should handle custom ISO date string', () => {
      const customDate = '2023-10-15T12:00:00.000Z'
      const result = getTodayYesterdayDate(customDate)

      // Use adjustDateToTimezone to match the timezone adjustment done in getTodayYesterdayDate
      const expectedToday = adjustDateToTimezone(new Date(customDate))

      expect(result.today.getTime()).toBe(expectedToday.getTime())

      // Проверяем, что вчерашний день на 1 день меньше
      const expectedYesterday = new Date(expectedToday)

      expectedYesterday.setDate(expectedYesterday.getDate() - 1)
      expect(result.yesterday.getDate()).toBe(expectedYesterday.getDate())
    })
  })

  describe('getRemainingTime', () => {
    it('should calculate remaining time correctly', () => {
      // Устанавливаем текущее время
      const currentDate = new Date('2023-05-15T12:00:00.000Z')

      vi.setSystemTime(currentDate)

      // Дата окончания через 2 дня, 3 часа и 30 минут
      const endDate = new Date('2023-05-17T15:30:00.000Z').toISOString()

      const result = getRemainingTime(endDate)

      // Ожидаем 1 день, 9 часов и 0 минут
      expect(result).toContain('1 день 9 часов 0 минут')

      // Проверяем, что строка содержит ожидаемые части
      expect(result).toMatch(
        /\d+ (день|дня|дней) \d+ (час|часа|часов) \d+ (минута|минуты|минут)/
      )
    })

    it('should handle past date', () => {
      const currentDate = new Date('2023-05-15T12:00:00.000Z')

      vi.setSystemTime(currentDate)

      // Дата в прошлом
      const pastDate = new Date('2023-05-10T12:00:00.000Z').toISOString()

      const result = getRemainingTime(pastDate)

      expect(result).toBe('0 дней 0 часов 0 минут')
    })

    it('should handle invalid date', () => {
      const result = getRemainingTime('invalid-date')

      expect(result).toBe('0 дней 0 часов 0 минут')
    })
  })

  describe('getTimeFromTimestamp', () => {
    it('should format milliseconds to MM:SS format', () => {
      expect(getTimeFromTimestamp(65000)).toBe('01:05') // 1 минута 5 секунд
      expect(getTimeFromTimestamp(3665000)).toBe('61:05') // 61 минута 5 секунд
      expect(getTimeFromTimestamp(5000)).toBe('00:05') // 5 секунд
      expect(getTimeFromTimestamp(0)).toBe('00:00') // 0 секунд
    })
  })

  describe('calculateRangeDateLimits', () => {
    it('should calculate birth date limits based on age range', () => {
      // Устанавливаем текущую дату для теста
      const mockDate = new Date('2023-05-15')

      vi.setSystemTime(mockDate)

      const result = calculateRangeDateLimits(18, 100)

      // Проверяем формат дат
      expect(result.minDate).toMatch(/^\d{4}\/\d{2}\/\d{2}$/)
      expect(result.maxDate).toMatch(/^\d{4}\/\d{2}\/\d{2}$/)

      // Проверяем значения
      // minDate - самая ранняя допустимая дата рождения (текущий год - 100)
      expect(result.minDate.split('/')[0]).toBe('1923')

      // maxDate - самая поздняя допустимая дата рождения (текущий год - 18)
      expect(result.maxDate.split('/')[0]).toBe('2005')
    })

    it('should handle small age ranges', () => {
      const mockDate = new Date('2023-05-15')

      vi.setSystemTime(mockDate)

      const result = calculateRangeDateLimits(25, 30)

      // minDate - возраст 30 лет
      expect(result.minDate.split('/')[0]).toBe('1993')

      // maxDate - возраст 25 лет
      expect(result.maxDate.split('/')[0]).toBe('1998')
    })
  })

  describe('getCurrentMonthPrepositionalCase', () => {
    it('should return month in prepositional case', () => {
      // Устанавливаем март для теста
      const marchDate = new Date('2023-03-15')

      vi.setSystemTime(marchDate)

      expect(getCurrentMonthPrepositionalCase()).toBe('марте')

      // Устанавливаем апрель для теста
      const aprilDate = new Date('2023-04-15')

      vi.setSystemTime(aprilDate)

      expect(getCurrentMonthPrepositionalCase()).toBe('апреле')

      // Устанавливаем август для теста
      const augustDate = new Date('2023-08-15')

      vi.setSystemTime(augustDate)

      expect(getCurrentMonthPrepositionalCase()).toBe('августе')
    })
  })
})
