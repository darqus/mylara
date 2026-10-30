# Formatting and linting

This project uses [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) for
formatting, [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) for
JavaScript and TypeScript linting, and [Stylelint](https://stylelint.io/) with
Recess Order for CSS/SCSS property sorting. These tools are installed as
project development dependencies.

```bash
npm run lint       # Check lint rules, CSS/SCSS property order, and formatting
npm run fix        # Apply lint fixes, sort CSS/SCSS properties, and format
npm run typecheck  # Run vue-tsc
```

Oxfmt uses two-space indentation, an 80-character print width, single quotes
in code, double quotes in CSS/SCSS, no semicolons, and ES5 trailing commas.
Vue templates put each attribute on its own line. Oxfmt sorts imports in
JavaScript, TypeScript, and Vue script blocks
by import type, builtin, external, internal alias, then relative path. Oxlint
checks JavaScript and TypeScript, including script blocks in Vue single-file
components. Stylelint Recess Order sorts CSS/SCSS properties by priority.
Oxfmt formats Vue components, CSS/SCSS, JSON, and Markdown.

VS Code uses the OXC and Stylelint extensions for formatting and style checks;
Stylelint automatically sorts CSS/SCSS properties on save.
The same lint and formatting checks run in GitHub Actions.
