import type { CollectionConfig } from '@/types/admin'

import { describe, expect, it } from 'vitest'

import {
  getCellText,
  getFieldType,
  getLayoutLabel,
} from './admin-cell-formatters'

const config: CollectionConfig = {
  name: 'slogan',
  label: 'Слоган',
  icon: 'title',
  fields: [
    {
      name: 'layout',
      label: 'Расположение',
      type: 'select',
      options: [
        { label: 'Текст слева', value: 'text-left' },
        { label: 'Текст справа', value: 'text-right' },
      ],
    },
    { name: 'image', label: 'Изображение', type: 'base64-image' },
  ],
  columns: [],
}

describe('getCellText', () => {
  it('should strip HTML and truncate long text', () => {
    const long = `<p>${'а'.repeat(100)}</p>`

    const result = getCellText(long)

    expect(result).toBe(`${'а'.repeat(80)}...`)
  })

  it('should keep short plain text unchanged', () => {
    expect(getCellText('короткий текст')).toBe('короткий текст')
  })

  it('should decode HTML entities', () => {
    expect(getCellText(' Tom&nbsp;&amp; Jerry ')).toBe('Tom & Jerry')
  })

  it('should handle null, numbers and objects', () => {
    expect(getCellText(null)).toBe('')
    expect(getCellText(42)).toBe('42')
    expect(getCellText({ a: 1 })).toBe('{"a":1}')
  })

  it('should respect a custom max length', () => {
    expect(getCellText('1234567890', 4)).toBe('1234...')
  })
})

describe('getFieldType', () => {
  it('should return the field type from the config', () => {
    expect(getFieldType(config, 'image')).toBe('base64-image')
  })

  it('should return undefined for unknown fields', () => {
    expect(getFieldType(config, 'unknown')).toBeUndefined()
  })

  it('should return undefined without a config', () => {
    expect(getFieldType(undefined, 'image')).toBeUndefined()
  })
})

describe('getLayoutLabel', () => {
  it('should translate select values via the field config', () => {
    expect(getLayoutLabel(config, 'text-left')).toBe('Текст слева')
    expect(getLayoutLabel(config, 'text-right')).toBe('Текст справа')
  })

  it('should show a placeholder for empty values', () => {
    expect(getLayoutLabel(config, null)).toBe('Не указано')
    expect(getLayoutLabel(config, '')).toBe('Не указано')
    expect(getLayoutLabel(config, undefined)).toBe('Не указано')
  })

  it('should return the raw value when there is no matching option', () => {
    expect(getLayoutLabel(config, 'text-middle')).toBe('text-middle')
    expect(getLayoutLabel(config, 42)).toBe('42')
  })

  it('should work without a config', () => {
    expect(getLayoutLabel(undefined, 'text-left')).toBe('text-left')
    expect(getLayoutLabel(undefined, null)).toBe('Не указано')
  })
})
