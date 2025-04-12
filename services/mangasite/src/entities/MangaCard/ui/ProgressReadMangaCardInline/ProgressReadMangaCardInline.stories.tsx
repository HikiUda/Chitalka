import type { Meta, StoryObj } from '@storybook/react';

import { ProgressReadMangaCardInline } from './ProgressReadMangaCardInline';
import { mangaListItem } from '@/shared/api/mangaList';

const meta: Meta<typeof ProgressReadMangaCardInline> = {
    title: 'entities/MangaCard/ProgressReadMangaCardInline',
    component: ProgressReadMangaCardInline,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProgressReadMangaCardInline>;

export const Primary: Story = {
    args: {
        manga: mangaListItem,
    },
};
export const WithDelete: Story = {
    args: {
        manga: mangaListItem,
        onDelete: () => 8,
    },
};
