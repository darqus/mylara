<template>
  <q-page class="q-pa-md">
    <div class="text-h4 q-mb-md">
      Панель администратора
    </div>

    <div class="text-subtitle1 q-mb-lg text-grey-7">
      Добро пожаловать в админку для управления базой данных
    </div>

    <!-- Статистика -->
    <AdminStatsWidget class="q-mb-lg" />

    <div class="row q-gutter-md">
      <div
        v-for="collection in collections"
        :key="collection.name"
        class="col-12 col-sm-6 col-md-4"
      >
        <q-card
          v-ripple
          class="admin-card cursor-pointer"
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
            <div class="text-body2 text-grey-6">
              Управление записями {{ collection.label.toLowerCase() }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-separator class="q-my-lg" />

    <div class="text-h6 q-mb-md">
      Быстрые действия
    </div>

    <div class="row q-gutter-md">
      <q-btn
        color="primary"
        icon="add"
        label="Создать коллекцию"
        @click="showCreateCollectionDialog = true"
      />
      <q-btn
        color="secondary"
        icon="refresh"
        label="Обновить данные"
        @click="refreshData"
      />
    </div>

    <!-- Диалог создания коллекции -->
    <q-dialog v-model="showCreateCollectionDialog">
      <q-card style="min-width: 400px">
        <q-card-section>
          <div class="text-h6">
            Создать новую коллекцию
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            v-model="newCollectionName"
            label="Название коллекции"
            placeholder="Введите название коллекции"
            filled
          />
        </q-card-section>

        <q-card-actions
          align="right"
          class="text-primary"
        >
          <q-btn
            label="Отмена"
            flat
            @click="showCreateCollectionDialog = false"
          />
          <q-btn
            label="Создать"
            flat
            @click="createCollection"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref, } from 'vue'
import { useRouter, } from 'vue-router'

import { useQuasar, } from 'quasar'

import AdminStatsWidget from 'src/components/admin/AdminStatsWidget.vue'

import { getAllCollections, } from 'src/services/admin-config.service'

defineOptions({
  name: 'AdminDashboardPage',
})

const $q = useQuasar()
const router = useRouter()

const collections = getAllCollections()
const showCreateCollectionDialog = ref(false)
const newCollectionName = ref('')

function navigateToCollection(collectionName: string) {
  void router.push(`/admin/collection/${collectionName}`)
}

function refreshData() {
  $q.notify({
    type: 'positive',
    message: 'Данные обновлены',
    position: 'top',
  })
}

function createCollection() {
  if (!newCollectionName.value.trim()) {
    $q.notify({
      type: 'negative',
      message: 'Введите название коллекции',
      position: 'top',
    })

    return
  }

  // TODO: Реализовать создание коллекции
  $q.notify({
    type: 'info',
    message: `Создание коллекции "${newCollectionName.value}" (в разработке)`,
    position: 'top',
  })

  showCreateCollectionDialog.value = false
  newCollectionName.value = ''
}
</script>

<style lang="scss" scoped>
.admin-card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
}
</style>
