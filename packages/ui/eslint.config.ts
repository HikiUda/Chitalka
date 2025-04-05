import config from '@config/eslint';

export default [
    ...config,
    {
        rules: {
            'fsd-layer-import/to-absolute': [
                'error',
                { alias: '@ui', absoluteDir: ['shared', 'layout', 'assets', 'styles'] },
            ],
        },
    },
];
