import type { Meta, StoryObj } from '@storybook/react';

import { PrimaryMangaCardInline } from './PrimaryMangaCardInline';
import { mockMangaListItem } from '@/shared/api/deprecated/mangaList';

const meta: Meta<typeof PrimaryMangaCardInline> = {
    title: 'entities/MangaCard/PrimaryMangaCardInline',
    component: PrimaryMangaCardInline,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PrimaryMangaCardInline>;

export const Primary: Story = {
    args: {
        manga: mockMangaListItem,
    },
};
