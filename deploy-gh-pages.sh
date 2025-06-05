#!/bin/bash

# Настройка переменных
USERNAME="darqus"
REPO="mylara"
EMAIL="your-email@example.com"  # Замените на свой email
NAME="Your Name"                # Замените на своё имя

# Сборка проекта
echo "Сборка проекта..."
yarn build

# Переход в директорию сборки
cd dist/spa

# Создание файла .nojekyll для GitHub Pages
touch .nojekyll

# Инициализация Git репозитория
git init
git config --local user.email "$EMAIL"
git config --local user.name "$NAME"
git add .
git commit -m "Deploy to GitHub Pages"

# Пуш на ветку gh-pages
# Используем HTTPS вместо SSH для более простой аутентификации
git push -f https://github.com/$USERNAME/$REPO.git HEAD:gh-pages

# Возврат в корневую директорию
cd -

echo "Деплой на GitHub Pages завершен!"