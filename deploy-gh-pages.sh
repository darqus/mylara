#!/bin/bash

# Настройка переменных
USERNAME="darqus"
REPO="mylara"
EMAIL="voladores@inbox.ru"
NAME="darqus"

# Сборка проекта
echo "Сборка проекта..."
yarn build

# Переход в директорию сборки
cd dist/spa

# Создание файла .nojekyll для GitHub Pages
touch .nojekyll

# Инициализация Git репозитория
git init -b main
git config --local user.email "$EMAIL"
git config --local user.name "$NAME"
git add .
git commit -m "Deploy to GitHub Pages"

# Пуш на ветку gh-pages с использованием токена для аутентификации
# Проверяем наличие переменной GITHUB_TOKEN
if [ -z "$GITHUB_TOKEN" ]; then
  echo "GITHUB_TOKEN не найден. Используем HTTPS URL."
  git push -f https://github.com/$USERNAME/$REPO.git HEAD:gh-pages
else
  echo "Используем GITHUB_TOKEN для аутентификации."
  git push -f https://$GITHUB_TOKEN@github.com/$USERNAME/$REPO.git HEAD:gh-pages
fi

# Возврат в корневую директорию
cd -

echo "Деплой на GitHub Pages завершен!"