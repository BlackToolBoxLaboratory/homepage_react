module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['react', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules/', '.cache/', 'dist/'],
  rules: {
    'no-console': ['warn'],
    'no-unused-vars': ['warn'],

    'react/prop-types': ['off'],
    'react/display-name': ['off'],
  },
};
