import type { Meta, StoryObj } from '@storybook/react';

import { SortByOrderMenu } from './SortByOrderMenu';

const meta: Meta<typeof SortByOrderMenu> = {
    title: 'shared/SortByOrderMenu',
    component: SortByOrderMenu,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SortByOrderMenu>;

export const Primary: Story = {};
