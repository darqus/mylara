<script setup lang="ts">
import { ref, } from 'vue'

import LandingCard from 'src/components/common/card/LandingCard.vue'

import type { Card, } from './cards'
import { LANDING_CARDS, } from './cards'

const cards = ref<Card[]>(LANDING_CARDS)

const handleCardClick = (id: number | string) => {
  console.warn('Карточка выбрана:', id)
}
</script>

<template>
  <div class="q-pa-md">
    <div class="q-container">
      <div class="row q-col-gutter-md">
        <div
          v-for="{ id, description, externalLink, imgLink } in cards"
          :key="id"
          class="col-12 col-sm-6 col-md-4"
        >
          <LandingCard
            :id="id"
            :description="description"
            :external-link="externalLink"
            :img-link="imgLink"
            @click="handleCardClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>
