import type { Meta, StoryObj } from '@storybook/react';

import { mangaListItem } from '../../model/mocks/mangaListItem';
import { LastChapterMangaCard } from './LastChapterMangaCard';

const meta: Meta<typeof LastChapterMangaCard> = {
    title: 'entities/MangaCard/LastChapterMangaCard',
    component: LastChapterMangaCard,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LastChapterMangaCard>;

export const Primary: Story = {
    args: {
        manga: mangaListItem,
    },
};
