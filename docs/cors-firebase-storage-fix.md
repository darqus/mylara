# Решение проблемы CORS при загрузке изображений в Firebase Storage

## Описание проблемы

При загрузке изображений в Firebase Storage возникает ошибка CORS:

```
CORS Preflight Did Not Succeed
Запрос из постороннего источника заблокирован: Политика одного источника запрещает чтение удаленного ресурса
```

## Причины возникновения

1. **Отсутствие конфигурации CORS** в Firebase Storage bucket
2. **Неправильные правила безопасности** Firebase Storage
3. **Дублирование инициализации** Firebase Storage в коде

## Решение

### 1. Установка Google Cloud SDK

Если не установлен, установите Google Cloud SDK:

```bash
# Ubuntu/Debian
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
gcloud init
```

### 2. Аутентификация в Google Cloud

```bash
gcloud auth login
gcloud config set project mylara-landing
```

### 3. Настройка CORS для Firebase Storage

Выполните скрипт настройки CORS:

```bash
./setup-firebase-cors.sh
```

Или выполните команду вручную:

```bash
gsutil cors set cors.json gs://mylara-landing.firebasestorage.app
```

### 4. Проверка настройки CORS

```bash
gsutil cors get gs://mylara-landing.firebasestorage.app
```

### 5. Настройка правил безопасности Firebase Storage

1. Откройте [Firebase Console](https://console.firebase.google.com/)
2. Выберите проект `mylara-landing`
3. Перейдите в раздел **Storage** → **Rules**
4. Замените содержимое правил на содержимое файла `storage.rules`
5. Нажмите **Publish**

### 6. Альтернативная настройка через Firebase CLI

```bash
# Установите Firebase CLI если не установлен
npm install -g firebase-tools

# Войдите в аккаунт
firebase login

# Инициализируйте проект
firebase init storage

# Деплой правил безопасности
firebase deploy --only storage
```

## Файлы конфигурации

### cors.json

```json
[
  {
    "origin": ["*"],
    "method": ["GET", "HEAD", "PUT", "POST", "DELETE"],
    "maxAgeSeconds": 3600,
    "responseHeader": [
      "Content-Type",
      "Access-Control-Allow-Origin",
      "x-goog-resumable"
    ]
  }
]
```

### storage.rules

Правила безопасности, позволяющие:

- Чтение изображений всем пользователям
- Загрузку изображений только аутентифицированным пользователям
- Ограничение размера файлов до 5MB
- Загрузку только изображений

## Исправления в коде

### firebase-storage.service.ts

- Убрана дублирующая инициализация Firebase Storage
- Используется централизованная инициализация из `firebase.ts`
- Исправлены импорты

## Проверка решения

После выполнения всех шагов:

1. Перезапустите приложение
2. Попробуйте загрузить изображение в админ-панели
3. Проверьте, что нет ошибок CORS в консоли браузера

## Дополнительная диагностика

### Проверка сетевых запросов

1. Откройте DevTools → Network
2. Попробуйте загрузить изображение
3. Проверьте заголовки OPTIONS запроса

### Проверка конфигурации Firebase

```javascript
// В консоли браузера
console.log('Firebase Config:', {
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
})
```

### Проверка аутентификации

Убедитесь, что пользователь аутентифицирован при загрузке изображений:

```javascript
// В консоли браузера
import { getAuth } from 'firebase/auth'
console.log('Current user:', getAuth().currentUser)
```

## Возможные дополнительные проблемы

### 1. Неправильная URL bucket

Проверьте в `.env.local`:

```env
VITE_FIREBASE_STORAGE_BUCKET=mylara-landing.firebasestorage.app
```

### 2. Проблемы с аутентификацией

Убедитесь, что пользователь залогинен в админ-панели

### 3. Кэширование браузера

Очистите кэш браузера и попробуйте снова

## Contacts

При возникновении дополнительных проблем:

1. Проверьте логи в Firebase Console
2. Посмотрите детали ошибок в Network tab DevTools
3. Проверьте статус Firebase сервисов на [status.firebase.google.com](https://status.firebase.google.com)
