import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: new URL('.', import.meta.url).pathname,
})

export default [
  {
    ignores: ['.next/**', 'node_modules/**'],
  },
  ...compat.extends('@rocketseat/eslint-config/react'),
]
