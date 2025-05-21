import type { Meta, StoryObj } from '@storybook/react';

import { MangaGridLayout } from './MangaGridLayout';
import { getArrayMangaListItme } from '@/shared/api/deprecated/mangaList';
import { CatalogCard } from '@/entities/MangaCard';

const meta: Meta<typeof MangaGridLayout> = {
    title: 'entities/MangaList/MangaGridLayout',
    component: MangaGridLayout,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaGridLayout>;

export const Primary: Story = {
    args: {
        list: getArrayMangaListItme(20),
        //@ts-ignore
        renderItem: (manga) => <CatalogCard key={manga.id} manga={manga} />,
    },
};
export const Loading: Story = {
    args: {
        list: [],
        //@ts-ignore
        renderItem: (manga) => <CatalogCard key={manga.id} manga={manga} />,
        isLoading: true,
    },
};
