import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { SelectTimeRange } from './SelectTimeRange';

const meta: Meta<typeof SelectTimeRange> = {
    title: 'entities/SelectTimeRange',
    component: SelectTimeRange,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SelectTimeRange>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('SelectButtonByDefault'));
    },
};
