import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from '@config/build';
import { BuildMode, BuildPaths, EnvBuild } from '@config/build';
import packageJson from './package.json';
import { MANGASITE_PORT } from '@packages/model/const/microservides/microservices';

export default (env: EnvBuild) => {
    const mode: BuildMode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || MANGASITE_PORT;

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        public: path.resolve(__dirname, 'public'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const config: webpack.Configuration = buildWebpackConfig({
        paths,
        isDev,
        mode,
        port: PORT,
        analyzer: false,
    });

    config.plugins?.push(
        new webpack.container.ModuleFederationPlugin({
            name: 'mangasite',
            filename: 'remoteEntry.js',
            exposes: {
                './Router': './src/app/providers/router/index.ts',
            },
            shared: {
                ...packageJson.dependencies,
                react: {
                    eager: true,
                    requiredVersion: packageJson.dependencies['react'],
                },
                'react-router-dom': {
                    eager: true,
                    requiredVersion: packageJson.dependencies['react-router-dom'],
                },
                'react-dom': {
                    eager: true,
                    requiredVersion: packageJson.dependencies['react-dom'],
                },
            },
        }),
    );

    return config;
};
