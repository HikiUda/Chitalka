/** @type {import('stylelint').Config} */

export const config = {
    extends: ['stylelint-config-standard-scss'],
    rules: {
        'selector-class-pattern': '[A-Za-z]+',
    },
};

export default config;