import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../../webpack/src';
import { createStyleLoader } from '../../webpack/src';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        output: '',
        entry: '',
        html: '',
        public: '',
        src: path.resolve(__dirname, '..', 'src'),
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    if (config.module?.rules) {
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module?.rules?.map((rule: any) => {
            // rule: RuleSetRule
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });

        config.module?.rules?.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
    }

    config.module?.rules?.push(createStyleLoader({ isDev: true } as any));

    config.plugins?.push(
        new webpack.DefinePlugin({
            __IS_DEV__: true,
        }),
    );

    return config;
};
