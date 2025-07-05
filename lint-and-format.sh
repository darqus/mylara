#!/bin/bash

echo "=== Автоматическое форматирование проекта ==="
echo

# Функция для вывода цветного текста
print_status() {
    echo -e "\033[1;34m$1\033[0m"
}

print_success() {
    echo -e "\033[1;32m✓ $1\033[0m"
}

print_error() {
    echo -e "\033[1;31m✗ $1\033[0m"
}

# Проверяем, что мы в корне проекта
if [ ! -f "package.json" ]; then
    print_error "Скрипт должен запускаться из корня проекта"
    exit 1
fi

print_status "1. Запуск ESLint с автофиксом..."
if npx eslint . --fix --ext .js,.ts,.vue; then
    print_success "ESLint завершен"
else
    print_error "ESLint завершился с ошибками"
fi
echo

print_status "2. Запуск Prettier..."
if npx prettier --write "**/*.{js,ts,vue,json,md,scss,css,html}"; then
    print_success "Prettier завершен"
else
    print_error "Prettier завершился с ошибками"
fi
echo

print_status "3. Запуск Stylelint с автофиксом..."
if npx stylelint "**/*.{css,scss,vue}" --fix; then
    print_success "Stylelint завершен"
else
    print_error "Stylelint завершился с ошибками"
fi
echo

print_status "4. Проверка типов TypeScript..."
if npx tsc --noEmit; then
    print_success "Проверка типов прошла успешно"
else
    print_error "Найдены ошибки типов TypeScript"
fi
echo

print_success "Форматирование завершено!"
echo
echo "Рекомендуется:"
echo "1. Проверить изменения в git"
echo "2. Запустить тесты"
echo "3. Убедиться, что приложение собирается"
