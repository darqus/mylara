<template>
  <q-page class="q-pa-md">
    <div class="text-h4 q-mb-md">
      Панель администратора
    </div>

    <div class="text-subtitle1 q-mb-lg text-grey-7">
      Добро пожаловать в админку для управления базой данных
    </div>

    <div class="row q-gutter-md">
      <div
        v-for="collection in collections"
        :key="collection.name"
        class="col-12 col-sm-6 col-md-3"
      >
        <q-card
          v-ripple
          class="admin-dashboard__card cursor-pointer"
          clickable
          @click="navigateToCollection(collection.name)"
        >
          <q-card-section class="text-center">
            <q-icon
              :name="collection.icon"
              class="q-mb-md"
              color="primary"
              size="48px"
            />
            <div class="text-h6">
              {{ collection.label }}
            </div>
            <div class="text-body2 text-grey-6 q-mb-sm">
              Управление записями {{ collection.label.toLowerCase() }}
            </div>

            <!-- Статистика количества записей -->
            <div class="q-mt-md">
              <q-chip
                v-if="collectionStats[collection.name] !== undefined"
                :color="getColorForCollection(collection.name)"
                :label="
                  formatRecordsCount(collectionStats[collection.name] ?? 0)
                "
                text-color="white"
                dense
              />
              <q-chip
                v-else
                color="grey-5"
                label="Загрузка..."
                text-color="white"
                dense
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import {
  ref, onMounted,
} from 'vue'
import { useRouter, } from 'vue-router'

import { useQuasar, } from 'quasar'

import { formatRecordsCount, } from 'src/utils/pluralization'

import { getAllCollections, } from 'src/services/admin-config.service'
import { firestoreService, } from 'src/services/firestore.service'

defineOptions({
  name: 'AdminDashboardPage',
})

const $q = useQuasar()
const router = useRouter()

const collections = getAllCollections()
const collectionStats = ref<Record<string, number>>({})

onMounted(async () => {
  await loadCollectionStats()
})

async function loadCollectionStats() {
  try {
    const statsPromises = collections.map(async (collection) => {
      const response = await firestoreService.getCollection(collection.name)

      return {
        name: collection.name,
        count: response.items.length,
      }
    })

    const stats = await Promise.all(statsPromises)

    collectionStats.value = stats.reduce(
      (acc, stat) => {
        acc[stat.name] = stat.count

        return acc
      },
      {} as Record<string, number>
    )
  } catch (error) {
    console.error('Ошибка загрузки статистики коллекций:', error)
    $q.notify({
      type: 'negative',
      message: 'Ошибка загрузки статистики',
      position: 'top',
    })
  }
}

function getColorForCollection(name: string): string {
  const colors = [
    'primary',
    'secondary',
    'accent',
    'positive',
    'negative',
    'info',
    'warning',
  ]
  const index = name.length % colors.length

  return colors[index] ?? 'primary'
}

function navigateToCollection(collectionName: string) {
  void router.push(`/admin/collection/${collectionName}`)
}
</script>

<style lang="scss">
// Styles moved to /src/css/components/_admin-dashboard.scss
</style>
