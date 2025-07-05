<script setup lang="ts">
import { ref, } from 'vue'

import { useQuasar, } from 'quasar'

import DataLoader from 'src/components/common/data-loader/DataLoader.vue'

import { useImageErrorHandling, } from 'src/composables/useImageErrorHandling'
import { getSlides, } from 'src/services/slides.service'

import './scss/landing-slider.scss'

const $q = useQuasar()
const slide = ref(1)

const {
  getSafeImageSrc,
} = useImageErrorHandling()
</script>

<template>
  <DataLoader
    :fetch-data="getSlides"
    data-key="slides"
  >
    <template #content="{ data: slides }">
      <q-carousel
        v-model="slide"
        :class="{
          'height-xs': $q.screen.xs,
          'height-sm': $q.screen.sm,
          'height-md': $q.screen.md,
          'height-lg': $q.screen.lg || $q.screen.xl,
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
          v-for="{ id, img, title, subtitle } in slides || []"
          :key="id"
          :img-src="getSafeImageSrc(img)"
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
  </DataLoader>
</template>
