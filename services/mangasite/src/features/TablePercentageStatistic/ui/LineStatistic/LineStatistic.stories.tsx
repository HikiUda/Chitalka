import type { Meta, StoryObj } from '@storybook/react';

import { LineStatistic } from './LineStatistic';

const meta: Meta<typeof LineStatistic> = {
    title: 'features/TablePercentageStatistic/LineStatistic',
    component: LineStatistic,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LineStatistic>;

export const Primary: Story = {
    args: {
        title: 'Title',
        before: <div style={{ width: 10, height: 10, background: '#000' }} />,
        percent: 45,
        count: 60,
    },
};
