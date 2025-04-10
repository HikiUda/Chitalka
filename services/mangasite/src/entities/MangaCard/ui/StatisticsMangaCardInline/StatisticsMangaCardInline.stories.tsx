import type { Meta, StoryObj } from '@storybook/react';

import { mangaListItem } from '../../model/mocks/mangaListItem';
import { StatisticsMangaCardInline } from './StatisticsMangaCardInline';

const meta: Meta<typeof StatisticsMangaCardInline> = {
    title: 'entities/MangaCard/StatisticsMangaCardInline',
    component: StatisticsMangaCardInline,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatisticsMangaCardInline>;

export const Primary: Story = {
    args: {
        manga: mangaListItem,
    },
};
