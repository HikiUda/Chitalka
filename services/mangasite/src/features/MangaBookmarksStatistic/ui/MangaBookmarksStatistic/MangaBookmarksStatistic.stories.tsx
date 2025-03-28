
import type { Meta, StoryObj } from '@storybook/react';

import { MangaBookmarksStatistic } from './MangaBookmarksStatistic';

const meta: Meta<typeof MangaBookmarksStatistic> = {
    title: 'shared/MangaBookmarksStatistic',
    component: MangaBookmarksStatistic,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaBookmarksStatistic>;

export const Primary: Story = {};