
import type { Meta, StoryObj } from '@storybook/react';

import { CommentForm } from './CommentForm';

const meta: Meta<typeof CommentForm> = {
    title: 'shared/CommentForm',
    component: CommentForm,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentForm>;

export const Primary: Story = {};