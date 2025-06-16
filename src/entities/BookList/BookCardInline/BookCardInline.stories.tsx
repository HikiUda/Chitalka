import type { Meta, StoryObj } from '@storybook/react';

import { BookCardInline } from './BookCardInline';

const meta: Meta<typeof BookCardInline> = {
    title: 'entities/BookCard/BookCardInline',
    component: BookCardInline,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BookCardInline>;

export const Primary: Story = {
    args: {
        title: 'Title',
        subtitle: 'subtitle',
        children: <div>additional content</div>,
    },
};
