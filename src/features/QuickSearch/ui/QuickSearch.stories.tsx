import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';
import { QuickSearch } from './QuickSearch';

const meta: Meta<typeof QuickSearch> = {
    title: 'features/QuickSearchModal',
    component: QuickSearch,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof QuickSearch>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('QuickSearch-Button'));
    },
};
