
import type { Meta, StoryObj } from '@storybook/react';

import { ProfileLink } from './ProfileLink';

const meta: Meta<typeof ProfileLink> = {
    title: 'shared/ProfileLink',
    component: ProfileLink,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileLink>;

export const Primary: Story = {};