import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig, BuildMode, BuildPaths, EnvBuild } from '@config/build';
import { MANGASITE_PORT } from '@packages/model/src/const/microservides/microservices';
import { LOCAL_BACKEND } from '@packages/model/src/const/api/localbackend';
import packageJson from './package.json';

export default (env: EnvBuild) => {
    const mode: BuildMode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || MANGASITE_PORT;
    const apiUrl = env.apiUrl || LOCAL_BACKEND;
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
        apiUrl,
    });

    config!.optimization!.runtimeChunk = 'single';
    // config!.experiments!.topLevelAwait = true;

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
