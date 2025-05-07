import type { Meta, StoryObj } from '@storybook/react';

import { mockGetUserData } from '@/shared/api/user/testing';
import { userEvent, within } from '@storybook/testing-library';
import { PopUserMenu } from './PopUserMenu';

const meta: Meta<typeof PopUserMenu> = {
    title: 'features/PopUserMenu/PopUserMenu',
    component: PopUserMenu,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockGetUserData],
        },
    },
};

export default meta;
type Story = StoryObj<typeof PopUserMenu>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('PopUserMenu-Button'));
    },
};
