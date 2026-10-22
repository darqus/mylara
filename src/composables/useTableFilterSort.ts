import type { MaybeRefOrGetter } from 'vue'
import { computed, toValue } from 'vue'

/**
 * Compares two strings the way the admin table always did:
 * Russian locale, natural sort ("2" before "10"), case-insensitive.
 */
function compareStrings(a: string, b: string): number {
  return a.localeCompare(b, 'ru', {
    numeric: true,
    sensitivity: 'base',
  })
}

/**
 * Filters rows by a free-text query across the given fields.
 *
 * An empty query returns every row. Fields that are missing/null are skipped.
 *
 * @param items - Raw rows loaded from Firestore
 * @param query - Free-text query (trimmed, case-insensitive)
 * @param searchableFields - Field names to search in
 * @returns A new array (input is never mutated)
 */
export function filterItems(
  items: Record<string, unknown>[],
  query: string,
  searchableFields: string[]
): Record<string, unknown>[] {
  const normalizedQuery = query.trim().toLowerCase()

  if (!normalizedQuery) {
    return [...items]
  }

  if (searchableFields.length === 0) {
    return []
  }

  return items.filter((item) =>
    searchableFields.some((fieldName) => {
      const value = item[fieldName]

      if (value === null || value === undefined) {
        return false
      }

      return String(value).toLowerCase().includes(normalizedQuery)
    })
  )
}

/**
 * Sorts rows by a single column, preserving the original behaviour:
 * null/undefined values always come first in ascending order, strings are
 * compared with the Russian locale and natural numbering, numbers and dates
 * are compared directly, everything else falls back to string comparison.
 *
 * @param items - Rows to sort
 * @param sortBy - Column name; when empty the input array is returned as-is
 * @param descending - Sort direction (defaults to ascending)
 * @returns A new sorted array (input is never mutated)
 */
export function sortItems(
  items: Record<string, unknown>[],
  sortBy: string | undefined,
  descending: boolean | undefined
): Record<string, unknown>[] {
  if (!sortBy) {
    return items
  }

  const isDescending = descending ?? false

  return [...items].sort((a, b) => {
    const aVal = a[sortBy]
    const bVal = b[sortBy]

    if (aVal === null || aVal === undefined) {
      if (bVal === null || bVal === undefined) {
        return 0
      }

      return isDescending ? 1 : -1
    }

    if (bVal === null || bVal === undefined) {
      return isDescending ? -1 : 1
    }

    if (typeof aVal === 'string' && typeof bVal === 'string') {
      const result = compareStrings(aVal, bVal)

      return isDescending ? -result : result
    }

    if (typeof aVal === 'number' && typeof bVal === 'number') {
      const result = aVal - bVal

      return isDescending ? -result : result
    }

    if (aVal instanceof Date && bVal instanceof Date) {
      const result = aVal.getTime() - bVal.getTime()

      return isDescending ? -result : result
    }

    const result = compareStrings(String(aVal), String(bVal))

    return isDescending ? -result : result
  })
}

export type TableFilterSortOptions = {
  /** Raw rows (usually `tableState.items`) */
  items: MaybeRefOrGetter<Record<string, unknown>[]>
  /** Free-text query (usually `tableState.filter`) */
  filter: MaybeRefOrGetter<string>
  /** Active column (usually `tableState.pagination.sortBy`) */
  sortBy: MaybeRefOrGetter<string | undefined>
  /** Sort direction (usually `tableState.pagination.descending`) */
  descending: MaybeRefOrGetter<boolean | undefined>
  /** Fields allowed for the search (usually from the collection config) */
  searchableFields: MaybeRefOrGetter<string[]>
}

/**
 * Client-side filtering and sorting for the admin tables.
 *
 * Everything is derived, so the caller never has to re-run a search
 * manually: change the filter or the sort and the rows update on their own.
 *
 * @returns `filteredItems` (query applied) and `visibleItems` (query + sort)
 */
export function useTableFilterSort(options: TableFilterSortOptions) {
  const filteredItems = computed(() =>
    filterItems(
      toValue(options.items),
      toValue(options.filter),
      toValue(options.searchableFields)
    )
  )

  const visibleItems = computed(() =>
    sortItems(
      filteredItems.value,
      toValue(options.sortBy),
      toValue(options.descending)
    )
  )

  return {
    filteredItems,
    visibleItems,
  }
}
