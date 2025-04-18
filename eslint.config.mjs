import stylisticPlugin from '@stylistic/eslint-plugin-js';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';
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
      prettier: eslintPluginPrettier,
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
      'prettier/prettier': ['error', { singleQuote: true }],
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-unreachable': 'error',
      'no-empty': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      semi: ['error', 'always'],
    },
  },
];
