export const common = {
  semi: [ 'error', 'never' ],
  'no-extra-semi': 'error',
  'import/order': [
    'error',
    {
      groups: [
        'builtin',
        'external',
        'internal',
        [ 'parent', 'sibling' ],
        'index',
        'type',
      ],
      pathGroups: [
        {
          pattern: 'vue',
          group: 'external',
          position: 'before',
        },
        {
          pattern: '@vue/**',
          group: 'external',
          position: 'before',
        },
        {
          pattern: 'pinia',
          group: 'external',
          position: 'after',
        },
        {
          pattern: 'quasar',
          group: 'external',
          position: 'after',
        },
        {
          pattern: '@quasar/**',
          group: 'external',
          position: 'after',
        },
        {
          pattern: 'src/**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: './**',
          group: 'sibling',
          position: 'after',
        },
      ],
      pathGroupsExcludedImportTypes: [ 'builtin' ],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],

  'import/no-unresolved': [ 'off' ],
  'comma-dangle': [
    'error',
    {
      arrays: 'only-multiline',
      objects: 'only-multiline',
      imports: 'only-multiline',
      exports: 'only-multiline',
      functions: 'never',
    },
  ],

  // https://eslint.org/docs/latest/rules/indent#rule-details
  indent: [
    'error',
    2,
    {
      SwitchCase: 1,
      VariableDeclarator: {
        var: 2,
        let: 2,
        const: 2,
      },
      MemberExpression: 1,
      FunctionDeclaration: {
        body: 1,
        parameters: 2,
      },
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: true,
      offsetTernaryExpressions: true,
    },
  ],

  'no-console': [ 'warn', { allow: [ 'warn', 'error' ] } ],
  'arrow-parens': [ 'error', 'always' ],
  curly: 'error',
  'object-shorthand': [ 'error', 'always' ],

  'array-bracket-spacing': [ 'error', 'always' ],
  'object-curly-spacing': [
    'error',
    'always',
    {
      arraysInObjects: true,
      objectsInObjects: true,
    },
  ],

  eqeqeq: [ 'error', 'smart' ],
  'prefer-promise-reject-errors': 'error',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  'no-useless-constructor': 'off',
  'no-shadow': 'off',
  'no-var': [ 'error' ],
  'prefer-const': [ 'error', { destructuring: 'all' } ],
  'no-unused-expressions': [
    'error',
    { allowShortCircuit: true, allowTernary: true },
  ],
  'no-param-reassign': [ 'error', { props: false } ],

  'prefer-destructuring': [
    'warn',
    {
      array: false,
      object: true,
    },
    {
      enforceForRenamedProperties: false,
    },
  ],
  'prefer-template': 'warn',
  'template-curly-spacing': [ 'error', 'never' ],

  quotes: [
    'error',
    'single',
    {
      avoidEscape: true,
      allowTemplateLiterals: true,
    },
  ],

  'lines-between-class-members': [ 'error', 'always' ],
  'no-multiple-empty-lines': [
    'error',
    {
      max: 1,
      maxEOF: 0,
      maxBOF: 0,
    },
  ],
}
