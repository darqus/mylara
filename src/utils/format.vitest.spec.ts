import {
  describe, it, expect,
} from 'vitest'

import {
  incline, toCapitalCase, INCLINE,
} from './format'

describe('incline', () => {
  it('should correctly decline words for singular form', () => {
    expect(incline(1, [ 'стол', 'стола', 'столов', ])).toBe('стол')
    expect(incline(1, [ 'год', 'года', 'лет', ])).toBe('год')
    expect(incline(1, INCLINE.YEAR)).toBe('год')
  })

  it('should correctly decline words for dual form', () => {
    expect(incline(2, [ 'стол', 'стола', 'столов', ])).toBe('стола')
    expect(incline(3, [ 'стол', 'стола', 'столов', ])).toBe('стола')
    expect(incline(4, [ 'стол', 'стола', 'столов', ])).toBe('стола')
  })

  it('should correctly decline words for plural form', () => {
    expect(incline(5, [ 'стол', 'стола', 'столов', ])).toBe('столов')
    expect(incline(11, [ 'стол', 'стола', 'столов', ])).toBe('столов')
    expect(incline(21, [ 'стол', 'стола', 'столов', ])).toBe('стол')
  })

  it('should return full form when requested', () => {
    expect(incline(1, [ 'стол', 'стола', 'столов', ], true)).toBe('1 стол')
    expect(incline(5, [ 'стол', 'стола', 'столов', ], true)).toBe('5 столов')
  })

  it('should throw error for negative numbers', () => {
    expect(() => incline(-1, [ 'стол', 'стола', 'столов', ])).toThrow(
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
