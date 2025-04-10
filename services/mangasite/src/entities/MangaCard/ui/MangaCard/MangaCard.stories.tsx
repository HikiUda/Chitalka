import type { Meta, StoryObj } from '@storybook/react';

import { MangaCard } from './MangaCard';

const meta: Meta<typeof MangaCard> = {
    title: 'entities/MangaCard/MangaCard',
    component: MangaCard,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaCard>;

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
