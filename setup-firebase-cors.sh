#!/bin/bash

# Скрипт для настройки CORS в Firebase Storage
# Убедитесь, что установлен gcloud CLI

echo "Настройка CORS для Firebase Storage..."

# Получаем STORAGE_BUCKET из .env файла
STORAGE_BUCKET=$(grep VITE_FIREBASE_STORAGE_BUCKET .env.local | cut -d '=' -f2)

if [ -z "$STORAGE_BUCKET" ]; then
    echo "Ошибка: VITE_FIREBASE_STORAGE_BUCKET не найден в .env.local"
    exit 1
fi

echo "Настройка CORS для bucket: $STORAGE_BUCKET"

# Применяем CORS конфигурацию
gsutil cors set cors.json gs://$STORAGE_BUCKET

if [ $? -eq 0 ]; then
    echo "CORS успешно настроен для $STORAGE_BUCKET"
    echo "Проверка настройки CORS:"
    gsutil cors get gs://$STORAGE_BUCKET
else
    echo "Ошибка при настройке CORS"
    exit 1
fi
