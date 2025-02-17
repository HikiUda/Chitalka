import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginJest from 'eslint-plugin-jest';
//@ts-ignore
import pluginReactHooks from 'eslint-plugin-react-hooks';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    { plugins: { jest: pluginJest, react: pluginReact, 'react-hooks': pluginReactHooks } },
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...pluginJest.environments.globals.globals,
                ...globals.node,
                ...globals.es2025,
                __IS_DEV__: true,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    pluginReact.configs.flat['jsx-runtime'],
    { ignores: ['**/globals.d.ts'] },
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            'react-hooks/rules-of-hooks': 'warn',
            'react-hooks/exhaustive-deps': 'warn',
            'prefer-const': 'warn',
            '@typescript-eslint/ban-ts-comment': 'warn',
        },
    },
];
