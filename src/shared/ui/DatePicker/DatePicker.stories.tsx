import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';
import { DatePicker } from './DatePicker';

/** Other props see in the react aria documentation DatePicker */
const meta: Meta<typeof DatePicker> = {
    title: 'shared/DatePicker',
    component: DatePicker,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('DatePicker-Open-Button'));
    },
};
