# Как припарковать проект с GitHub на платформу Firebase

Для размещения вашего GitHub проекта на Firebase Hosting, выполните следующие шаги:

1. Установите Firebase CLI:

```bash
npm install -g firebase-tools
```

2. Войдите в аккаунт Firebase:

```bash
firebase login
```

3. Инициализируйте Firebase в вашем проекте:

```bash
firebase init
```

- Выберите "Hosting"
- Выберите существующий проект Firebase или создайте новый
- Укажите "dist" как публичную директорию (если используете Vite)
- Настройте как одностраничное приложение: Да
- Настройка автоматических сборок и деплоев с GitHub: Опционально

4. Добавьте файл firebase.json в корень проекта:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

5. Соберите ваш проект:

```bash
npm run build
```

6. Разверните на Firebase:

```bash
firebase deploy
```

Ваш сайт будет доступен по адресу <https://ваш-проект-id.web.app>

Для автоматического развертывания из GitHub, настройте GitHub Actions, добавив файл `.github/workflows/firebase-hosting-merge.yml`:

```yaml
name: Деплой на Firebase Hosting
on:
  push:
    branches: [main]
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '16'
      - run: npm ci
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: ваш-firebase-project-id
```

Вам потребуется добавить сервисный аккаунт Firebase как секрет GitHub.
