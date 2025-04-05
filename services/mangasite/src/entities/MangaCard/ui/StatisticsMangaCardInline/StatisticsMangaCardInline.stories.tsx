
import type { Meta, StoryObj } from '@storybook/react';

import { StatisticsMangaCardInline } from './StatisticsMangaCardInline';

const meta: Meta<typeof StatisticsMangaCardInline> = {
    title: 'shared/StatisticsMangaCardInline',
    component: StatisticsMangaCardInline,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatisticsMangaCardInline>;

export const Primary: Story = {};