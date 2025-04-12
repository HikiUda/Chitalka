import type { Meta, StoryObj } from '@storybook/react';

import { SidebarItem } from './SidebarItem';

const meta: Meta<typeof SidebarItem> = {
    title: 'pageMangaPage/SidebarItem',
    component: SidebarItem,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

export const Primary: Story = {};
