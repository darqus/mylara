---
description: Fix lint and type errors across the project. Run biome fix then vue-tsc typecheck. Usage: @lint [file-pattern]
---

Run the full check pipeline:

1. `biome check --write --unsafe --files-ignore-unknown=true $ARGUMENTS`
2. `npx vue-tsc --noEmit`

Report what was fixed and any remaining type errors.
