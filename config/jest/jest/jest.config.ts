/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from 'jest';
import path from 'path';

export const config: Config = {
    clearMocks: true,
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    testEnvironment: 'jsdom',
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    rootDir: '../',
    testMatch: [`<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)`],
    modulePaths: ['<rootDir>/src'],
    setupFilesAfterEnv: [`<rootDir>/jest/setupTests.ts`],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
    globals: { __IS_DEV__: true },
    // reporters: [
    //     'default',
    //     [
    //         'jest-html-reporters',
    //         {
    //             publicPath: './reports',
    //             filename: 'report.html',
    //             openReport: true,
    //             inlineSource: true,
    //         },
    //     ],
    // ],
};
export default config;
