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
    height="300px"
    transition-next="slide-left"
    transition-prev="slide-right"
    animated
    arrows
    swipeable
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
  >
    <q-carousel-slide
      v-for="{ id, image, title, subtitle } in slides"
      :key="id"
      :img-src="image"
      :name="id"
    >
      <div class="absolute-bottom custom-caption">
        <div class="text-h2">
          {{ title }}
        </div>
        <div class="text-subtitle1">
          {{ subtitle }}
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<style lang="scss">
@import './scss/landing-carousel.scss';
</style>
