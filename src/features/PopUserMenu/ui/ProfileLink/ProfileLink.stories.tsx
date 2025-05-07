import type { Meta, StoryObj } from '@storybook/react';

import { mockGetUserData } from '@/shared/api/user/testing';
import { ProfileLink } from './ProfileLink';

const meta: Meta<typeof ProfileLink> = {
    title: 'features/PopUserMenu/ProfileLink',
    component: ProfileLink,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockGetUserData],
        },
    },
};

export default meta;
type Story = StoryObj<typeof ProfileLink>;

export const Primary: Story = {
    args: {
        username: 'wendsew',
    },
};
