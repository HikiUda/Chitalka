import type { Preview } from '@storybook/react';
import { GlobalStoryDecorator } from '@packages/model/src/config/storybook';
import { parameters } from '@config/storybook/.storybook/preview';

const preview: Preview = {
    parameters,
    decorators: GlobalStoryDecorator(),
};

export default preview;
