<template>
  <q-card
    class="landing-card"
    @click="emit('click', id)"
  >
    <q-img
      v-if="imgLink"
      :src="imgLink"
    />
    <q-card-section>
      <div class="text-subtitle2">
        ID: {{ id }}
      </div>
      <div class="text-body2">
        {{ label }}
      </div>
    </q-card-section>
    <q-card-actions
      v-if="externalLink"
      align="right"
    >
      <q-btn
        :to="externalLink"
        color="primary"
        target="_blank"
        flat
      >
        <q-icon name="open_in_new" />
        <span class="q-ml-sm">Открыть</span>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
defineOptions({
  name: 'LandingCard',
})

defineProps<{
  id: string | number
  imgLink?: string
  label?: string
  externalLink?: string
}>()

const emit = defineEmits<{
  (e: 'click', id: string | number): void;
}>()
</script>

<style lang="scss">
@import './scss/landing-card';
</style>
