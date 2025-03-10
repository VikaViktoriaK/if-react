import react from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import stylistic from '@stylistic/eslint-plugin-js';

export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    env: {
      browser: true,
      es2021: true,
    },
    plugins: {
      react,
      import: importPlugin,
      stylistic,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
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
      'object-curly-spacing': ['error', 'always'],
      quotes: ['error', 'single'],
      '@stylistic/js/indent': ['error', 2],
    },
  },
];
