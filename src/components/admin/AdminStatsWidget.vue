<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 q-mb-md">
        Статистика коллекций
      </div>

      <div
        v-if="loading"
        class="text-center q-py-lg"
      >
        <q-spinner
          color="primary"
          size="2em"
        />
        <div class="q-mt-md text-grey-6">
          Загрузка статистики...
        </div>
      </div>

      <div
        v-else
        class="row q-gutter-md"
      >
        <div
          v-for="stat in stats"
          :key="stat.name"
          class="col-12 col-sm-6 col-md-4"
        >
          <q-card
            class="text-center q-pa-md"
            bordered
            flat
          >
            <q-icon
              :color="stat.color"
              :name="stat.icon"
              class="q-mb-sm"
              size="32px"
            />
            <div class="text-h4 text-weight-bold">
              {{ stat.count }}
            </div>
            <div class="text-body2 text-grey-6">
              {{ stat.label }}
            </div>
          </q-card>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import {
  ref, onMounted,
} from 'vue'

import { getAllCollections, } from 'src/services/admin-config.service'
import { firestoreService, } from 'src/services/firestore.service'

defineOptions({
  name: 'AdminStatsWidget',
})

type CollectionStat = {
  name: string
  label: string
  icon: string
  color: string
  count: number
}

const loading = ref(true)
const stats = ref<CollectionStat[]>([])

onMounted(async () => {
  await loadStats()
})

async function loadStats() {
  loading.value = true

  try {
    const collections = getAllCollections()
    const statsPromises = collections.map(async (collection) => {
      const response = await firestoreService.getCollection(collection.name)

      return {
        name: collection.name,
        label: collection.label,
        icon: collection.icon,
        color: getColorForCollection(collection.name),
        count: response.items.length,
      }
    })

    stats.value = await Promise.all(statsPromises)
  } finally {
    loading.value = false
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
</script>
