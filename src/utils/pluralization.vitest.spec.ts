import {
  describe,
  it,
  expect,
} from 'vitest'

import {
  pluralizeRecords,
  formatRecordsCount,
  pluralize,
  formatCount,
} from './pluralization'

describe('pluralization utils', () => {
  describe('pluralizeRecords', () => {
    it('возвращает "запись" для 1', () => {
      expect(pluralizeRecords(1)).toBe('запись')
    })

    it('возвращает "записи" для 2, 3, 4', () => {
      expect(pluralizeRecords(2)).toBe('записи')
      expect(pluralizeRecords(3)).toBe('записи')
      expect(pluralizeRecords(4)).toBe('записи')
    })

    it('возвращает "записей" для 0, 5-9', () => {
      expect(pluralizeRecords(0)).toBe('записей')
      expect(pluralizeRecords(5)).toBe('записей')
      expect(pluralizeRecords(6)).toBe('записей')
      expect(pluralizeRecords(7)).toBe('записей')
      expect(pluralizeRecords(8)).toBe('записей')
      expect(pluralizeRecords(9)).toBe('записей')
    })

    it('правильно обрабатывает числа 11-14 (всегда "записей")', () => {
      expect(pluralizeRecords(11)).toBe('записей')
      expect(pluralizeRecords(12)).toBe('записей')
      expect(pluralizeRecords(13)).toBe('записей')
      expect(pluralizeRecords(14)).toBe('записей')
    })

    it('правильно обрабатывает большие числа', () => {
      expect(pluralizeRecords(21)).toBe('запись')
      expect(pluralizeRecords(22)).toBe('записи')
      expect(pluralizeRecords(25)).toBe('записей')
      expect(pluralizeRecords(101)).toBe('запись')
      expect(pluralizeRecords(102)).toBe('записи')
      expect(pluralizeRecords(105)).toBe('записей')
      expect(pluralizeRecords(111)).toBe('записей')
      expect(pluralizeRecords(121)).toBe('запись')
    })
  })

  describe('formatRecordsCount', () => {
    it('возвращает строку с числом и правильно склоненным словом', () => {
      expect(formatRecordsCount(1)).toBe('1 запись')
      expect(formatRecordsCount(2)).toBe('2 записи')
      expect(formatRecordsCount(5)).toBe('5 записей')
      expect(formatRecordsCount(11)).toBe('11 записей')
      expect(formatRecordsCount(21)).toBe('21 запись')
      expect(formatRecordsCount(25)).toBe('25 записей')
    })
  })

  describe('pluralize', () => {
    const forms: [ string, string, string, ] = [ 'файл', 'файла', 'файлов', ]

    it('возвращает первую форму для 1', () => {
      expect(pluralize(1, forms)).toBe('файл')
      expect(pluralize(21, forms)).toBe('файл')
      expect(pluralize(101, forms)).toBe('файл')
    })

    it('возвращает вторую форму для 2-4', () => {
      expect(pluralize(2, forms)).toBe('файла')
      expect(pluralize(3, forms)).toBe('файла')
      expect(pluralize(4, forms)).toBe('файла')
      expect(pluralize(22, forms)).toBe('файла')
      expect(pluralize(103, forms)).toBe('файла')
    })

    it('возвращает третью форму для 0, 5-9 и 11-14', () => {
      expect(pluralize(0, forms)).toBe('файлов')
      expect(pluralize(5, forms)).toBe('файлов')
      expect(pluralize(10, forms)).toBe('файлов')
      expect(pluralize(11, forms)).toBe('файлов')
      expect(pluralize(12, forms)).toBe('файлов')
      expect(pluralize(13, forms)).toBe('файлов')
      expect(pluralize(14, forms)).toBe('файлов')
      expect(pluralize(15, forms)).toBe('файлов')
      expect(pluralize(25, forms)).toBe('файлов')
      expect(pluralize(111, forms)).toBe('файлов')
    })
  })

  describe('formatCount', () => {
    const forms: [ string, string, string, ] = [ 'товар', 'товара', 'товаров', ]

    it('возвращает строку с числом и правильно склоненным словом', () => {
      expect(formatCount(1, forms)).toBe('1 товар')
      expect(formatCount(2, forms)).toBe('2 товара')
      expect(formatCount(5, forms)).toBe('5 товаров')
      expect(formatCount(11, forms)).toBe('11 товаров')
      expect(formatCount(21, forms)).toBe('21 товар')
      expect(formatCount(22, forms)).toBe('22 товара')
      expect(formatCount(25, forms)).toBe('25 товаров')
    })
  })
})
