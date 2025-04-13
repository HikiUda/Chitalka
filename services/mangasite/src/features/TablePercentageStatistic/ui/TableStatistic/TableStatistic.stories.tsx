import type { Meta, StoryObj } from '@storybook/react';

import { mockMangaBookmarkStatistic } from '../../model/api/bookmark/mockMangaBookmarkStatisticApi';
import { TableStatistic } from './TableStatistic';

const meta: Meta<typeof TableStatistic> = {
    title: 'features/TablePercentageStatistic/TableStatistic',
    component: TableStatistic,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TableStatistic>;

export const Primary: Story = {
    args: {
        title: 'Title',
        lines: mockMangaBookmarkStatistic.bookmarks,
    },
};
export const Loadign: Story = {
    args: {
        lines: [],
        isLoading: true,
    },
};
