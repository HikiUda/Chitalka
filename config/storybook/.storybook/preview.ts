import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';

initialize();
export const parameters = {
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
        },
    },
};
const preview: Preview = {
    parameters,
    loaders: [mswLoader],
};

export default preview;
