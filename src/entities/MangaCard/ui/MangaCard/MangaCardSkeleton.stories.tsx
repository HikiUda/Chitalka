import type { Meta, StoryObj } from '@storybook/react';

import { MangaCardSkeleton } from './MangaCardSkeleton';

const meta: Meta<typeof MangaCardSkeleton> = {
    title: 'entities/MangaCard/MangaCardSkeleton',
    component: MangaCardSkeleton,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaCardSkeleton>;

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
