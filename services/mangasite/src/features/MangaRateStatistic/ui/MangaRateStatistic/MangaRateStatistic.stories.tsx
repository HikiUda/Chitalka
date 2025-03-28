
import type { Meta, StoryObj } from '@storybook/react';

import { MangaRateStatistic } from './MangaRateStatistic';

const meta: Meta<typeof MangaRateStatistic> = {
    title: 'shared/MangaRateStatistic',
    component: MangaRateStatistic,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaRateStatistic>;

export const Primary: Story = {};