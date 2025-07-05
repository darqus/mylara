# Быстрое решение проблемы CORS при загрузке изображений

## Проблема

Ошибка CORS при загрузке изображений в Firebase Storage: "CORS Preflight Did Not Succeed"

## Быстрое решение

### Вариант 1: Через Firebase Console (Рекомендуется)

1. **Откройте Firebase Console**: <https://console.firebase.google.com/>
2. **Выберите проект**: `mylara-landing`
3. **Перейдите в Storage**: левое меню → Storage → Files
4. **Настройте правила безопасности**:
   - Перейдите на вкладку "Rules"
   - Замените содержимое на правила из файла `storage.rules`
   - Нажмите "Publish"

### Вариант 2: Через Google Cloud Console

1. **Откройте Google Cloud Console**: <https://console.cloud.google.com/>
2. **Выберите проект**: `mylara-landing`
3. **Перейдите в Cloud Storage**: Navigation menu → Cloud Storage → Buckets
4. **Настройте CORS**:
   - Найдите bucket `mylara-landing.firebasestorage.app`
   - Откройте вкладку "Permissions"
   - В разделе "CORS" добавьте конфигурацию из файла `cors.json`

### Вариант 3: Через командную строку (требует Google Cloud SDK)

```bash
# Установка Google Cloud SDK (Ubuntu/Debian)
curl https://sdk.cloud.google.com | bash
exec -l $SHELL

# Аутентификация
gcloud auth login
gcloud config set project mylara-landing

# Настройка CORS
gsutil cors set cors.json gs://mylara-landing.firebasestorage.app
```

## Проверка решения

1. Очистите кэш браузера
2. Перезапустите приложение
3. Попробуйте загрузить изображение в админ-панели
4. Проверьте отсутствие ошибок CORS в консоли браузера

## Если проблема не решена

1. Убедитесь, что пользователь залогинен в админ-панели
2. Проверьте Network tab в DevTools на наличие других ошибок
3. Проверьте статус Firebase сервисов: <https://status.firebase.google.com>

## Содержимое правил безопасности (storage.rules)

```javascript
service firebase.storage {
  match /b/{bucket}/o {
    match /images/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null
        && request.resource.size < 5 * 1024 * 1024
        && request.resource.contentType.matches('image/.*');
    }
    // ... другие правила
  }
}
```

## Содержимое CORS конфигурации (cors.json)

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
