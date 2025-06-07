<script setup lang="ts">
import {
  ref, computed,
} from 'vue'

import type { CarouselItem, } from './carousel'
import { LANDING_CAROUSEL, } from './carousel'

const currentIndex = ref(0)
const showDialog = ref(false)
const selectedItem = ref<CarouselItem | null>(null)
const carouselRef = ref<unknown>(null)
const activeItemId = ref<number | string | null>(null)

const openDialog = ({
  id, imgLink, label, externalLink, info,
}: CarouselItem) => {
  selectedItem.value = {
    id, imgLink, label, externalLink, info,
  }
  showDialog.value = true
  activeItemId.value = id
}

const visibleItems = computed(() => {
  return LANDING_CAROUSEL
})

const nextItem = () => {
  if (currentIndex.value < LANDING_CAROUSEL.length - 1) {
    currentIndex.value++
    scrollToCurrentItem()
  }
}

const prevItem = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    scrollToCurrentItem()
  }
}

const scrollToCurrentItem = () => {
  const container = document.querySelector('.carousel-items-container')
  const items = document.querySelectorAll('.carousel-card-container')
  const currentItem = items[currentIndex.value]

  if (container && currentItem) {
    const itemWidth = currentItem.clientWidth || 0

    container.scrollTo({
      left: itemWidth * currentIndex.value,
      behavior: 'smooth',
    })
  }
}

</script>

<template>
  <div class="carousel-wrapper">
    <q-btn
      :disable="currentIndex === 0"
      class="carousel-nav-btn carousel-prev-btn"
      color="primary"
      icon="chevron_left"
      round
      @click="prevItem"
    />

    <div
      ref="carouselRef"
      class="carousel-items-container q-py-lg q-my-sm"
    >
      <div
        v-for="({ id, imgLink, label, externalLink, info }) in visibleItems"
        :key="id"
        class="carousel-card-container"
      >
        <q-card
          :class="['cursor-pointer my-card', { 'active': activeItemId === id }]"
          @click="openDialog({ id, imgLink, label, externalLink, info })"
        >
          <img
            :src="imgLink"
            style="height: 200px; object-fit: cover;"
          >
          <q-card-section class="text-center">
            <div class="text-subtitle2">
              {{ label }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-btn
      :disable="currentIndex === LANDING_CAROUSEL.length - 1"
      class="carousel-nav-btn carousel-next-btn"
      color="primary"
      icon="chevron_right"
      round
      @click="nextItem"
    />
  </div>

  <q-dialog
    v-model="showDialog"
    @hide="activeItemId = null"
  >
    <q-card
      v-if="selectedItem"
      style="max-width: 350px"
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
