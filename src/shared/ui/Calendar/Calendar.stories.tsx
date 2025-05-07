
import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from './Calendar';

const meta: Meta<typeof Calendar> = {
    title: 'shared/Calendar',
    component: Calendar,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {};