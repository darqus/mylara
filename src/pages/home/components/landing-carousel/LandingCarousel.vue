<script setup lang="ts">
import {
  ref, computed,
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

const items = computed<Card[][]>(() => {
  const itemsPerPage = 5
  const pages = Math.ceil(LANDING_CAROUSEL.length / itemsPerPage)
  const result: Card[][] = []

  for (let i = 0; i < pages; i++) {
    result.push(LANDING_CAROUSEL.slice(i * itemsPerPage, (i + 1) * itemsPerPage))
  }

  return result
})
</script>

<template>
  <q-carousel
    v-model="slide"
    height="400px"
    animated
    arrows
    infinite
    navigation
  >
    <q-carousel-slide
      v-for="(page, index) in items"
      :key="index"
      :name="index + 1"
    >
      <div class="row items-center justify-start q-gutter-md">
        <div
          v-for="item in page"
          :key="item.id"
          class="carousel-item"
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
