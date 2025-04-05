
import type { Meta, StoryObj } from '@storybook/react';

import { LastChapterMangaCard } from './LastChapterMangaCard';

const meta: Meta<typeof LastChapterMangaCard> = {
    title: 'shared/LastChapterMangaCard',
    component: LastChapterMangaCard,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LastChapterMangaCard>;

export const Primary: Story = {};