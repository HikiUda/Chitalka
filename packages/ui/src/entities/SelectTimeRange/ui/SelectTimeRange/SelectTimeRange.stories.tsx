
import type { Meta, StoryObj } from '@storybook/react';

import { SelectTimeRange } from './SelectTimeRange';

const meta: Meta<typeof SelectTimeRange> = {
    title: 'shared/SelectTimeRange',
    component: SelectTimeRange,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SelectTimeRange>;

export const Primary: Story = {};