<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-grey-1">
        <!-- Показываем спиннер пока идет инициализация -->
        <div
          v-if="initializing"
          class="text-center"
        >
          <q-circular-progress
            :thickness="0.2"
            class="q-ma-md"
            color="primary"
            size="50px"
            indeterminate
          />
          <div class="text-body2 text-grey-8 q-mt-md">
            Инициализация...
          </div>
        </div>

        <!-- Форма логина -->
        <q-card
          v-else
          class="q-pa-lg"
          style="min-width: 400px"
        >
          <q-card-section class="text-center">
            <div class="text-h4 text-grey-8 q-mb-md">
              Админка
            </div>
            <div class="text-subtitle1 text-grey-6">
              Вход в панель администратора
            </div>
          </q-card-section>

          <q-card-section>
            <q-form
              ref="formRef"
              @submit="handleLogin"
            >
              <q-input
                v-model="email"
                :error="hasError && !email"
                autocomplete="username"
                error-message="Введите email"
                label="Email"
                type="email"
                clearable
                filled
              >
                <template #prepend>
                  <q-icon name="o_email" />
                </template>
              </q-input>

              <q-input
                v-model="password"
                :error="hasError && !password"
                :error-message="errorMessage || 'Введите пароль'"
                :type="getPasswordInputType()"
                autocomplete="current-password"
                class="q-mt-md"
                label="Пароль"
                clearable
                filled
                @keyup.enter="handleLogin"
              >
                <template #prepend>
                  <q-icon name="o_lock" />
                </template>
                <template #append>
                  <q-icon
                    :name="getPasswordToggleIcon()"
                    class="cursor-pointer"
                    @click="togglePassword"
                  />
                </template>
              </q-input>

              <div class="q-mt-lg">
                <q-btn
                  :loading="loading"
                  class="full-width"
                  color="primary"
                  label="Войти"
                  size="lg"
                  type="submit"
                />
              </div>
            </q-form>
          </q-card-section>

          <q-card-section class="text-center">
            <div class="text-caption text-grey-6">
              Используйте свои учетные данные Firebase Auth
            </div>

            <!-- Показываем кнопку регистрации только если нет аутентифицированных пользователей -->
            <!-- <div
              v-if="showRegistrationOption"
              class="q-mt-md"
            >
              <q-btn
                :loading="registrationLoading"
                color="secondary"
                label="Создать администратора"
                flat
                @click="showRegistrationDialog = true"
              />
            </div> -->
          </q-card-section>
        </q-card>

        <!-- Диалог регистрации администратора -->
        <q-dialog
          v-model="showRegistrationDialog"
          persistent
        >
          <q-card style="min-width: 400px">
            <q-card-section>
              <div class="text-h6">
                Создание администратора
              </div>
              <div class="text-caption text-grey-6 q-mt-sm">
                Эта опция доступна только для первоначальной настройки
              </div>
            </q-card-section>

            <q-card-section>
              <q-form
                ref="registerFormRef"
                @submit="handleRegister"
              >
                <q-input
                  v-model="registerEmail"
                  :rules="[
                    (val) => !!val || 'Введите email',
                    (val) =>
                      /.+@.+\..+/.test(val) || 'Введите корректный email',
                  ]"
                  label="Email администратора"
                  type="email"
                  filled
                />

                <q-input
                  v-model="registerPassword"
                  :rules="[
                    (val) => !!val || 'Введите пароль',
                    (val) =>
                      val.length >= 6 ||
                      'Пароль должен содержать минимум 6 символов',
                  ]"
                  :type="getRegisterPasswordInputType()"
                  class="q-mt-md"
                  label="Пароль"
                  filled
                >
                  <template #append>
                    <q-icon
                      :name="getRegisterPasswordToggleIcon()"
                      class="cursor-pointer"
                      @click="toggleRegisterPassword"
                    />
                  </template>
                </q-input>
              </q-form>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn
                label="Отмена"
                flat
                @click="showRegistrationDialog = false"
              />
              <q-btn
                :loading="registrationLoading"
                color="primary"
                label="Создать"
                flat
                @click="handleRegister"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import {
  ref, onMounted,
} from 'vue'
import { useRouter, } from 'vue-router'

import { useQuasar, } from 'quasar'
import type { QForm, } from 'quasar'

import { useAdminAuth, } from 'src/composables/useAdminAuth'
import { usePasswordVisibility, } from 'src/composables/usePasswordVisibility'

defineOptions({
  name: 'AdminLoginPage',
})

const router = useRouter()
const $q = useQuasar()
const {
  login, register, loading, isAuthenticated, initializing,
} = useAdminAuth()

// Управление видимостью паролей
const {
  togglePasswordVisibility: togglePassword,
  getInputType: getPasswordInputType,
  getToggleIcon: getPasswordToggleIcon,
} = usePasswordVisibility()

const {
  togglePasswordVisibility: toggleRegisterPassword,
  getInputType: getRegisterPasswordInputType,
  getToggleIcon: getRegisterPasswordToggleIcon,
} = usePasswordVisibility()

const formRef = ref<QForm>()
const registerFormRef = ref<QForm>()

const email = ref('')
const password = ref('')
const hasError = ref(false)
const errorMessage = ref('')

const showRegistrationDialog = ref(false)
const showRegistrationOption = ref(false)
const registrationLoading = ref(false)
const registerEmail = ref('')
const registerPassword = ref('')

onMounted(() => {
  // Если пользователь уже аутентифицирован, перенаправляем в админку
  if (isAuthenticated.value) {
    const redirectQuery = router.currentRoute.value.query.redirect as string
    const redirectTo = redirectQuery && redirectQuery !== '' ? redirectQuery : '/admin'

    void router.push(redirectTo)

    return
  }

  // В реальном приложении здесь можно проверить, есть ли уже созданные пользователи
  // Для простоты показываем опцию регистрации всегда
  showRegistrationOption.value = true
})

async function handleLogin() {
  if (!formRef.value) {
    return
  }

  const isValid = await formRef.value.validate()

  if (!isValid) {
    return
  }

  hasError.value = false
  errorMessage.value = ''

  const result = await login(email.value, password.value)

  if (result.success) {
    $q.notify({
      type: 'positive',
      message: 'Вход выполнен успешно',
      position: 'top',
    })

    // Перенаправляем на исходную страницу или на админ дашборд
    const redirectQuery = router.currentRoute.value.query.redirect as string
    const redirectTo = redirectQuery && redirectQuery !== '' ? redirectQuery : '/admin'

    void router.push(redirectTo)
  } else {
    hasError.value = true
    errorMessage.value = result.error ?? 'Произошла ошибка при входе'

    $q.notify({
      type: 'negative',
      message: result.error ?? 'Произошла ошибка при входе',
      position: 'top',
    })
  }
}

async function handleRegister() {
  if (!registerFormRef.value) {
    return
  }

  const isValid = await registerFormRef.value.validate()

  if (!isValid) {
    return
  }

  registrationLoading.value = true

  const result = await register(registerEmail.value, registerPassword.value)

  if (result.success) {
    $q.notify({
      type: 'positive',
      message: 'Администратор создан успешно',
      position: 'top',
    })

    showRegistrationDialog.value = false

    // Перенаправляем на исходную страницу или на админ дашборд
    const redirectQuery = router.currentRoute.value.query.redirect as string
    const redirectTo = redirectQuery && redirectQuery !== '' ? redirectQuery : '/admin'

    void router.push(redirectTo)
  } else {
    $q.notify({
      type: 'negative',
      message: result.error ?? 'Произошла ошибка при создании администратора',
      position: 'top',
    })
  }

  registrationLoading.value = false
}
</script>
