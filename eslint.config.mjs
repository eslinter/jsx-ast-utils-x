import base from '@1stg/eslint-config';
import globals from 'globals';

export default [
  ...base,
  {
    rules: {
      'no-magic-numbers': 'off',
      'jest/expect-expect': 'off',
      'jest/no-identical-title': 'off',
      'jsdoc/require-param-type': 'off',
      'jsdoc/require-returns': 'off',
      'jsdoc/require-returns-type': 'off',
      'sonarjs/todo-tag': 'off',
      'unicorn-x/filename-case': 'off',
      'unicorn-x/no-array-callback-reference': 'off',
      'unicorn-x/prefer-spread': 'off',
    },
  },
  {
    files: ['**/__tests__/helper.js'],
    languageOptions: {
      globals: globals.jest,
    },
  },
];
