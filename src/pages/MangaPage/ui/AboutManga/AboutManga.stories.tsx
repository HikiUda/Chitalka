import type { Meta, StoryObj } from '@storybook/react';

import AboutManga from './AboutManga';
import { mockGetManga } from '@/shared/api/deprecated/individualManga/testing';
import {
    mockMangaRateStatisticApi,
    mockMangaBookmarkStatisticApi,
} from '@/features/TablePercentageStatistic/testing';

const meta: Meta<typeof AboutManga> = {
    title: 'pages/MangaPage/AboutManga',
    component: AboutManga,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [
                mockGetManga(),
                mockMangaBookmarkStatisticApi(),
                mockMangaRateStatisticApi(),
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof AboutManga>;

export const Primary: Story = {
    args: {
        mangaId: 0,
    },
};
