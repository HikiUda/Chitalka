import type { Meta, StoryObj } from '@storybook/react';

import { MangaCardInline } from './MangaCardInline';

const meta: Meta<typeof MangaCardInline> = {
    title: 'entities/MangaCard/MangaCardInline',
    component: MangaCardInline,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaCardInline>;

export const Primary: Story = {
    args: {
        title: 'Title',
        subtitle: 'subtitle',
        children: <div>additional content</div>,
    },
};
