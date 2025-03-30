import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginImport from 'eslint-plugin-import';
import stylisticPlugin from '@stylistic/eslint-plugin-js';
import globals from 'globals';

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    plugins: {
      react: eslintPluginReact,
      import: eslintPluginImport,
      '@stylistic/js': stylisticPlugin,
    },
    rules: {
      'object-curly-spacing': ['error', 'always'],
      quotes: ['error', 'single'],
      '@stylistic/js/indent': ['error', 2],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
    },
  },
];
