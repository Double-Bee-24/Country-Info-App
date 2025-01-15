import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
    es2020: true,
  },
  rules: {
    'no-unused-vars': 'error',
    'no-undef': 'error',
    'no-console': 'error',
  },
  overrides: [
    {
      files: ['src/**/*.ts'],
      rules: {
        'no-console': 'error',
      },
    },
  ],
});
