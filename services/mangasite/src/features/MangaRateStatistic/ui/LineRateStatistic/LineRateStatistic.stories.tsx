
import type { Meta, StoryObj } from '@storybook/react';

import { LineRateStatistic } from './LineRateStatistic';

const meta: Meta<typeof LineRateStatistic> = {
    title: 'shared/LineRateStatistic',
    component: LineRateStatistic,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LineRateStatistic>;

export const Primary: Story = {};