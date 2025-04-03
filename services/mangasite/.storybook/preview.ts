import type { Preview } from '@storybook/react';
import { GlobalStoryDecorator } from '@packages/model/src/config/storybook';
import basePreview from '@config/storybook/.storybook/preview'; //{ parameters }

const preview: Preview = {
    ...basePreview,
    decorators: GlobalStoryDecorator(),
};

export default preview;
