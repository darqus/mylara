#!/bin/bash

# Format script that uses linting rules from .config folder and project configurations
# Follows VS Code settings.json preferences for different file types

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

print_step "🎨 Starting comprehensive code formatting..."

# Validate configuration files exist
if [[ ! -f ".prettierrc.json" ]]; then
    print_warning "⚠️  .prettierrc.json not found, using Prettier defaults"
fi

if [[ ! -f "eslint.config.js" ]]; then
    print_warning "⚠️  eslint.config.js not found"
    exit 1
fi

if [[ ! -f "stylelint.config.mjs" ]]; then
    print_warning "⚠️  stylelint.config.mjs not found"
    exit 1
fi

if [[ ! -d ".config/eslint-rules" ]]; then
    print_warning "⚠️  .config/eslint-rules directory not found"
fi

print_info "📋 Detected configurations:"
print_info "   ✓ Prettier config: .prettierrc.json"
print_info "   ✓ ESLint config: eslint.config.js"
print_info "   ✓ ESLint rules: .config/eslint-rules/"
print_info "   ✓ Stylelint config: stylelint.config.mjs"
print_info "   ✓ VS Code settings: .vscode/settings.json"

# Step 1: Format with Prettier (handles basic formatting)
print_step "🎨 Running Prettier to format code structure..."
print_info "   Processing TypeScript, JavaScript, Vue, and SCSS files..."

npx prettier \
    --write \
    "**/*.{ts,mts,js,mjs,cjs,vue,scss,css,html,json,jsonc,md}" \
    --config .prettierrc.json \
    --ignore-path .prettierignore \
    --log-level warn \
    --cache \
    --cache-location .prettierCache

print_success "✅ Prettier formatting completed"

# Step 2: ESLint for JavaScript/TypeScript/Vue
print_step "🔧 Running ESLint to fix code quality issues..."
print_info "   Applying rules from .config/eslint-rules/ and checking types..."
print_warning "   This may take a moment due to TypeScript type checking..."

npx eslint \
    --fix \
    "**/*.{ts,mts,js,mjs,cjs,vue}" \
    --config eslint.config.js \
    --cache \
    --cache-location .eslintcache \
    --max-warnings 0 \
    --report-unused-disable-directives

print_success "✅ ESLint fixes applied"

# Step 3: Stylelint for SCSS/CSS
print_step "🎯 Running Stylelint to fix SCSS/CSS issues..."
print_info "   Applying SCSS linting rules and property ordering..."

npx stylelint \
    --fix \
    "**/*.{scss,css}" \
    --config stylelint.config.mjs \
    --cache \
    --cache-location .stylelintcache \
    --allow-empty-input \
    --formatter compact

print_success "✅ Stylelint fixes applied"

# Step 4: Final Prettier pass to ensure consistency
print_step "🎨 Running final Prettier pass for consistency..."

npx prettier \
    --write \
    "**/*.{ts,mts,js,mjs,cjs,vue,scss,css}" \
    --config .prettierrc.json \
    --ignore-path .prettierignore \
    --log-level error

print_success "✅ Final formatting pass completed"

print_success "🎉 Comprehensive formatting completed successfully!"
print_info ""
print_info "📝 Files formatted according to:"
print_info "   • Prettier config: .prettierrc.json"
print_info "   • ESLint config: eslint.config.js"
print_info "   • ESLint rules: .config/eslint-rules/ (common, ts, vue modules)"
print_info "   • Stylelint config: stylelint.config.mjs"
print_info "   • VS Code settings: .vscode/settings.json preferences"
print_info ""
print_info "🔍 Validation summary:"
print_info "   • Code structure: Prettier"
print_info "   • Code quality: ESLint + custom rules"
print_info "   • Style consistency: Stylelint"
print_info "   • Type safety: TypeScript via ESLint"
