#!/bin/bash

# Usage:
# 1. Run `bash create-page.sh` in terminal.
# 2. Type page name in snake_case and press Enter.
#
# Examples: "home", "about", "contact", "master-class".

# Don't forget to add route to enum ROUTE_TYPE in src/types/routes.ts
# and src/router/routes.ts

read -p "Enter page name: " page_name

page_name_lower=$(echo "$page_name" | tr '[:upper:]' '[:lower:]')
page_name_pascal=$(echo "$page_name_lower" | sed -r 's/(^|-)(.)/\U\2/g')

page_dir="src/pages/$page_name_lower"
page_file="$page_dir/$page_name_pascal"Page.vue
scss_file="$page_dir/scss/page-$page_name_lower.scss"

mkdir -p "$page_dir"

cat << EOF > "$page_file"
<script setup lang="ts">

</script>

<template>
  <q-page class="row items-center justify-evenly page-$page_name_lower">
    <div class="container center-x">
      $page_name_pascal Page
    </div>
  </q-page>
</template>

<style lang="scss">
@import './scss/page-$page_name_lower';
</style>
EOF

mkdir -p "$page_dir/scss"

cat << EOF > "$scss_file"
.page-$page_name_lower {
  background-color: \$white;
}
EOF
