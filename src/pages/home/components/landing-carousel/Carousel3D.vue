<script setup lang="ts">
import {
  ref, computed, onMounted,
} from 'vue'

import type { CarouselItem, } from './carousel'
import { LANDING_CAROUSEL, } from './carousel'
import './scss/landing-carousel-3d.scss'

// Пример данных
const items = ref<CarouselItem[]>(LANDING_CAROUSEL)

const currentIndex = ref(0)
const showDialog = ref(false)
const selectedItem = ref<CarouselItem | null>(null)
const activeItemId = ref<number | string | null>(null)
const carouselContainer = ref<HTMLElement | null>(null)
const radius = 100 // Радиус круга карусели

// Вычисляем угол для каждой карточки
const theta = computed(() => 360 / items.value.length)

// Получаем стиль для каждой карточки
const getCardStyle = (index: number) => {
  const angle = theta.value * index
  const rotateY = angle
  const translateZ = radius

  return {
    transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px) translateX(-50%) translateY(-50%)`,
  }
}

// Вращение карусели
const rotateCarousel = (direction: 'next' | 'prev') => {
  if (direction === 'next') {
    currentIndex.value = (currentIndex.value + 1) % items.value.length
  } else {
    currentIndex.value = (currentIndex.value - 1 + items.value.length) % items.value.length
  }

  updateCarouselRotation()
}

// Обновление поворота карусели
const updateCarouselRotation = () => {
  if (carouselContainer.value) {
    const angle = -theta.value * currentIndex.value

    carouselContainer.value.style.transform = `rotateY(${angle}deg)`
  }
}

// Выбор карточки
const selectCard = (index: number, item: CarouselItem) => {
  currentIndex.value = index
  selectedItem.value = item
  activeItemId.value = item.id
  updateCarouselRotation()

  if (index === currentIndex.value) {
    showDialog.value = true
  }
}

// Инициализация карусели
onMounted(() => {
  updateCarouselRotation()
})
</script>

<template>
  <div class="carousel-wrapper">
    <q-btn
      class="carousel-nav-btn carousel-prev-btn"
      color="primary"
      icon="chevron_left"
      round
      @click="rotateCarousel('prev')"
    />

    <div
      ref="carouselContainer"
      class="carousel-3d-container"
    >
      <div
        v-for="(item, index) in items"
        :key="item.id"
        :class="{ 'active': currentIndex === index }"
        :style="getCardStyle(index)"
        class="carousel-card-container"
        @click="selectCard(index, item)"
      >
        <q-card
          :class="{ 'active': currentIndex === index }"
          class="my-card"
        >
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

    <q-btn
      class="carousel-nav-btn carousel-next-btn"
      color="primary"
      icon="chevron_right"
      round
      @click="rotateCarousel('next')"
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
