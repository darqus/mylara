#!/bin/bash

# Sync VS Code settings with project configurations
# Ensures .vscode/settings.json aligns with project linting rules

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

print_step "🔄 Synchronizing VS Code settings with project configuration..."

# Ensure .vscode directory exists
mkdir -p .vscode

# Backup existing settings if they exist
if [[ -f ".vscode/settings.json" ]]; then
    cp .vscode/settings.json .vscode/settings.json.backup
    print_info "📋 Backup created: .vscode/settings.json.backup"
fi

# Create comprehensive VS Code settings
cat > .vscode/settings.json << 'EOF'
{
  "[css]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": "explicit"
    },
    "editor.defaultFormatter": "vscode.css-language-features",
    "editor.formatOnSave": true
  },
  "[scss]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": "explicit"
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[html]": {
    "editor.codeActionsOnSave": {
      "source.fixAll": "explicit",
      "source.fixAll.stylelint": "never"
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[javascript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.prettier": "explicit",
      "source.fixAll.eslint": "explicit",
      "source.fixAll.stylelint": "never",
      "source.organizeImports": "never"
    },
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.ts": "explicit",
      "source.fixAll.prettier": "explicit",
      "source.fixAll.eslint": "explicit",
      "source.organizeImports": "never"
    },
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnSave": true
  },
  "[typescript][vue]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.ts": "explicit",
      "source.fixAll.prettier": "explicit",
      "source.fixAll.eslint": "explicit",
      "source.organizeImports": "never"
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[vue]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.ts": "explicit",
      "source.fixAll.prettier": "explicit",
      "source.fixAll.eslint": "explicit",
      "source.organizeImports": "never"
    },
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnSave": true
  },
  "[json]": {
    "editor.codeActionsOnSave": {
      "source.fixAll": "explicit"
    },
    "editor.defaultFormatter": "vscode.json-language-features",
    "editor.formatOnSave": true
  },
  "[jsonc]": {
    "editor.codeActionsOnSave": {
      "source.fixAll": "explicit"
    },
    "editor.defaultFormatter": "vscode.json-language-features",
    "editor.formatOnSave": true
  },
  "[markdown]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.markdownlint": "explicit"
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true
  },

  // General editor settings optimized for the project
  "css.validate": false,
  "scss.validate": false,
  "editor.bracketPairColorization.enabled": true,
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnSave": true,
  "editor.guides.bracketPairs": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.organizeImports": "never"
  },

  // ESLint configuration
  "eslint.enable": true,
  "eslint.format.enable": true,
  "eslint.validate": [
    "javascript",
    "typescript",
    "vue"
  ],
  "eslint.workingDirectories": [
    "."
  ],
  "eslint.options": {
    "configFile": "./eslint.config.js"
  },

  // Stylelint configuration
  "stylelint.enable": true,
  "stylelint.packageManager": "yarn",
  "stylelint.validate": [
    "css",
    "scss",
    "sass"
  ],
  "stylelint.configFile": "./stylelint.config.mjs",

  // Prettier configuration
  "prettier.enable": true,
  "prettier.configPath": "./.prettierrc.json",
  "prettier.ignorePath": "./.prettierignore",

  // Package manager
  "npm.packageManager": "yarn",

  // TypeScript configuration
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.preferences.quoteStyle": "single",
  "typescript.preferences.includePackageJsonAutoImports": "off",

  // Git configuration
  "gitPrefix.replacement": "$1 | ",

  // Project-specific spell checker words
  "cSpell.words": [
    "amazonq",
    "autogrow",
    "axios",
    "cordova",
    "firestore",
    "mylara",
    "OGRN",
    "RUTUBE",
    "swipeable",
    "VITE"
  ],

  // File associations
  "files.associations": {
    "*.mts": "typescript",
    "*.mjs": "javascript"
  },

  // Search exclusions for better performance
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/.quasar": true,
    "**/.eslintcache": true,
    "**/.stylelintcache": true,
    "**/.prettierCache": true,
    "**/yarn.lock": true
  },

  // File watcher exclusions for better performance
  "files.watcherExclude": {
    "**/node_modules/**": true,
    "**/dist/**": true,
    "**/.quasar/**": true,
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/*/**": true
  },

  // Auto-save configuration
  "files.autoSave": "onFocusChange",

  // Terminal configuration
  "terminal.integrated.defaultProfile.linux": "bash",

  // Vue-specific settings
  "vetur.validation.template": false,
  "vetur.validation.script": false,
  "vetur.validation.style": false
}
EOF

print_success "✅ VS Code settings synchronized!"

print_info ""
print_info "📝 Updated .vscode/settings.json with:"
print_info "   • Proper formatter assignments for each file type"
print_info "   • ESLint integration with custom rules from .config/"
print_info "   • Stylelint integration with project config"
print_info "   • Prettier integration with project config"
print_info "   • Format-on-save enabled for all supported file types"
print_info "   • Performance optimizations"
print_info "   • Project-specific spell checker words"

print_info ""
print_info "🔧 Recommended VS Code extensions for this project:"
print_info "   • ESLint (dbaeumer.vscode-eslint)"
print_info "   • Prettier (esbenp.prettier-vscode)"
print_info "   • Stylelint (stylelint.vscode-stylelint)"
print_info "   • Vue Language Features (Vue.volar)"
print_info "   • TypeScript Importer (pmneo.tsimporter)"

print_info ""
print_info "💡 To install extensions, run in VS Code:"
print_info "   Ctrl+Shift+P → Extensions: Install Extensions"
