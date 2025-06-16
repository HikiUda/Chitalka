import type { Meta, StoryObj } from '@storybook/react';

import { BookCard } from '../BookCard/BookCard';
import { BookGridLayout } from './BookGridLayout';
import { getArrayMangaListItme } from '@/shared/api/deprecated/mangaList';

const meta: Meta<typeof BookGridLayout> = {
    title: 'entities/MangaList/BookGridLayout',
    component: BookGridLayout,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BookGridLayout>;

export const Primary: Story = {
    args: {
        list: getArrayMangaListItme(20),
        //@ts-ignore
        renderItem: (manga) => <BookCard key={manga.id} manga={manga} />,
    },
};
export const Loading: Story = {
    args: {
        list: [],
        //@ts-ignore
        renderItem: (manga) => <BookCard key={manga.id} manga={manga} />,
        isLoading: true,
    },
};
