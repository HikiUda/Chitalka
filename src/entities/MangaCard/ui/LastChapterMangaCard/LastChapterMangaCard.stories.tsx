import type { Meta, StoryObj } from '@storybook/react';

import { LastChapterMangaCard } from './LastChapterMangaCard';
import { mockMangaListItem } from '@/shared/api/deprecated/mangaList';

const meta: Meta<typeof LastChapterMangaCard> = {
    title: 'entities/MangaCard/LastChapterMangaCard',
    component: LastChapterMangaCard,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LastChapterMangaCard>;

export const Primary: Story = {
    args: {
        manga: mockMangaListItem,
    },
};
