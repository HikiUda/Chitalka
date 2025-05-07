
import type { Meta, StoryObj } from '@storybook/react';

import { SidebarModal } from './SidebarModal';

const meta: Meta<typeof SidebarModal> = {
    title: 'shared/SidebarModal',
    component: SidebarModal,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SidebarModal>;

export const Primary: Story = {};