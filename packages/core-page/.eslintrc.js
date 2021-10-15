// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'prefer-template': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'no-extra-semi': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/no-extra-semi': ['error'],
    'linebreak-style': ['error', 'unix'],
    eqeqeq: [2, 'allow-null'],
    'no-mixed-spaces-and-tabs': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'prettier/prettier': 'error',
    'react/self-closing-comp': ['error'],
  },
}
