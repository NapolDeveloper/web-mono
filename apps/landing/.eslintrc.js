module.exports = {
  extends: ['@repo/eslint-config/next.js'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@components', './src/components'],
          ['@assets', './src/assets'],
          ['@apis', './apis'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: false,
      optionalDependencies: false,
      peerDependencies: false,
    },
  ],
};
