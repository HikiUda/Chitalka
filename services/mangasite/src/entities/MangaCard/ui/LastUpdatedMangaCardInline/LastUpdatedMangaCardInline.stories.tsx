import type { Meta, StoryObj } from '@storybook/react';

import { mangaListItem } from '../../model/mocks/mangaListItem';
import { LastUpdatedMangaCardInline } from './LastUpdatedMangaCardInline';

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
