#!/bin/bash

# Script to check formatting stability - ensures no conflicts between Prettier and ESLint
# This helps detect configuration issues that cause formatting wars

set -e

# Color output functions
print_step() {
    echo -e "\033[1;34m$1\033[0m"
}

print_success() {
    echo -e "\033[1;32m$1\033[0m"
}

print_error() {
    echo -e "\033[1;31m$1\033[0m"
}

print_warning() {
    echo -e "\033[1;33m$1\033[0m"
}

# Test files (you can expand this list)
TEST_FILES=(
    "src/App.vue"
    "src/layouts/AdminLayout.vue"
    "src/pages/admin/AdminLoginPage.vue"
)

print_step "🔍 Checking formatting stability..."

FAILED_FILES=()

for file in "${TEST_FILES[@]}"; do
    if [[ -f "$file" ]]; then
        print_step "Testing $file..."

        # Create backup
        cp "$file" "$file.backup"

        # Get initial hash
        HASH1=$(sha256sum "$file" | cut -d' ' -f1)

        # Apply Prettier
        npx prettier --write "$file" --config .prettierrc.json > /dev/null 2>&1
        HASH2=$(sha256sum "$file" | cut -d' ' -f1)

        # Apply ESLint
        npx eslint "$file" --fix --config eslint.config.js > /dev/null 2>&1
        HASH3=$(sha256sum "$file" | cut -d' ' -f1)

        # Apply Prettier again
        npx prettier --write "$file" --config .prettierrc.json > /dev/null 2>&1
        HASH4=$(sha256sum "$file" | cut -d' ' -f1)

        # Check if final state equals the state after ESLint
        if [[ "$HASH3" == "$HASH4" ]]; then
            print_success "✅ $file - stable formatting"
        else
            print_error "❌ $file - formatting conflict detected!"
            FAILED_FILES+=("$file")
        fi

        # Restore backup
        mv "$file.backup" "$file"
    else
        print_warning "⚠️  $file not found, skipping"
    fi
done

if [[ ${#FAILED_FILES[@]} -eq 0 ]]; then
    print_success "🎉 All files passed stability test!"
    exit 0
else
    print_error "❌ ${#FAILED_FILES[@]} files failed the stability test:"
    for file in "${FAILED_FILES[@]}"; do
        print_error "   • $file"
    done
    print_error ""
    print_error "This indicates a conflict between Prettier and ESLint configurations."
    print_error "Please review your .prettierrc.json and eslint.config.js settings."
    exit 1
fi
