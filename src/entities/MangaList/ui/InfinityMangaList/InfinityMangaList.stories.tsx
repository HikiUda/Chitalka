import type { Meta, StoryObj } from '@storybook/react';

import { InfinityMangaList } from './InfinityMangaList';
import { getArrayMangaListItme } from '@/shared/api/mangaList';
import { CatalogCard } from '@/entities/MangaCard';

const meta: Meta<typeof InfinityMangaList> = {
    title: 'entities/MangaList/InfinityMangaList',
    component: InfinityMangaList,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InfinityMangaList>;

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
