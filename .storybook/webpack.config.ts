import path from 'path';
import webpack from 'webpack';
import { createSvgLoader } from '../builder/loaders/svgLoader';
import { createStyleLoader } from '../builder/loaders/styleLoader';
import { BuildPaths } from '../builder/types/config';

export const buildConfig =
    (paths: BuildPaths) =>
    ({ config }: { config: webpack.Configuration }) => {
        config.resolve?.modules?.push(paths.src);
        config.resolve?.extensions?.push('.ts', '.tsx');
        config.resolve!.alias = {
            ...config!.resolve!.alias,
            '@': paths.src,
        };

        if (config.module?.rules) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            config.module.rules = config.module?.rules?.map((rule: any) => {
                // rule: RuleSetRule
                if (/svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }
                return rule;
            });

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            config.module?.rules?.push(createSvgLoader({ isDev: true } as any));
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        config.module?.rules?.push(createStyleLoader({ isDev: true } as any));

        config.plugins?.push(
            new webpack.DefinePlugin({
                __IS_DEV__: true,
                __API_URL__: JSON.stringify('http://localhost:8000'),
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
