import type { Meta, StoryObj } from '@storybook/react';

import { LastUpdatedMangaCardInlineColume } from './LastUpdatedMangaCardInlineColume';
import { getArrayMangaListItme } from '@/entities/MangaCard/testing';

const meta: Meta<typeof LastUpdatedMangaCardInlineColume> = {
    title: 'entities/MangaList/LastUpdatedMangaCardInlineColume',
    component: LastUpdatedMangaCardInlineColume,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LastUpdatedMangaCardInlineColume>;

export const Primary: Story = {
    args: {
        mangaList: getArrayMangaListItme(10),
    },
};
