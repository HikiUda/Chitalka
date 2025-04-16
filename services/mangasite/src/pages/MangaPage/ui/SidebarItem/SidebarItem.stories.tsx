import type { Meta, StoryObj } from '@storybook/react';

import { SidebarItem } from './SidebarItem';

const meta: Meta<typeof SidebarItem> = {
    title: 'pages/MangaPage/SidebarItem',
    component: SidebarItem,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

export const Primary: Story = {
    args: {
        title: 'Title',
        children: 'Children',
    },
};
