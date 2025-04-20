
import type { Meta, StoryObj } from '@storybook/react';

import { CommonFilters } from './CommonFilters';

const meta: Meta<typeof CommonFilters> = {
    title: 'shared/CommonFilters',
    component: CommonFilters,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommonFilters>;

export const Primary: Story = {};