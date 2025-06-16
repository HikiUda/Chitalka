import type { Meta, StoryObj } from '@storybook/react';

import { BookCardSkeleton } from './BookCardSkeleton';

const meta: Meta<typeof BookCardSkeleton> = {
    title: 'entities/BookCard/BookCardSkeleton',
    component: BookCardSkeleton,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BookCardSkeleton>;

export const Primary: Story = {};
export const AdaptiveToContainerWidth: Story = {
    args: {
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
