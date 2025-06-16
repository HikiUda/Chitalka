import type { Meta, StoryObj } from '@storybook/react';

import { BookCardInline } from '../BookCardInline/BookCardInline';
import { BookListLayout } from './BookListLayout';
import { getArrayMangaListItme } from '@/shared/api/deprecated/mangaList';

const meta: Meta<typeof BookListLayout> = {
    title: 'entities/MangaList/BookListLayout',
    component: BookListLayout,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BookListLayout>;

export const Primary: Story = {
    args: {
        list: getArrayMangaListItme(3),
        //@ts-ignore
        renderItem: (manga) => <BookCardInline key={manga.id} manga={manga} />,
    },
};
export const Loading: Story = {
    args: {
        list: [],
        //@ts-ignore
        renderItem: (manga) => <BookCardInline key={manga.id} manga={manga} />,
        isLoading: true,
        skeletonsCount: 3,
    },
};
