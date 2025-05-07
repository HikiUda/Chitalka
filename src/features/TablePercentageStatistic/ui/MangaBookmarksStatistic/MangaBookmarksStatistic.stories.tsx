import type { Meta, StoryObj } from '@storybook/react';

import { mockMangaBookmarkStatisticApi } from '../../testing';
import { MangaBookmarksStatistic } from './MangaBookmarksStatistic';

const meta: Meta<typeof MangaBookmarksStatistic> = {
    title: 'features/TablePercentageStatistic/MangaBookmarksStatistic',
    component: MangaBookmarksStatistic,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockMangaBookmarkStatisticApi()],
        },
    },
};

export default meta;
type Story = StoryObj<typeof MangaBookmarksStatistic>;

export const Primary: Story = {
    args: {
        mangaId: 0,
    },
};
