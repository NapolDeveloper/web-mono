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
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/no-array-index-key': 'off',
    'react/button-has-type': 'off',
    'react/jsx-sort-props': 'off',
    'import/no-extraneous-dependencies': 'off',
    'turbo/no-undeclared-env-vars': 'off',
    'no-console': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    'react/jsx-boolean-value': 'off',
    'react/self-closing-comp': 'off',
    'import/newline-after-import': 'off',
    'react/function-component-definitio': 'off',
    'import/order': 'off',
    'react/function-component-definition': 'off',
    'node/no-missing-require': 'off',
    'node/no-missing-import': 'off',
    'node/no-extraneous-require': 'off',
    'node/no-extraneous-import': 'off',
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     devDependencies: false,
    //     optionalDependencies: false,
    //     peerDependencies: false,
    //   },
    // ],
  },
};
