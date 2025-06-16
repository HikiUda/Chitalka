import type { Meta, StoryObj } from '@storybook/react';

import { BookCard } from './BookCard';

const meta: Meta<typeof BookCard> = {
    title: 'entities/BookCard/BookCard',
    component: BookCard,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BookCard>;

export const Primary: Story = {
    args: {
        title: 'Title',
        subtitle: 'subtitle',
        label1: 'lab1',
        label2: 'lab2',
        label3: 'lab3',
    },
};
export const AdaptiveToContainerWidth: Story = {
    args: {
        title: 'Title',
        subtitle: 'subtitle',
        label1: 'lab1',
        label2: 'lab2',
        label3: 'lab3',
        adaptive: 'dynamic',
    },
    decorators: [
        (Story) => (
            <div style={{ width: 500 }}>
                <Story />
            </div>
        ),
    ],
};
