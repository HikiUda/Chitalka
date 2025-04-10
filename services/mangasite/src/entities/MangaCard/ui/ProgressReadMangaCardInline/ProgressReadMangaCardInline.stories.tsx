import type { Meta, StoryObj } from '@storybook/react';

import { mangaListItem } from '../../model/mocks/mangaListItem';
import { ProgressReadMangaCardInline } from './ProgressReadMangaCardInline';

const meta: Meta<typeof ProgressReadMangaCardInline> = {
    title: 'entities/MangaCard/ProgressReadMangaCardInline',
    component: ProgressReadMangaCardInline,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProgressReadMangaCardInline>;

export const Primary: Story = {
    args: {
        manga: mangaListItem,
    },
};
export const WithDelete: Story = {
    args: {
        manga: mangaListItem,
        onDelete: () => 8,
    },
};
