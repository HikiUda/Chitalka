
import type { Meta, StoryObj } from '@storybook/react';

import { SelectOrder } from './SelectOrder';

const meta: Meta<typeof SelectOrder> = {
    title: 'shared/SelectOrder',
    component: SelectOrder,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SelectOrder>;

export const Primary: Story = {};