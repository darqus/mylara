<script setup lang="ts">
import { ref, } from 'vue'

import { slides, } from './slides'

const slide = ref(1)
const autoplay = ref(true)
</script>

<template>
  <q-carousel
    v-model="slide"
    :autoplay="autoplay"
    class="q-mb-md"
    transition-next="slide-left"
    transition-prev="slide-right"
    animated
    arrows
    navigation
    padding
    swipeable
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
  >
    <q-carousel-slide
      v-for="{ id, image, title } in slides"
      :key="id"
      :img-src="image"
      :name="id"
    >
      <div class="absolute-bottom custom-caption text-h2 text-center">
        {{ title }}
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>
