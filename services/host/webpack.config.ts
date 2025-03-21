import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig, BuildMode, BuildPaths, EnvBuild } from '@config/build';
import {
    MANGASITE_PORT,
    HOST_PORT,
    LOCALHOST,
} from '@packages/model/src/const/microservides/microservices';
import packageJson from './package.json';

export default (env: EnvBuild) => {
    const mode: BuildMode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || HOST_PORT;

    const MANGASITE_REMOTE_URL = env.MANGASITE_REMOTE_URL || LOCALHOST + MANGASITE_PORT;

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
            name: 'host',
            filename: 'remoteEntry.js',
            remotes: {
                mangasite: `mangasite@${MANGASITE_REMOTE_URL}/remoteEntry.js`,
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
