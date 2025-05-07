import type { Meta, StoryObj } from '@storybook/react';

import { StatisticsMangaCardInline } from './StatisticsMangaCardInline';
import { mockMangaListItem } from '@/shared/api/mangaList';

const meta: Meta<typeof StatisticsMangaCardInline> = {
    title: 'entities/MangaCard/StatisticsMangaCardInline',
    component: StatisticsMangaCardInline,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatisticsMangaCardInline>;

export const Primary: Story = {
    args: {
        manga: mockMangaListItem,
    },
};
