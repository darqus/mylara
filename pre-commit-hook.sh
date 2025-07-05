#!/bin/bash

# Pre-commit hook to ensure consistent formatting
# Place this file in .git/hooks/pre-commit and make it executable

set -e

# Color output functions
print_error() {
    echo -e "\033[1;31m$1\033[0m"
}

print_success() {
    echo -e "\033[1;32m$1\033[0m"
}

print_info() {
    echo -e "\033[1;36m$1\033[0m"
}

print_info "🔍 Running pre-commit formatting checks..."

# Check if there are any staged files
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(ts|js|vue|scss|css)$' || true)

if [ -z "$STAGED_FILES" ]; then
    print_success "✅ No formatting files to check"
    exit 0
fi

print_info "📁 Checking files:"
echo "$STAGED_FILES" | sed 's/^/   • /'

# Create temporary directory for checks
TEMP_DIR=$(mktemp -d)
trap "rm -rf $TEMP_DIR" EXIT

# Copy staged files to temp directory
for file in $STAGED_FILES; do
    if [ -f "$file" ]; then
        cp "$file" "$TEMP_DIR/$(basename "$file")"
    fi
done

# Check Prettier formatting
print_info "🎨 Checking Prettier formatting..."
PRETTIER_ISSUES=()
for file in $STAGED_FILES; do
    if [ -f "$file" ]; then
        if ! npx prettier --check "$file" > /dev/null 2>&1; then
            PRETTIER_ISSUES+=("$file")
        fi
    fi
done

# Check ESLint
print_info "🔧 Checking ESLint rules..."
ESLINT_ISSUES=()
for file in $STAGED_FILES; do
    if [[ "$file" =~ \.(ts|js|vue)$ ]] && [ -f "$file" ]; then
        if ! npx eslint "$file" > /dev/null 2>&1; then
            ESLINT_ISSUES+=("$file")
        fi
    fi
done

# Report issues
ISSUES_FOUND=false

if [ ${#PRETTIER_ISSUES[@]} -gt 0 ]; then
    ISSUES_FOUND=true
    print_error "❌ Prettier formatting issues found:"
    for file in "${PRETTIER_ISSUES[@]}"; do
        print_error "   • $file"
    done
fi

if [ ${#ESLINT_ISSUES[@]} -gt 0 ]; then
    ISSUES_FOUND=true
    print_error "❌ ESLint issues found:"
    for file in "${ESLINT_ISSUES[@]}"; do
        print_error "   • $file"
    done
fi

if [ "$ISSUES_FOUND" = true ]; then
    print_error ""
    print_error "🚫 Commit aborted due to formatting issues."
    print_error "Run the following commands to fix:"
    print_error "   ./format.sh"
    print_error "   git add ."
    print_error "   git commit"
    exit 1
fi

print_success "✅ All formatting checks passed!"
exit 0
