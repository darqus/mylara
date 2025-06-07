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

// Параметры тороида
const horizontalRadius = 320 // Горизонтальный радиус тороида
const verticalRadius = 90   // Вертикальный радиус тороида
const itemCount = computed(() => items.value.length)

// Получаем стиль для каждой карточки в тороиде
const getCardStyle = (index: number) => {
  // Вычисляем угол для текущего элемента
  const angle = (index * 2 * Math.PI) / itemCount.value

  // Вычисляем позицию на тороиде
  const x = Math.sin(angle) * horizontalRadius
  const y = Math.cos(angle) * verticalRadius
  const z = Math.cos(angle) * horizontalRadius

  // Вычисляем масштаб в зависимости от положения (элементы спереди больше)
  const scale = mapRange(z, -horizontalRadius, horizontalRadius, 0.6, 1.2)

  // Вычисляем непрозрачность (элементы спереди более непрозрачные)
  const opacity = mapRange(z, -horizontalRadius, horizontalRadius, 0.5, 1)

  // Вычисляем z-index (элементы спереди имеют больший z-index)
  const zIndex = Math.floor(mapRange(z, -horizontalRadius, horizontalRadius, 1, 1000))

  return {
    transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${angle * (180 / Math.PI)}deg)`,
    opacity,
    zIndex,
    scale,
  }
}

// Вспомогательная функция для маппинга диапазонов
const mapRange = (value: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

// Вращение карусели
const rotateCarousel = (direction: 'next' | 'prev') => {
  if (direction === 'next') {
    currentIndex.value = (currentIndex.value + 1) % itemCount.value
  } else {
    currentIndex.value = (currentIndex.value - 1 + itemCount.value) % itemCount.value
  }

  updateCarouselRotation()
}

// Обновление поворота карусели
const updateCarouselRotation = () => {
  if (carouselContainer.value) {
    const angle = (360 / itemCount.value) * currentIndex.value

    carouselContainer.value.style.transform = `rotateY(${-angle}deg)`
  }
}

// Выбор карточки
const selectCard = (index: number, item: CarouselItem) => {
  if (index === currentIndex.value) {
    selectedItem.value = item
    activeItemId.value = item.id
    showDialog.value = true
  } else {
    // Если нажали на другую карточку, поворачиваем карусель к ней
    const steps = (index - currentIndex.value + itemCount.value) % itemCount.value

    // Определяем, в какую сторону крутить (по кратчайшему пути)
    if (steps <= itemCount.value / 2) {
      // Крутим вперед
      const interval = setInterval(() => {
        rotateCarousel('next')
        if (currentIndex.value === index) {
          clearInterval(interval)
        }
      }, 200)
    } else {
      // Крутим назад
      const interval = setInterval(() => {
        rotateCarousel('prev')
        if (currentIndex.value === index) {
          clearInterval(interval)
        }
      }, 200)
    }
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
            style="height: 180px; width: 100%; object-fit: cover;"
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
