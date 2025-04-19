import type { Meta, StoryObj } from '@storybook/react';

import { AgeRateRange } from './AgeRateRange';

const meta: Meta<typeof AgeRateRange> = {
    title: 'shared/AgeRateRange',
    component: AgeRateRange,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AgeRateRange>;

export const Primary: Story = {};
