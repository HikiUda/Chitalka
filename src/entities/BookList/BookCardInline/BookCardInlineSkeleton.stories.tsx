import type { Meta, StoryObj } from '@storybook/react';

import { BookCardInlineSkeleton } from './BookCardInlineSkeleton';

const meta: Meta<typeof BookCardInlineSkeleton> = {
    title: 'entities/BookCard/BookCardInlineSkeleton',
    component: BookCardInlineSkeleton,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BookCardInlineSkeleton>;

export const Primary: Story = {};
