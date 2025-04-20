
import type { Meta, StoryObj } from '@storybook/react';

import { RateCountRange } from './RateCountRange';

const meta: Meta<typeof RateCountRange> = {
    title: 'shared/RateCountRange',
    component: RateCountRange,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RateCountRange>;

export const Primary: Story = {};