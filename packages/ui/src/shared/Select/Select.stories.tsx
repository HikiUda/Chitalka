import type { Meta, StoryObj } from '@storybook/react';

import { MySelect as Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {};
