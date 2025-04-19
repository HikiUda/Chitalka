
import type { Meta, StoryObj } from '@storybook/react';

import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
    title: 'shared/DatePicker',
    component: DatePicker,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {};