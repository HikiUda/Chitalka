import type { Meta, StoryObj } from '@storybook/react';

import { MangaTitle } from './MangaTitle';
import { mockManga } from '@/shared/api/deprecated/individualManga/testing';

const meta: Meta<typeof MangaTitle> = {
    title: 'pages/MangaPage/MangaTitle',
    component: MangaTitle,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaTitle>;

export const Primary: Story = {
    args: {
        manga: mockManga,
    },
};
