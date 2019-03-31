module.exports = {
  'extends': 'standard',
  'plugins': [
    'jest',
    'codeceptjs',
  ],
  'rules': {
    'import/extensions': ['error', 'never', { 'css': 'always', 'json': 'always' }],
    'no-console': 'error',
    'comma-dangle': [2, 'always-multiline'],
    'no-unused-vars': 'error',
    'no-restricted-imports': ['warn', 'prop-types'],
    'import/prefer-default-export': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'max-len': [2, 135],
  },
  'overrides': {
    'files': ['**/__tests__/*.js'],
    'rules': {
      '@tinkoff/escheck/no-includes': 0,
    },
  },
  'env': {
    'jest/globals': true,
    'browser': true,
    'node': true,
    'codeceptjs/codeceptjs': true,
  }
}
