
import type { Meta, StoryObj } from '@storybook/react';

import { BigFill } from './BigFill';

const meta: Meta<typeof BigFill> = {
    title: 'shared/BigFill',
    component: BigFill,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BigFill>;

export const Primary: Story = {};