module.exports = {
  extends: ['@repo/eslint-config/next.js'],
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: false,
      optionalDependencies: false,
      peerDependencies: false,
    },
  ],
};
