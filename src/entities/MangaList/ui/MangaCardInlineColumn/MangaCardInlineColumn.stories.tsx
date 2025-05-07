import type { Meta, StoryObj } from '@storybook/react';

import { MangaCardInlineColumn } from './MangaCardInlineColumn';
import { getArrayMangaListItme } from '@/shared/api/mangaList';
import { PrimaryMangaCardInline } from '@/entities/MangaCard';

const meta: Meta<typeof MangaCardInlineColumn> = {
    title: 'entities/MangaList/MangaCardInlineColumn',
    component: MangaCardInlineColumn,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaCardInlineColumn>;

export const Primary: Story = {
    args: {
        list: getArrayMangaListItme(3),
        //@ts-ignore
        renderItem: (manga) => <PrimaryMangaCardInline key={manga.id} manga={manga} />,
    },
};
export const Loading: Story = {
    args: {
        list: [],
        //@ts-ignore
        renderItem: (manga) => <PrimaryMangaCardInline key={manga.id} manga={manga} />,
        isLoading: true,
        skeletonsCount: 3,
    },
};
