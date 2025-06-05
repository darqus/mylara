<script setup lang="ts">
import { ref } from 'vue'
import { LANDING_CAROUSEL } from './landing-carousel/carousel'

const slide = ref(1)
const showDialog = ref(false)
const selectedItem = ref(null)

const openDialog = (item) => {
  selectedItem.value = item
  showDialog.value = true
}
</script>

<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      animated
      arrows
      navigation
      infinite
      :autoplay="3000"
      height="250px"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter-md">
          <div 
            v-for="item in LANDING_CAROUSEL.slice(0, 6)" 
            :key="item.id" 
            class="col-2"
            @click="openDialog(item)"
          >
            <q-card class="my-card cursor-pointer">
              <img :src="item.imgLink" style="height: 140px; width: 100%; object-fit: cover;">
              <q-card-section class="text-center">
                <div class="text-subtitle2">{{ item.label }}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <q-dialog v-model="showDialog">
      <q-card v-if="selectedItem" style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">{{ selectedItem.label }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ selectedItem.info }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Закрыть" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style scoped>
.my-card {
  transition: transform 0.3s;
}
.my-card:hover {
  transform: scale(1.05);
}
</style>