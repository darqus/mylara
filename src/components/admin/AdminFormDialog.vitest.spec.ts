import type { CollectionConfig } from '@/types/admin'

import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import AdminFormDialog from './AdminFormDialog.vue'

const config: CollectionConfig = {
  name: 'slogan',
  label: 'Слоган',
  icon: 'o_campaign',
  fields: [
    { name: 'title', label: 'Текст', type: 'text', required: true },
    { name: 'order', label: 'Порядок', type: 'number' },
    { name: 'published', label: 'Опубликовано', type: 'boolean' },
    {
      name: 'accent',
      label: 'Акцент',
      type: 'select',
      options: [{ label: 'Основной', value: 'primary' }],
      defaultValue: 'primary',
    },
  ],
  columns: [],
}

const QInputStub = {
  props: ['modelValue', 'label', 'type'],
  emits: ['update:modelValue'],
  template: '<input :value="modelValue" />',
}

const QSelectStub = {
  props: ['modelValue', 'label'],
  template: '<select />',
}

const QCheckboxStub = {
  props: ['modelValue', 'label'],
  template: '<input type="checkbox" :checked="modelValue" />',
}

/**
 * Builds a fresh QForm stub whose `validate()` resolves to the given value.
 * The dialog switches on that result, so each submit test controls it.
 */
function createGlobal(valid: boolean) {
  const validate = vi.fn(() => Promise.resolve(valid))

  return {
    validate,
    global: {
      stubs: {
        QDialog: { template: '<div data-test="dialog"><slot /></div>' },
        QCard: { template: '<div><slot /></div>' },
        QCardSection: { template: '<div><slot /></div>' },
        QCardActions: { template: '<div><slot /></div>' },
        QForm: {
          methods: { validate },
          template:
            '<form data-test="form" @submit.prevent="$emit(\'submit\')"><slot /></form>',
        },
        QInput: QInputStub,
        QSelect: QSelectStub,
        QCheckbox: QCheckboxStub,
        QBtn: true,
        QIcon: true,
        QSeparator: true,
      },
    },
  }
}

/**
 * Reads the values the dialog passes to its text/number inputs, keyed by field
 * name taken from the stub's `label`.
 */
function formDataOf(
  wrapper: ReturnType<typeof mount>
): Record<string, unknown> {
  const result: Record<string, unknown> = {}

  wrapper.findAllComponents(QInputStub).forEach((input) => {
    const { modelValue } = input.props() as { modelValue: unknown }
    const field = config.fields.find(
      (candidate) => candidate.label === input.props('label')
    )

    if (field) {
      result[field.name] = modelValue
    }
  })

  return result
}

function mountDialog(props: {
  item?: Record<string, unknown> | null
  modelValue?: boolean
  valid?: boolean
}) {
  const { global, validate } = createGlobal(props.valid ?? true)

  const wrapper = mount(AdminFormDialog, {
    props: {
      modelValue: true,
      config,
      item: props.item ?? null,
      ...props,
    },
    global,
  })

  return { wrapper, validate }
}

/**
 * Submits the dialog form and flushes the async validate() chain.
 */
async function submit(wrapper: ReturnType<typeof mount>) {
  await wrapper.find('[data-test="form"]').trigger('submit')
  await wrapper.vm.$nextTick()
  await wrapper.vm.$nextTick()
}

function submittedPayload(
  wrapper: ReturnType<typeof mount>
): Record<string, unknown> {
  return wrapper.emitted('save')?.[0]?.[0] as Record<string, unknown>
}

describe('AdminFormDialog', () => {
  it('fills defaults for each field type when creating', () => {
    const { wrapper } = mountDialog({})
    const form = formDataOf(wrapper)

    expect(wrapper.text()).toContain('Создать запись')
    expect(form.title).toBe('')
    expect(form.order).toBe(0)
    expect(wrapper.findComponent(QCheckboxStub).props('modelValue')).toBe(false)
    expect(wrapper.findComponent(QSelectStub).props('modelValue')).toBe(
      'primary'
    )
  })

  it('copies the item into the form when editing', () => {
    const { wrapper } = mountDialog({
      item: { id: 'slogan-1', title: 'Hello', order: 3 },
    })

    const form = formDataOf(wrapper)

    expect(wrapper.text()).toContain('Редактировать запись')
    expect(form.title).toBe('Hello')
    expect(form.order).toBe(3)
  })

  it('emits save with the form data after a successful validation', async () => {
    const { wrapper, validate } = mountDialog({})

    await submit(wrapper)

    expect(validate).toHaveBeenCalled()
    expect(submittedPayload(wrapper)).toEqual({
      title: '',
      order: 0,
      published: false,
      accent: 'primary',
    })
  })

  it('does not submit an invalid form', async () => {
    const { wrapper } = mountDialog({ valid: false })

    await submit(wrapper)

    expect(wrapper.emitted('save')).toBeUndefined()
  })

  it('strips service fields when creating', async () => {
    const { wrapper } = mountDialog({})

    await submit(wrapper)

    const payload = submittedPayload(wrapper)

    expect(payload).not.toHaveProperty('id')
    expect(payload).not.toHaveProperty('createdAt')
    expect(payload).not.toHaveProperty('updatedAt')
    expect(payload).toHaveProperty('title')
  })

  it('keeps service fields when editing', async () => {
    const { wrapper } = mountDialog({
      item: { id: 'slogan-1', title: 'Hello' },
    })

    await submit(wrapper)

    expect(submittedPayload(wrapper).id).toBe('slogan-1')
  })

  it('resets the form when the dialog closes', async () => {
    const { wrapper } = mountDialog({
      item: { id: 'slogan-1', title: 'Hello' },
    })

    expect(formDataOf(wrapper).title).toBe('Hello')

    await wrapper.setProps({ modelValue: false, item: null })
    await wrapper.vm.$nextTick()

    expect(formDataOf(wrapper).title).toBe('')
  })
})
