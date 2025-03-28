
import type { Meta, StoryObj } from '@storybook/react';

import { Comment } from './Comment';

const meta: Meta<typeof Comment> = {
    title: 'shared/Comment',
    component: Comment,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Comment>;

export const Primary: Story = {};