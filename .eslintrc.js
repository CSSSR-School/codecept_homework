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
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1,
    'react/react-in-jsx-scope': 1,
    'object-curly-spacing': ['error', 'always'],
    'react/jsx-curly-brace-presence': [1, 'never'],
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
