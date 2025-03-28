import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../../webpack/src';
import { createStyleLoader, createSvgLoader, PathsToPackages } from '../../webpack/src';

export const buildConfig =
    (paths: BuildPaths) =>
    ({ config }: { config: webpack.Configuration }) => {
        config.resolve?.modules?.push(paths.src);
        config.resolve?.extensions?.push('.ts', '.tsx');
        config.resolve!.alias = {
            ...config!.resolve!.alias,
            '@': paths.src,
            ...PathsToPackages,
        };

        if (config.module?.rules) {
            // eslint-disable-next-line no-param-reassign
            config.module.rules = config.module?.rules?.map((rule: any) => {
                // rule: RuleSetRule
                if (/svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }
                return rule;
            });

            config.module?.rules?.push(createSvgLoader({ isDev: true } as any));
        }

        config.module?.rules?.push(createStyleLoader({ isDev: true } as any));

        config.plugins?.push(
            new webpack.DefinePlugin({
                __IS_DEV__: true,
                __API_URL__: true,
            }),
        );

        return config;
    };

export default buildConfig({
    output: '',
    entry: '',
    html: '',
    public: '',
    src: path.resolve(__dirname, '..', 'src'),
});
