export default {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier-scss',
    'stylelint-config-recess-order',
  ],
  ignoreFiles: ['**/node_modules/**', '**/dist/**', '**/.quasar/**'],
  // Ensure proper parsing for Vue SFCs and SCSS files
  overrides: [
    {
      files: ['**/*.vue', '**/*.html'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.{scss,sass}'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    'declaration-empty-line-before': 'never',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'global', 'slotted', 'v-deep'],
      },
    ],
    'scss/at-each-key-value-single-line': true,
    'scss/at-if-no-null': null,
    'scss/comment-no-empty': null,
    'scss/comment-no-loud': null,
    'scss/dollar-variable-empty-line-before': null,
    'scss/dollar-variable-pattern': null,
    'scss/no-global-function-names': null,
    'scss/operator-no-unspaced': true,
    'scss/selector-nest-combinators': 'always',
    'unit-allowed-list': [
      'em',
      'rem',
      'ms',
      's',
      '%',
      'px',
      'fr',
      'vw',
      'vh',
      'deg',
    ],
  },
}
