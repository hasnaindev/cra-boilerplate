module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'block-no-empty': true,
    'color-hex-case': 'upper',
    'no-duplicate-selectors': true,
    'number-max-precision': 2,
  },
};
