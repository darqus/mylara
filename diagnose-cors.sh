#!/bin/bash

echo "=== Диагностика проблемы CORS Firebase Storage ==="
echo

# Проверяем переменные окружения
echo "1. Проверка переменных окружения:"
if [ -f ".env.local" ]; then
    echo "✓ Файл .env.local найден"
    STORAGE_BUCKET=$(grep VITE_FIREBASE_STORAGE_BUCKET .env.local | cut -d '=' -f2)
    echo "   STORAGE_BUCKET: $STORAGE_BUCKET"

    PROJECT_ID=$(grep VITE_FIREBASE_PROJECT_ID .env.local | cut -d '=' -f2)
    echo "   PROJECT_ID: $PROJECT_ID"
else
    echo "✗ Файл .env.local не найден"
fi
echo

# Проверяем установку Firebase CLI
echo "2. Проверка Firebase CLI:"
if command -v firebase &> /dev/null; then
    echo "✓ Firebase CLI установлен"
    firebase --version
else
    echo "✗ Firebase CLI не установлен"
    echo "   Установите: npm install -g firebase-tools"
fi
echo

# Проверяем установку Google Cloud SDK
echo "3. Проверка Google Cloud SDK:"
if command -v gsutil &> /dev/null; then
    echo "✓ Google Cloud SDK установлен"
    gsutil --version | head -1
else
    echo "✗ Google Cloud SDK не установлен"
    echo "   Необходим для настройки CORS"
fi
echo

# Проверяем файлы конфигурации
echo "4. Проверка файлов конфигурации:"
if [ -f "cors.json" ]; then
    echo "✓ cors.json найден"
else
    echo "✗ cors.json не найден"
fi

if [ -f "storage.rules" ]; then
    echo "✓ storage.rules найден"
else
    echo "✗ storage.rules не найден"
fi

if [ -f "firebase.json" ]; then
    echo "✓ firebase.json найден"
else
    echo "✗ firebase.json не найден"
fi

if [ -f ".firebaserc" ]; then
    echo "✓ .firebaserc найден"
else
    echo "✗ .firebaserc не найден"
fi
echo

echo "=== Рекомендации по решению ==="
echo
echo "Для решения проблемы CORS необходимо:"
echo "1. Установить Google Cloud SDK для настройки CORS"
echo "2. Настроить CORS для Firebase Storage bucket"
echo "3. Обновить правила безопасности Firebase Storage"
echo "4. Убедиться в правильной аутентификации пользователя"
echo
echo "Подробные инструкции смотрите в docs/cors-firebase-storage-fix.md"
