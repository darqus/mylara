<script setup lang="ts">
import {
  ref, computed, onMounted, onUnmounted,
} from 'vue'

import type { Card, } from './carousel'
import { LANDING_CAROUSEL, } from './carousel'

const slide = ref(1)
const showDialog = ref(false)
const selectedItem = ref<Card | null>(null)

const openDialog = (item: Card) => {
  selectedItem.value = item
  showDialog.value = true
}

const screenWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1440)

// Update screen width on resize
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth
}

// Add event listener for window resize
onMounted(() => {
  window.addEventListener('resize', updateScreenWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth)
})

// Compute items per page based on screen width
const itemsPerPage = computed(() => {
  if (screenWidth.value < 600) {return 1}       // xs: 1 item
  if (screenWidth.value < 1024) {return 2}      // sm-md: 2 items
  if (screenWidth.value < 1440) {return 3}      // lg: 3 items
  if (screenWidth.value < 1920) {return 4}      // xl: 4 items

  return 5                                    // >xl: 5 items
})

const items = computed<Card[][]>(() => {
  const perPage = itemsPerPage.value
  const pages = Math.ceil(LANDING_CAROUSEL.length / perPage)
  const result: Card[][] = []

  for (let i = 0; i < pages; i++) {
    result.push(LANDING_CAROUSEL.slice(i * perPage, (i + 1) * perPage))
  }

  return result
})
</script>

<template>
  <q-carousel
    v-model="slide"
    control-color="primary"
    transition-next="slide-left"
    transition-prev="slide-right"
    animated
    arrows
    infinite
    navigation
  >
    <q-carousel-slide
      v-for="(page, index) in items"
      :key="index"
      :name="index + 1"
      class="column no-wrap"
    >
      <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
        <div
          v-for="item in page"
          :key="item.id"
          class="carousel-card-container"
          @click="openDialog(item)"
        >
          <q-card class="cursor-pointer my-card">
            <img
              :src="item.imgLink"
              style="height: 200px; object-fit: cover;"
            >
            <q-card-section class="text-center">
              <div class="text-subtitle2">
                {{ item.label }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>

  <q-dialog v-model="showDialog">
    <q-card
      v-if="selectedItem"
      style="min-width: 350px"
    >
      <q-card-section>
        <div class="text-h6">
          {{ selectedItem.label }}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ selectedItem.info }}
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          v-close-popup
          color="primary"
          label="Закрыть"
          flat
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="scss">
@import './scss/landing-carousel';
</style>
