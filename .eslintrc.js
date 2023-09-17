module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'import', 'prettier'],
  // 他の設定...
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
