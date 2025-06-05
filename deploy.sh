#!/bin/bash

# Сборка проекта
echo "Сборка проекта..."
npm run build

# Переход в директорию сборки
cd dist/spa

# Создание файла .nojekyll для GitHub Pages
touch .nojekyll

# Инициализация Git репозитория
git init
git add .
git commit -m "Deploy to GitHub Pages"

# Пуш на ветку gh-pages
git push -f git@github.com:darqus/mylara.git master:gh-pages

# Возврат в корневую директорию
cd -

echo "Деплой на GitHub Pages завершен!"
