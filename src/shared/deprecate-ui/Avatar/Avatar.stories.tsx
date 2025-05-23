
import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {};