import config from '@config/eslint';

export default [
    ...config,
    {
        rules: {
            'fsd-layer-import/to-absolute': [
                'error',
                { alias: '@model', absoluteDir: ['api', 'config', 'const', 'lib', 'types'] },
            ],
        },
    },
];
