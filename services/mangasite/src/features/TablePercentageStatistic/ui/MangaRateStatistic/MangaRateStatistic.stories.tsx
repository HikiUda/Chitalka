import type { Meta, StoryObj } from '@storybook/react';

import { mockMangaRateStatisticApi } from '../../testing';
import { MangaRateStatistic } from './MangaRateStatistic';

const meta: Meta<typeof MangaRateStatistic> = {
    title: 'features/TablePercentageStatistic/MangaRateStatistic',
    component: MangaRateStatistic,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockMangaRateStatisticApi()],
        },
    },
};

export default meta;
type Story = StoryObj<typeof MangaRateStatistic>;

export const Primary: Story = {
    args: {
        mangaId: 0,
    },
};
