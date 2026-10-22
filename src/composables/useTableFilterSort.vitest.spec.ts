import { describe, expect, it } from 'vitest'

import { filterItems, sortItems } from './useTableFilterSort'

const rows = (
  values: Array<Record<string, unknown>>
): Record<string, unknown>[] => values

describe('filterItems', () => {
  const items = rows([
    { id: '1', label: 'Крем для лица', info: '<p>Увлажняющий</p>' },
    { id: '2', label: 'Сыворотка', info: null },
    { id: '3', label: 'Масло для волос', price: 990 },
  ])
  const fields = ['label', 'info', 'price']

  it('should return all rows for an empty or whitespace query', () => {
    expect(filterItems(items, '', fields)).toHaveLength(3)
    expect(filterItems(items, '   ', fields)).toHaveLength(3)
  })

  it('should return a copy so the source array is never mutated', () => {
    const result = filterItems(items, '', fields)

    expect(result).not.toBe(items)
    expect(result).toEqual(items)
  })

  it('should match case-insensitively across the given fields', () => {
    expect(filterItems(items, 'КРЕМ', fields)).toHaveLength(1)
    expect(filterItems(items, 'крем', fields)[0]?.id).toBe('1')
  })

  it('should search in non-string values', () => {
    expect(filterItems(items, '990', fields)).toHaveLength(1)
    expect(filterItems(items, '990', fields)[0]?.id).toBe('3')
  })

  it('should skip null and undefined values without throwing', () => {
    expect(filterItems(items, 'сыворотка', fields)).toHaveLength(1)
    expect(filterItems(items, 'null', fields)).toHaveLength(0)
  })

  it('should return nothing when no fields are searchable', () => {
    expect(filterItems(items, 'крем', [])).toHaveLength(0)
  })

  it('should ignore fields outside of the searchable list', () => {
    expect(filterItems(items, 'крем', ['price'])).toHaveLength(0)
  })
})

describe('sortItems', () => {
  it('should return the input array as-is when no column is given', () => {
    const items = rows([{ a: 2 }, { a: 1 }])

    expect(sortItems(items, undefined, false)).toBe(items)
    expect(sortItems(items, '', true)).toBe(items)
  })

  it('should not mutate the input array', () => {
    const items = rows([{ a: 2 }, { a: 1 }])

    sortItems(items, 'a', false)

    expect(items[0]?.a).toBe(2)
  })

  it('should sort strings with Russian locale and natural numbering', () => {
    const items = rows([
      { name: 'плагин 10' },
      { name: 'Плагин 2' },
      { name: 'плагин 1' },
    ])

    expect(sortItems(items, 'name', false).map((item) => item.name)).toEqual([
      'плагин 1',
      'Плагин 2',
      'плагин 10',
    ])
  })

  it('should reverse string order when descending', () => {
    const items = rows([{ name: 'б' }, { name: 'а' }, { name: 'в' }])

    expect(sortItems(items, 'name', true).map((item) => item.name)).toEqual([
      'в',
      'б',
      'а',
    ])
  })

  it('should sort numbers numerically', () => {
    const items = rows([{ price: 10 }, { price: 2 }, { price: 100 }])

    expect(sortItems(items, 'price', false).map((item) => item.price)).toEqual([
      2, 10, 100,
    ])
    expect(sortItems(items, 'price', true).map((item) => item.price)).toEqual([
      100, 10, 2,
    ])
  })

  it('should sort dates chronologically', () => {
    const items = rows([
      { date: new Date('2026-03-01') },
      { date: new Date('2024-01-01') },
      { date: new Date('2025-06-15') },
    ])

    expect(sortItems(items, 'date', false).map((item) => item.date)).toEqual([
      new Date('2024-01-01'),
      new Date('2025-06-15'),
      new Date('2026-03-01'),
    ])
  })

  it('should put nullish values first ascending and last descending', () => {
    const items = rows([{ v: null }, { v: 'а' }, { v: undefined }, { v: 'б' }])

    expect(sortItems(items, 'v', false).map((item) => item.v)).toEqual([
      null,
      undefined,
      'а',
      'б',
    ])
    expect(sortItems(items, 'v', true).map((item) => item.v)).toEqual([
      'б',
      'а',
      null,
      undefined,
    ])
  })

  it('should keep relative order of two nullish values', () => {
    const items = rows([{ v: null }, { v: undefined }])

    expect(sortItems(items, 'v', false)).toHaveLength(2)
  })

  it('should fall back to string comparison for mixed types', () => {
    const items = rows([{ v: 10 }, { v: '9' }, { v: true }])

    const sorted = sortItems(items, 'v', false).map((item) => String(item.v))

    expect(sorted).toEqual(['9', '10', 'true'])
  })
})
