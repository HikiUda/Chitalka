import type { Meta, StoryObj } from '@storybook/react';

import { MangaListLayout } from './MangaListLayout';
import { getArrayMangaListItme } from '@/shared/api/deprecated/mangaList';
import { PrimaryMangaCardInline } from '@/entities/MangaCard';

const meta: Meta<typeof MangaListLayout> = {
    title: 'entities/MangaList/MangaListLayout',
    component: MangaListLayout,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaListLayout>;

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
