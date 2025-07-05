<script setup lang="ts">
import { ref, onMounted } from 'vue'

import DataLoader from 'src/components/common/data-loader/DataLoader.vue'

import { useDevice } from 'src/composables/useDevice'
import { useImageErrorHandling } from 'src/composables/useImageErrorHandling'
import { getCarouselItems } from 'src/services/carousel.service'
import type { CarouselItem } from 'src/services/carousel.service'

import './scss/landing-carousel.scss'

const { isMobile } = useDevice()

const { handleImageError, handleImageLoad } = useImageErrorHandling()
const currentIndex = ref(0)
const showDialog = ref(false)
const selectedItem = ref<CarouselItem | null>(null)
const carouselRef = ref<HTMLElement | null>(null)
const activeItemId = ref<number | string | null>(null)
const touchStartX = ref()
const touchEndX = ref()

const openDialog = ({ id, img, label, link, info }: CarouselItem) => {
  selectedItem.value = {
    id,
    img,
    label,
    link,
    info,
  }
  showDialog.value = true
  activeItemId.value = id
}

const nextItem = (items: CarouselItem[]) => {
  if (currentIndex.value < items.length - 1) {
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
    const itemWidth = currentItem.clientWidth

    container.scrollTo({
      left: itemWidth * currentIndex.value,
      behavior: 'smooth',
    })
  }
}

// Обработчики touch-событий для свайпа
const handleTouchStart = (event: TouchEvent) => {
  touchStartX.value = event?.touches[0]?.clientX
}

const handleTouchEnd = (event: TouchEvent, items: CarouselItem[]) => {
  if (event.changedTouches && event.changedTouches.length > 0) {
    touchEndX.value = event?.changedTouches[0]?.clientX

    const diffX = touchStartX.value - touchEndX.value

    // Если свайп был достаточно длинным (более 50px)
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Свайп влево - следующий элемент
        nextItem(items)
      } else {
        // Свайп вправо - предыдущий элемент
        prevItem()
      }
    }
  }
}

onMounted(() => {
  if (carouselRef.value) {
    carouselRef.value.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    })

    // touchend обработчик будет добавлен в шаблоне с передачей данных
  }
})
</script>

<template>
  <DataLoader
    :fetch-data="getCarouselItems"
    data-key="items"
  >
    <template #content="{ data: items }">
      <div class="carousel-wrapper relative-position">
        <q-btn
          v-if="!isMobile"
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
          @touchend="
            (e) => handleTouchEnd(e, Array.isArray(items) ? items : [])
          "
        >
          <div
            v-for="{ id, img, label, link, info } in Array.isArray(items)
              ? items
              : []"
            :key="id"
            class="carousel-card-container"
          >
            <q-card
              :class="[{ active: activeItemId === id }]"
              class="cursor-pointer my-card"
              @click="openDialog({ id, img, label, link, info })"
            >
              <img
                :src="img"
                style="height: 200px; object-fit: cover"
                @error="handleImageError"
                @load="handleImageLoad"
              />
              <q-card-section class="text-center">
                <div class="text-subtitle2">
                  {{ label }}
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <q-btn
          v-if="!isMobile"
          :disable="
            currentIndex === (Array.isArray(items) ? items.length : 0) - 1
          "
          class="carousel-nav-btn carousel-next-btn"
          color="primary"
          icon="chevron_right"
          round
          @click="nextItem(Array.isArray(items) ? items : [])"
        />
      </div>
    </template>
  </DataLoader>
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
