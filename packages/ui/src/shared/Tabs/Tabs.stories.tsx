import type { Meta, StoryObj } from '@storybook/react';

import { MyTabs as Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'shared/Tabs',
    component: Tabs,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {};
