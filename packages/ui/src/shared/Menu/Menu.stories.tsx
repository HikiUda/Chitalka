import type { Meta, StoryObj } from '@storybook/react';

import { MyMenu as Menu } from './Menu';

const meta: Meta<typeof Menu> = {
    title: 'shared/Menu',
    component: Menu,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Primary: Story = {};
