module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      files: ['*.js'],
      rules: {
        indent: ['error', 4],
      },
    },
    {
      files: ['*eslintrc.js'],
      rules: {
        indent: ['error', 2],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
  },
};
