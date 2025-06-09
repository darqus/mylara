<script setup lang="ts">
import { ref, } from 'vue'

import { useQuasar, } from 'quasar'

import './scss/landing-banner.scss'
import { slides, } from './slides'

const $q = useQuasar()
const slide = ref(1)
</script>

<template>
  <q-carousel
    v-model="slide"
    :class="{
      'height-xs': $q.screen.xs,
      'height-sm': $q.screen.sm,
      'height-md': $q.screen.md,
      'height-lg': $q.screen.lg || $q.screen.xl
    }"
    class="bg-white text-white"
    transition-next="slide-left"
    transition-prev="slide-right"
    animated
    arrows
    autoplay
    infinite
    swipeable
  >
    <q-carousel-slide
      v-for="{ id, img, title, subtitle } in slides"
      :key="id"
      :img-src="img"
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
