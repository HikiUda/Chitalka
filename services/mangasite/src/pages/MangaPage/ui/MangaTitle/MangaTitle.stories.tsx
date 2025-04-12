import type { Meta, StoryObj } from '@storybook/react';

import { MangaTitle } from './MangaTitle';

const meta: Meta<typeof MangaTitle> = {
    title: 'page/MangaPage/MangaTitle',
    component: MangaTitle,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaTitle>;

export const Primary: Story = {};
