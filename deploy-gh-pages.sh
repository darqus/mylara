#!/bin/bash

# Загрузка переменных из файла конфигурации, если он существует
CONFIG_FILE=".gh-pages-config"
if [ -f "$CONFIG_FILE" ]; then
  source "$CONFIG_FILE"
  echo "Конфигурация загружена из $CONFIG_FILE"
fi

# Настройка переменных
USERNAME=${GH_USERNAME:-"darqus"}
REPO=${GH_REPO:-"mylara"}
GITHUB_TOKEN=${GITHUB_TOKEN:-$GH_TOKEN}

# Сборка проекта
echo "Сборка проекта..."
yarn build

# Переход в директорию сборки
cd dist/spa

# Создание файла .nojekyll для GitHub Pages
touch .nojekyll

# Инициализация Git репозитория
git init -b main
git config --local user.email "github-actions@github.com"
git config --local user.name "GitHub Actions"
git add .
git commit -m "Deploy to GitHub Pages"

# Пуш на ветку gh-pages с использованием HTTPS
echo "Деплой на GitHub Pages..."
git push -f https://${USERNAME}:${GITHUB_TOKEN}@github.com/${USERNAME}/${REPO}.git HEAD:gh-pages

# Если токен не установлен, выводим инструкцию
if [ $? -ne 0 ]; then
  echo "Ошибка при деплое. Создайте файл .gh-pages-config с содержимым:"
  echo "GH_USERNAME=ваше_имя_пользователя"
  echo "GH_REPO=имя_репозитория"
  echo "GH_TOKEN=ваш_токен"
  echo "Токен можно создать на странице https://github.com/settings/tokens"
fi

# Возврат в корневую директорию
cd -

echo "Деплой на GitHub Pages завершен!"
