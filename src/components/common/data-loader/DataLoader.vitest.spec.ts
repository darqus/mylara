import { flushPromises, mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import DataLoader from './DataLoader.vue'

// Quasar components are not registered in unit tests, so the loader's own
// loading/error/data logic is asserted through stubs and emitted events.
const global = {
  stubs: {
    QInnerLoading: {
      props: ['showing'],
      template: '<div v-if="showing" data-test="loading" />',
    },
    QBanner: {
      template: '<div data-test="error"><slot /><slot name="action" /></div>',
    },
    QCard: { template: '<div data-test="empty"><slot /></div>' },
    QBtn: {
      emits: ['click'],
      template: '<button data-test="action" @click="$emit(\'click\')" />',
    },
    QIcon: true,
    QSpinnerDots: true,
  },
}

describe('DataLoader', () => {
  it('picks the configured key out of the response', async () => {
    const fetchData = vi.fn().mockResolvedValue({
      slides: [{ id: '1' }],
      error: null,
    })

    const wrapper = mount(DataLoader, {
      props: { fetchData, dataKey: 'slides' },
      global,
    })

    await flushPromises()

    expect(fetchData).toHaveBeenCalledTimes(1)
    expect(wrapper.emitted('data-loaded')?.[0]).toEqual([[{ id: '1' }]])
  })

  it('passes the whole response through when no key is set', async () => {
    const response = { title: 'Slogan', error: null }
    const fetchData = vi.fn().mockResolvedValue(response)

    const wrapper = mount(DataLoader, { props: { fetchData }, global })

    await flushPromises()

    expect(wrapper.emitted('data-loaded')?.[0]).toEqual([response])
  })

  it('shows the error state and retries on demand', async () => {
    const fetchData = vi.fn().mockRejectedValue(new Error('boom'))

    const wrapper = mount(DataLoader, { props: { fetchData }, global })

    await flushPromises()

    const error = wrapper.find('[data-test="error"]')

    expect(error.exists()).toBe(true)
    expect(error.text()).toContain('boom')

    fetchData.mockResolvedValueOnce({ error: null })

    await wrapper.find('[data-test="action"]').trigger('click')
    await flushPromises()

    expect(fetchData).toHaveBeenCalledTimes(2)
    expect(wrapper.find('[data-test="error"]').exists()).toBe(false)
    expect(wrapper.emitted('retry')).toHaveLength(1)
  })

  it('renders the empty state when isEmpty is set', async () => {
    const wrapper = mount(DataLoader, {
      props: { fetchData: vi.fn().mockResolvedValue({}), isEmpty: true },
      global,
    })

    await flushPromises()

    expect(wrapper.find('[data-test="empty"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('Нет доступных данных')
  })

  it('keeps the external loading flag behaviour', () => {
    const wrapper = mount(DataLoader, {
      props: { fetchData: vi.fn().mockResolvedValue({}), loading: true },
      global,
    })

    expect(wrapper.find('[data-test="loading"]').exists()).toBe(true)
  })
})
