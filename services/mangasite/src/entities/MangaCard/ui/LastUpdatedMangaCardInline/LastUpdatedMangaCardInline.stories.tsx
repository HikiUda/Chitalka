import type { Meta, StoryObj } from '@storybook/react';

import { LastUpdatedMangaCardInline } from './LastUpdatedMangaCardInline';
import { mangaListItem } from '@/shared/api/mangaList';

const meta: Meta<typeof LastUpdatedMangaCardInline> = {
    title: 'entities/MangaCard/LastUpdatedMangaCardInline',
    component: LastUpdatedMangaCardInline,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LastUpdatedMangaCardInline>;

export const Primary: Story = {
    args: {
        manga: mangaListItem,
    },
};
