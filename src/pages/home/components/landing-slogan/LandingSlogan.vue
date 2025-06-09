<script setup lang="ts">
import { useSlogan, } from './useSlogan'

const {
  slogan, loading, error, 
} = useSlogan()
</script>

<template>
  <div class="q-pt-xl q-px-md relative-position">
    <q-inner-loading :showing="loading">
      <q-spinner-dots
        color="primary"
        size="40px"
      />
    </q-inner-loading>

    <div
      v-if="error"
      class="text-center text-negative"
    >
      <q-icon
        class="q-mr-xs"
        color="negative"
        name="error"
        size="1rem"
      />
      {{ error }}
    </div>

    <div v-else>
      {{ slogan }}
    </div>
  </div>
</template>
