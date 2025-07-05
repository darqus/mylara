# GitHub Copilot Instructions

## Vue.js File Structure Rules

### Vue Single File Component (SFC) Order

Always maintain the following order of sections in Vue.js Single File Components:

1. **`<script>` section** - Always first
2. **`<template>` section** - Always second
3. **`<style>` section** - Always last

### Example Structure:

```vue
<script setup lang="ts">
// Component logic here
</script>

<template>
  <!-- Template markup here -->
</template>

<style scoped lang="scss">
/* Component styles here */
</style>
```

### Rules:

- **NEVER** place `<template>` before `<script>`
- **NEVER** place `<style>` before `<template>` or `<script>`
- Always maintain this order: **script → template → style**
- Use TypeScript (`lang="ts"`) for script sections when possible
- Use SCSS (`lang="scss"`) for style sections when possible
- Prefer `<script setup>` over Options API
- Use `scoped` attribute for component-specific styles

### File Creation Guidelines:

When creating new Vue components:

1. Start with `<script setup lang="ts">`
2. Add `<template>` section with component markup
3. End with `<style scoped lang="scss">` if styles are needed

### File Refactoring Guidelines:

When refactoring existing Vue files:

- Always reorder sections to match: script → template → style
- Maintain existing functionality while fixing structure
- Preserve all imports, exports, and component logic

This structure ensures consistency across the project and improves code readability.
