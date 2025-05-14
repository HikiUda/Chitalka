import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';
import { mockAuthApi } from '@/shared/api/deprecated/auth/testing';
import { mockGetUserData } from '@/shared/api/deprecated/user/testing';
import { AuthModal } from './AuthModal';

const meta: Meta<typeof AuthModal> = {
    title: 'features/AuthModal',
    component: AuthModal,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [...mockAuthApi, mockGetUserData],
        },
    },
};

export default meta;
type Story = StoryObj<typeof AuthModal>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('AuthModal-Button'));
    },
};
