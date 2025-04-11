import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';
import { AuthModal } from './AuthModal';

const meta: Meta<typeof AuthModal> = {
    title: 'features/AuthModal',
    component: AuthModal,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AuthModal>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('AuthModal-Button'));
    },
};
