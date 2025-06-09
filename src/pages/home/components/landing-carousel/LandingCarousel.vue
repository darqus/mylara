<script setup lang="ts">
import {
  ref, computed, onMounted,
} from 'vue'

import { useDevice, } from 'src/composables/useDevice'

import { useCarouselData, } from './carousel'
import type { CarouselItem, } from './carousel'
import './scss/landing-carousel.scss'

const {
  isMobile,
} = useDevice()
const currentIndex = ref(0)
const showDialog = ref(false)
const selectedItem = ref<CarouselItem | null>(null)
const carouselRef = ref<HTMLElement | null>(null)
const activeItemId = ref<number | string | null>(null)
const touchStartX = ref(0)

// Получаем данные из сервиса
const {
  carouselItems, loading, error, refresh,
} = useCarouselData()

const openDialog = ({
  id, img, label, link, info,
}: CarouselItem) => {
  selectedItem.value = {
    id, img, label, link, info,
  }
  showDialog.value = true
  activeItemId.value = id
}

const visibleItems = computed(() => {
  return carouselItems.value
})

const nextItem = () => {
  if (currentIndex.value < carouselItems.value.length - 1) {
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

// Обработчики touch-событий для свайпа
const handleTouchStart = (event: TouchEvent) => {
  touchStartX.value = event.touches[0].clientX
}

const handleTouchEnd = (event: TouchEvent) => {
  const touchEndX = event.changedTouches[0].clientX
  const diffX = touchStartX.value - touchEndX

  // Если свайп был достаточно длинным (более 50px)
  if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      // Свайп влево - следующий элемент
      nextItem()
    } else {
      // Свайп вправо - предыдущий элемент
      prevItem()
    }
  }
}

onMounted(() => {
  if (carouselRef.value) {
    carouselRef.value.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    })
    carouselRef.value.addEventListener('touchend', handleTouchEnd, {
      passive: true,
    })
  }
})
</script>

<template>
  <div class="carousel-wrapper relative-position">
    <q-inner-loading :showing="loading">
      <q-spinner-dots
        color="primary"
        size="40px"
      />
    </q-inner-loading>

    <template v-if="error">
      <div class="text-center q-pa-md">
        <q-icon
          color="negative"
          name="error"
          size="2rem"
        />
        <p class="text-negative">
          {{ error }}
        </p>
        <q-btn
          color="primary"
          label="Повторить"
          @click="refresh"
        />
      </div>
    </template>

    <template v-else-if="carouselItems.length === 0 && !loading">
      <div class="text-center q-pa-md">
        <q-icon
          color="info"
          name="info"
          size="2rem"
        />
        <p>Нет доступных данных</p>
      </div>
    </template>

    <template v-else>
      <q-btn
        v-if="!isMobile && !loading"
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
          v-for="({ id, img, label, link, info }) in visibleItems"
          :key="id"
          class="carousel-card-container"
        >
          <q-card
            :class="['cursor-pointer my-card', { 'active': activeItemId === id }]"
            @click="openDialog({ id, img, label, link, info })"
          >
            <img
              :src="img"
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
        v-if="!isMobile && !loading"
        :disable="currentIndex === carouselItems.length - 1"
        class="carousel-nav-btn carousel-next-btn"
        color="primary"
        icon="chevron_right"
        round
        @click="nextItem"
      />
    </template>
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
