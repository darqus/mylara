<script setup lang="ts">
import { ref, } from 'vue'

import { slides, } from './slides'

const slide = ref(1)
</script>

<template>
  <q-carousel
    v-model="slide"
    class="bg-primary text-white"
    height="600px"
    transition-next="slide-left"
    transition-prev="slide-right"
    animated
    arrows
    autoplay
    infinite
    swipeable
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
