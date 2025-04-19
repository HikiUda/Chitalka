
import type { Meta, StoryObj } from '@storybook/react';

import { RateRange } from './RateRange';

const meta: Meta<typeof RateRange> = {
    title: 'shared/RateRange',
    component: RateRange,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RateRange>;

export const Primary: Story = {};