# Доступ в админку: Firebase Auth + клейм `admin`

Вход в `/admin` требует одновременно двух вещей:

1. **Учётной записи Firebase Auth** (email + пароль) в проекте `mylara-landing`.
2. **Кастомного клейма** `admin: true` в ID-токене — см. `src/composables/useAdminAuth.ts`:
   `isAuthenticated = currentUser !== null && isAdmin`, где `isAdmin` читается из `tokenResult.claims.admin`.

Бэкенда у проекта больше нет (старый API уretired вместе с mylara.ru), а клеймы
можно выставить **только** через Firebase Admin SDK. Поэтому для настройки
доступа используется скрипт `scripts/set-admin-claim.mjs`.

## 1. Получить ключ сервис-аккаунта

1. Firebase Console → Project settings → Service accounts →
   **Generate new private key**.
2. Положить файл в `.secrets/service-account.json` (каталог в `.gitignore`,
   ключ никогда не попадёт в git).

Альтернативы (проверяются в этом порядке):

| Способ | Как задать |
|--------|------------|
| JSON строкой | `FIREBASE_SERVICE_ACCOUNT_JSON='{"type":"service_account",...}'` |
| Путь к файлу | `GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json` |
| Путь по умолчанию | `.secrets/service-account.json` |
| ADC (`gcloud auth application-default login`) | без ключевого файла вовсе |

## 2. Диагностика: почему вход не работает

```bash
npm run admin:claim -- --check admin@mylara.dev
```

Скрипт печатает `uid`, `disabled`, провайдеры и текущие `customClaims`.
На что смотреть:

- **нет строки `password` в `providers`** — у аккаунта нет пароля (создавался
  через Google или email-link), вход по паролю всегда падает с
  `auth/invalid-credential`. Лечится: `--grant --password <pw>`;
- **`disabled: true`** — аккаунт заблокирован;
- **пользователь не найден** — нужно создать (см. `--grant` ниже).

Важно: Firebase с включённой защитой от перебора почт объединяет ошибки
«пользователь не найден» и «неверный пароль» в одну — `auth/invalid-credential`.
По клиенту причину отличить невозможно, только этим скриптом.

## 3. Выдать (или вернуть) доступ

```bash
# Создать пользователя (если нет) + выставить клейм admin
npm run admin:claim -- --grant --email admin@mylara.dev --password 'Strong-Pass-1'

# Клейм существующему пользователю
npm run admin:claim -- --grant --email admin@mylara.dev

# Снять клейм
npm run admin:claim -- --revoke --email admin@mylara.dev
```

После выполнения скрипт перечитывает пользователя и печатает
подтверждённое состояние (`customClaims`).

## 4. Войти в админку

⚠️ **ID-токен кэшируется до ~1 часа.** После выдачи клейма нужно выйти из
админки и войти заново — иначе guard продолжит отбрасывать на `/admin/login`,
даже если клейм уже выставлен.

Дальше работает guard в `src/router/guards/auth.ts`: при отсутствии клейма
`login()` сам разлогинивает пользователя и показывает
«Доступ запрещён. У пользователя нет прав администратора».

## 5. Dev-fallback (временный, только для локальной разработки)

Чтобы можно было работать с UI админки, пока реальный доступ не настроен,
в `useAdminAuth.ts` есть dev-only ветка: в `DEV`-режиме совпадение пары
`VITE_DEV_ADMIN_EMAIL` / `VITE_DEV_ADMIN_PASSWORD` даёт мок-пользователя
`dev-admin` с клеймом `admin`.

Ограничения (важно):

- **запись в Firestore запрещена** — мок-пользователь не является пользователем
  Firebase Auth, а `firestore.service.ts` требует `auth.currentUser` для
  create/update/delete (правила: `allow write: if request.auth.uid != null`);
- **сессия не переживает перезагрузку страницы** (F5 выкидывает на логин);
- **в проде не работает** (`import.meta.env.DEV === false`).

Значения хранятся **только в `.env.local`** (не в `.env`): файл `.env`
автоматически коммитится и пушится скриптом `npm run update-env`, а
репозиторий публичный.

После того как реальный доступ через Firebase настроен (шаги 1-4), ветка
fallback должна быть удалена.

## 6. Политика секретов

- Пароли и ключи — только в `.env.local` и `.secrets/` (оба в `.gitignore`).
- Переменные `VITE_*` встраиваются Vite в client bundle — **не кладите туда
  секретов**. Доступ к переменным должен быть статическим
  (`import.meta.env.VITE_X`): динамический доступ
  (`import.meta.env[key]`, деструктуризация объекта) заставляет Vite встроить
  **весь** объект окружения в бандл. Это уже происходило — см. комментарий
  в `src/utils/constants.ts`.
