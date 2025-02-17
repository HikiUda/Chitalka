import type { Meta, StoryObj } from '@storybook/react';

import { MangaPage } from './MangaPage';

const meta: Meta<typeof MangaPage> = {
    title: 'page/MangaPage',
    component: MangaPage,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaPage>;

export const Primary: Story = {};
