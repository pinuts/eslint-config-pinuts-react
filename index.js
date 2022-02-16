module.exports = {
    extends: [
        '@pinuts/eslint-config-pinuts-base',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended'
    ],
    parser: '@babel/eslint-parser',
    settings: {
      react: {
        version: 'detect',
      },
    }
};
