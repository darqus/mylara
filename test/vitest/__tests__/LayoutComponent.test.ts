import { mount } from '@vue/test-utils'

import { describe, expect, it } from 'vitest'

import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest'

import LayoutComponent from './demo/LayoutComponent.vue'

installQuasarPlugin()

describe('layout example', () => {
  it('should mount component properly', () => {
    const wrapper = mount(LayoutComponent)

    expect(wrapper.exists()).toBe(true)
  })
})
