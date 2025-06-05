#!/bin/bash

# Настройка переменных
USERNAME="darqus"
REPO="mylara"
EMAIL="voladores@inbox.ru"  # Замените на свой email
NAME="darqus"                # Замените на своё имя

# Сборка проекта
echo "Сборка проекта..."
yarn build

# Переход в директорию сборки
cd dist/spa

# Создание файла .nojekyll для GitHub Pages
touch .nojekyll

# Исправление путей в index.html
# echo "Исправление путей в index.html..."
# sed -i 's|href=/|href=|g' index.html
# sed -i 's|src="/|src="|g' index.html
# sed -i 's|href="/|href="|g' index.html
# echo "Пути успешно исправлены!"

# Инициализация Git репозитория
git init -b main
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
