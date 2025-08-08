export const vueAttributes = {
  'vue/attributes-order': [
    'error',
    {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        [ 'UNIQUE', 'SLOT' ],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'ATTR_DYNAMIC',
        'ATTR_STATIC',
        'ATTR_SHORTHAND_BOOL',
        'EVENTS',
        'CONTENT',
      ],
      alphabetical: true,
    },
  ],

  'vue/attribute-hyphenation': [
    'error',
    'always',
    {
      ignore: [],
    },
  ],

  'vue/prop-name-casing': [ 'error', 'camelCase' ],
}
