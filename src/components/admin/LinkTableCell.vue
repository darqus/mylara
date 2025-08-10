<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'LinkTableCell' })

type Props = {
  url?: string | null
  text?: string
  openInNewTab?: boolean
  showFullUrl?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  url: null,
  text: '',
  openInNewTab: true,
  showFullUrl: false,
})

const hasValidUrl = computed(() => {
  if (!props.url) {
    return false
  }
  try {
    new URL(props.url)
    return true
  } catch {
    return false
  }
})

const displayText = computed(() => {
  if (props.text) {
    return props.text
  }
  if (!hasValidUrl.value) {
    return 'Нет ссылки'
  }

  if (props.showFullUrl) {
    return props.url
  }

  try {
    if (!props.url) {
      return 'Неверная ссылка'
    }
    const url = new URL(props.url)
    return url.hostname.replace('www.', '')
  } catch {
    return 'Неверная ссылка'
  }
})

const linkTarget = computed(() => (props.openInNewTab ? '_blank' : '_self'))
</script>

<template>
  <div class="link-table-cell">
    <q-btn
      v-if="hasValidUrl"
      :href="url || undefined"
      :target="linkTarget"
      color="primary"
      size="sm"
      type="a"
      flat
      no-caps
    >
      <q-icon
        class="q-mr-xs"
        name="open_in_new"
        size="16px"
      />
      {{ displayText }}
    </q-btn>

    <div
      v-else
      class="link-table-cell__placeholder"
    >
      <q-icon
        class="q-mr-xs"
        color="grey-5"
        name="link_off"
        size="16px"
      />
      <span class="text-grey-6">Нет ссылки</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.link-table-cell {
  &__placeholder {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    color: var(--q-grey-6);
  }
}
</style>
