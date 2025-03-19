
import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
    title: 'shared/Slider',
    component: Slider,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Primary: Story = {};