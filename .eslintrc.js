module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: '',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'standard-with-typescript'
      ],
      parserOptions: {
        project: ['./tsconfig.json']
      }
    }
  ]
}
