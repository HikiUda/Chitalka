
import type { Meta, StoryObj } from '@storybook/react';

import { LineBookmarkStatistic } from './LineBookmarkStatistic';

const meta: Meta<typeof LineBookmarkStatistic> = {
    title: 'shared/LineBookmarkStatistic',
    component: LineBookmarkStatistic,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LineBookmarkStatistic>;

export const Primary: Story = {};