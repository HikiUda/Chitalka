//@ts-ignore
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginJest from 'eslint-plugin-jest';
//@ts-ignore
import importPlugin from 'eslint-plugin-import';
//@ts-ignore
import pluginReactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
//@ts-ignore
// import FsdPlugin from 'eslint-plugin-fsd-layer-import';
import pluginQuery from '@tanstack/eslint-plugin-query';
import { eslintBoundariesConfig } from './eslint.boundaries.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        plugins: {
            jest: pluginJest,
            react: pluginReact,
            'react-hooks': pluginReactHooks,
            'unused-imports': unusedImports,
        },
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...pluginJest.environments.globals.globals,
                ...globals.node,
                ...globals.es2025,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
    importPlugin.flatConfigs.recommended,
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    ...pluginQuery.configs['flat/recommended'],
    eslintConfigPrettier,
    pluginReact.configs.flat['jsx-runtime'],
    eslintBoundariesConfig,
    { ignores: ['**/globals.d.ts'] },
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error',
            'prefer-const': 'warn',
            '@typescript-eslint/ban-ts-comment': 'warn',
            'react/display-name': 'off',
            'import/no-unresolved': 'off',
            'import/order': 'error',
            'import/named': 'off',
            'unused-imports/no-unused-imports': 'error',
        },
    },
];
