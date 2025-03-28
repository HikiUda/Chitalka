import type { Meta, StoryObj } from '@storybook/react';

import MangaChapters from './MangaChapters';

const meta: Meta<typeof MangaChapters> = {
    title: 'shared/MangaChapters',
    component: MangaChapters,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaChapters>;

export const Primary: Story = {};
