import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

initialize();
export const parameters = {
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
        },
    },
    chromatic: { delay: 1000 },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
};
const preview: Preview = {
    parameters,
    loaders: [mswLoader],
};

export default preview;
