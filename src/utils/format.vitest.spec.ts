import { describe, expect, it } from 'vitest'

import {
  htmlToText,
  INCLINE,
  incline,
  stringifyValue,
  toCapitalCase,
  truncate,
} from './format'

describe('incline', () => {
  it('should correctly decline words for singular form', () => {
    expect(incline(1, ['стол', 'стола', 'столов'])).toBe('стол')
    expect(incline(1, ['год', 'года', 'лет'])).toBe('год')
    expect(incline(1, INCLINE.YEAR)).toBe('год')
  })

  it('should correctly decline words for dual form', () => {
    expect(incline(2, ['стол', 'стола', 'столов'])).toBe('стола')
    expect(incline(3, ['стол', 'стола', 'столов'])).toBe('стола')
    expect(incline(4, ['стол', 'стола', 'столов'])).toBe('стола')
  })

  it('should correctly decline words for plural form', () => {
    expect(incline(5, ['стол', 'стола', 'столов'])).toBe('столов')
    expect(incline(11, ['стол', 'стола', 'столов'])).toBe('столов')
    expect(incline(21, ['стол', 'стола', 'столов'])).toBe('стол')
  })

  it('should return full form when requested', () => {
    expect(incline(1, ['стол', 'стола', 'столов'], true)).toBe('1 стол')
    expect(incline(5, ['стол', 'стола', 'столов'], true)).toBe('5 столов')
  })

  it('should throw error for negative numbers', () => {
    expect(() => incline(-1, ['стол', 'стола', 'столов'])).toThrow(
      'Number must be non-negative'
    )
  })
})

describe('toCapitalCase', () => {
  it('should capitalize the first letter of a string', () => {
    expect(toCapitalCase('hello')).toBe('Hello')
    expect(toCapitalCase('world')).toBe('World')
  })

  it('should handle empty strings', () => {
    expect(toCapitalCase('')).toBe('')
  })

  it('should handle strings that are already capitalized', () => {
    expect(toCapitalCase('Hello')).toBe('Hello')
  })

  it('should handle strings with special characters', () => {
    expect(toCapitalCase('привет')).toBe('Привет')
    expect(toCapitalCase('123test')).toBe('123test')
  })
})

describe('stringifyValue', () => {
  it('should return empty string for null and undefined', () => {
    expect(stringifyValue(null)).toBe('')
    expect(stringifyValue(undefined)).toBe('')
  })

  it('should pass strings through unchanged', () => {
    expect(stringifyValue('hello')).toBe('hello')
  })

  it('should convert numbers and booleans to strings', () => {
    expect(stringifyValue(42)).toBe('42')
    expect(stringifyValue(0)).toBe('0')
    expect(stringifyValue(true)).toBe('true')
    expect(stringifyValue(false)).toBe('false')
  })

  it('should stringify objects and arrays', () => {
    expect(stringifyValue({ a: 1 })).toBe('{"a":1}')
    expect(stringifyValue([1, 2])).toBe('[1,2]')
  })

  it('should fall back to String() for non-serializable values', () => {
    const circular: Record<string, unknown> = {}

    circular.self = circular

    expect(typeof stringifyValue(circular)).toBe('string')
  })
})

describe('htmlToText', () => {
  it('should strip HTML tags', () => {
    expect(htmlToText('<p>Hello <b>world</b></p>')).toBe('Hello world')
  })

  it('should decode named entities', () => {
    expect(htmlToText('Tom&nbsp;&amp;&nbsp;Jerry')).toBe('Tom & Jerry')
    expect(htmlToText('&lt;script&gt;')).toBe('<script>')
    expect(htmlToText('&quot;quoted&quot;')).toBe('"quoted"')
    expect(htmlToText('&#39;apostrophe&#39;')).toBe("'apostrophe'")
  })

  it('should decode numeric and hex entities', () => {
    expect(htmlToText('&#39;')).toBe("'")
    expect(htmlToText('&#x27;')).toBe("'")
  })

  it('should keep unknown entities as-is', () => {
    expect(htmlToText('&unknown;')).toBe('&unknown;')
  })

  it('should handle non-string input via stringifyValue', () => {
    expect(htmlToText(null)).toBe('')
    expect(htmlToText(42)).toBe('42')
  })

  it('should not require a DOM', () => {
    // Regression guard: the previous implementation used
    // document.createElement('textarea'), which throws outside a browser.
    expect(htmlToText('<div>ok</div>')).toBe('ok')
  })
})

describe('truncate', () => {
  it('should return the string unchanged when within limit', () => {
    expect(truncate('hello', 10)).toBe('hello')
    expect(truncate('hello', 5)).toBe('hello')
  })

  it('should append ellipsis when truncated', () => {
    expect(truncate('hello world', 5)).toBe('hello...')
    expect(truncate('abcdef', 0)).toBe('...')
  })
})
