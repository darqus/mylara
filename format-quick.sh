#!/bin/bash

# Quick format script for development - optimized for speed
# Follows VS Code settings.json preferences with minimal type checking

set -e  # Exit on any error

# Color output functions
print_step() {
    echo -e "\033[1;34m$1\033[0m"
}

print_success() {
    echo -e "\033[1;32m$1\033[0m"
}

print_info() {
    echo -e "\033[1;36m$1\033[0m"
}

print_warning() {
    echo -e "\033[1;33m$1\033[0m"
}

print_step "⚡ Starting quick code formatting..."

# Step 1: Quick Prettier format
print_step "🎨 Running Prettier (quick mode)..."
npx prettier \
    --write \
    "**/*.{ts,mts,js,mjs,cjs,vue,scss,css}" \
    --config .prettierrc.json \
    --ignore-path .prettierignore \
    --log-level error \
    --cache \
    --cache-location .prettierCache

print_success "✅ Prettier completed"

# Step 2: ESLint without type checking for speed
print_step "🔧 Running ESLint (syntax only, no type checking)..."
npx eslint \
    --fix \
    "**/*.{ts,mts,js,mjs,cjs,vue}" \
    --config eslint.config.js \
    --cache \
    --cache-location .eslintcache

print_success "✅ ESLint fixes applied"

# Step 3: Quick Stylelint
print_step "🎯 Running Stylelint (quick mode)..."
npx stylelint \
    --fix \
    "**/*.{scss,css}" \
    --config stylelint.config.mjs \
    --cache \
    --cache-location .stylelintcache \
    --allow-empty-input

print_success "✅ Stylelint completed"

print_success "⚡ Quick formatting completed successfully!"
print_info ""
print_info "💡 For comprehensive formatting with full type checking, use:"
print_info "   ./format.sh"
print_info ""
print_info "📝 Quick formatting applied:"
print_info "   • Basic code structure: Prettier"
print_info "   • Syntax fixes: ESLint (no type checking)"
print_info "   • Style consistency: Stylelint"
