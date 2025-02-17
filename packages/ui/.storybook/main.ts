import { config as mainConfig } from '@config/storybook';
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    ...mainConfig,
    stories: ['../shared', '../entities', '../layout'],
};
export default config;
