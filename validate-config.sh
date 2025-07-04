#!/bin/bash

# Configuration validation script
# Checks consistency between .config/, .vscode/settings.json, and other config files

set -e

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

print_error() {
    echo -e "\033[1;31m$1\033[0m"
}

print_step "🔍 Validating project configuration..."

errors=0
warnings=0

# Check required configuration files
print_info "📋 Checking configuration files existence..."

required_files=(
    ".prettierrc.json"
    "eslint.config.js"
    "stylelint.config.mjs"
    ".vscode/settings.json"
    ".config/eslint-rules/index.js"
    "package.json"
)

for file in "${required_files[@]}"; do
    if [[ -f "$file" ]]; then
        print_success "   ✓ $file"
    else
        print_error "   ✗ $file (missing)"
        ((errors++))
    fi
done

# Check .config/eslint-rules modules
print_info "📋 Checking ESLint rules modules..."
rule_modules=(
    ".config/eslint-rules/modules/common.js"
    ".config/eslint-rules/modules/ts.js"
    ".config/eslint-rules/modules/vue.js"
)

for module in "${rule_modules[@]}"; do
    if [[ -f "$module" ]]; then
        print_success "   ✓ $module"
    else
        print_error "   ✗ $module (missing)"
        ((errors++))
    fi
done

# Validate .vscode/settings.json structure
print_info "🔧 Validating VS Code settings..."

if [[ -f ".vscode/settings.json" ]]; then
    # Check if key formatters are configured
    if grep -q '"dbaeumer.vscode-eslint"' .vscode/settings.json; then
        print_success "   ✓ ESLint formatter configured"
    else
        print_warning "   ⚠ ESLint formatter not found in settings"
        ((warnings++))
    fi

    if grep -q '"esbenp.prettier-vscode"' .vscode/settings.json; then
        print_success "   ✓ Prettier formatter configured"
    else
        print_warning "   ⚠ Prettier formatter not found in settings"
        ((warnings++))
    fi

    format_on_save_count=$(grep -c '"editor.formatOnSave": true' .vscode/settings.json || echo "0")
    if [[ $format_on_save_count -gt 0 ]]; then
        print_success "   ✓ Format on save enabled ($format_on_save_count sections)"
    else
        print_warning "   ⚠ Format on save not enabled in any sections"
        ((warnings++))
    fi
else
    print_error "   ✗ .vscode/settings.json missing"
    ((errors++))
fi

# Check package.json scripts
print_info "📦 Validating package.json scripts..."

if [[ -f "package.json" ]]; then
    if grep -q '"format":' package.json; then
        print_success "   ✓ format script defined"
    else
        print_warning "   ⚠ format script not found"
        ((warnings++))
    fi

    if grep -q '"format:quick":' package.json; then
        print_success "   ✓ format:quick script defined"
    else
        print_warning "   ⚠ format:quick script not found"
        ((warnings++))
    fi

    if grep -q '"lint":' package.json; then
        print_success "   ✓ lint script defined"
    else
        print_warning "   ⚠ lint script not found"
        ((warnings++))
    fi
fi

# Check ignore files
print_info "🚫 Checking ignore files..."
ignore_files=(
    ".prettierignore"
    ".gitignore"
)

for file in "${ignore_files[@]}"; do
    if [[ -f "$file" ]]; then
        print_success "   ✓ $file"
    else
        print_warning "   ⚠ $file (missing, recommended)"
        ((warnings++))
    fi
done

# Validate dependencies
print_info "📚 Checking required dependencies..."

required_deps=(
    "prettier"
    "eslint"
    "stylelint"
    "@vue/eslint-config-typescript"
    "eslint-plugin-vue"
    "eslint-plugin-prettier"
)

for dep in "${required_deps[@]}"; do
    if grep -q "\"$dep\":" package.json; then
        print_success "   ✓ $dep"
    else
        print_error "   ✗ $dep (missing dependency)"
        ((errors++))
    fi
done

# Summary
print_info ""
print_step "📊 Validation Summary:"

if [[ $errors -eq 0 && $warnings -eq 0 ]]; then
    print_success "🎉 All configurations are valid!"
    print_info "   Your formatting setup is properly configured."
elif [[ $errors -eq 0 ]]; then
    print_warning "⚠️  Configuration is mostly valid with $warnings warning(s)"
    print_info "   Consider addressing the warnings for optimal setup."
else
    print_error "❌ Configuration validation failed!"
    print_error "   Found $errors error(s) and $warnings warning(s)"
    print_info "   Please fix the errors before running format scripts."
    exit 1
fi

print_info ""
print_info "🔧 To format your code, run:"
print_info "   ./format.sh          # Full formatting with type checking"
print_info "   ./format-quick.sh     # Quick formatting for development"
print_info "   yarn format           # Using npm script"
print_info "   yarn format:quick     # Using npm script (quick)"
