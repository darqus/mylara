<!--
  Примеры использования NotificationService в компоненте Vue

  Этот компонент демонстрирует различные способы использования
  сервиса уведомлений в компонентах Vue
-->
<script setup lang="ts">
import { ref, } from 'vue'

import { notificationService, } from 'src/services'

// Данные формы для примера
const formData = ref({
  name: '',
  email: '',
})

// Функция-имитация отправки формы
const submitForm = async () => {
  try {
    // Валидация
    if (!formData.value.name || !formData.value.email) {
      notificationService.warning('Пожалуйста, заполните все поля формы', {
        position: 'top',
        timeout: 3000,
      })

      return
    }

    // Имитация отправки данных на сервер
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Успешное выполнение
    notificationService.success('Форма успешно отправлена!', {
      icon: 'check_circle',
      position: 'bottom',
      closeBtn: true,
    })

    // Сброс формы
    formData.value.name = ''
    formData.value.email = ''
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('error:', error)

    // Обработка ошибок
    notificationService.error('Произошла ошибка при отправке формы', {
      position: 'bottom',
      actions: [
        {
          label: 'Повторить',
          color: 'white',
          handler: () => {
            // submitForm()
          },
        },
      ],
    })

  }
}

// Показать информационное сообщение
const showInfo = () => {
  notificationService.info(
    'Этот компонент демонстрирует использование сервиса уведомлений',
    {
      icon: 'info',
      position: 'top-right',
      timeout: 5000,
    }
  )
}

// Показать комплексное уведомление
const showComplexNotification = () => {
  notificationService.warning(
    'Вы собираетесь выполнить важное действие',
    {
      icon: 'warning',
      position: 'center',
      multiLine: true,
      html: true,
      caption: 'Пожалуйста, подтвердите свой выбор',
      actions: [
        {
          label: 'Подтвердить',
          color: 'white',
          handler: () => {
            notificationService.success('Действие выполнено')
          },
        },
        {
          label: 'Отмена',
          color: 'white',
        },
      ],
      timeout: 0,
    }
  )
}
</script>

<template>
  <div class="q-pa-md notification-examples">
    <h2 class="text-h5 q-mb-md">
      Примеры уведомлений
    </h2>

    <!-- Кнопки для демонстрации простых уведомлений -->
    <div class="q-mb-lg">
      <h3 class="text-subtitle1 q-mb-sm">
        Простые уведомления:
      </h3>
      <div class="row q-col-gutter-sm">
        <div class="col-auto">
          <q-btn
            color="positive"
            label="Успех"
            @click="notificationService.success('Операция успешно выполнена')"
          />
        </div>
        <div class="col-auto">
          <q-btn
            color="negative"
            label="Ошибка"
            @click="notificationService.error('Произошла ошибка')"
          />
        </div>
        <div class="col-auto">
          <q-btn
            color="warning"
            label="Предупреждение"
            @click="notificationService.warning('Внимание! Это важное сообщение')"
          />
        </div>
        <div class="col-auto">
          <q-btn
            color="info"
            label="Информация"
            @click="notificationService.info('Полезная информация')"
          />
        </div>
      </div>
    </div>

    <!-- Кнопки для демонстрации расширенных уведомлений -->
    <div class="q-mb-lg">
      <h3 class="text-subtitle1 q-mb-sm">
        Расширенные варианты:
      </h3>
      <div class="row q-col-gutter-sm">
        <div class="col-auto">
          <q-btn
            color="primary"
            label="С позицией"
            @click="notificationService.info('Уведомление вверху справа', {
              position: 'top-right'
            })"
          />
        </div>
        <div class="col-auto">
          <q-btn
            color="primary"
            label="С иконкой"
            @click="notificationService.success('Успешно сохранено', {
              icon: 'save'
            })"
          />
        </div>
        <div class="col-auto">
          <q-btn
            color="primary"
            label="С кнопкой закрытия"
            @click="notificationService.info('Нажмите X для закрытия', {
              closeBtn: true
            })"
          />
        </div>
        <div class="col-auto">
          <q-btn
            color="primary"
            label="Комплексное"
            @click="showComplexNotification"
          />
        </div>
      </div>
    </div>

    <!-- Пример использования в форме -->
    <div class="q-pa-md q-mb-lg form-example">
      <h3 class="text-subtitle1 q-mb-md">
        Пример с формой:
      </h3>
      <q-form @submit.prevent="submitForm">
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-6">
            <q-input
              v-model="formData.name"
              label="Имя"
              dense
              outlined
            />
          </div>
          <div class="col-12 col-sm-6">
            <q-input
              v-model="formData.email"
              label="Email"
              type="email"
              dense
              outlined
            />
          </div>
        </div>

        <div class="q-mt-md">
          <q-btn
            color="primary"
            label="Отправить форму"
            type="submit"
          />
        </div>
      </q-form>
    </div>

    <div class="q-mt-xl text-center">
      <q-btn
        color="secondary"
        icon="info"
        label="О компоненте"
        @click="showInfo"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-example {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fafafa;
}

.notification-examples {
  max-width: 800px;
  margin: 0 auto;
}
</style>
