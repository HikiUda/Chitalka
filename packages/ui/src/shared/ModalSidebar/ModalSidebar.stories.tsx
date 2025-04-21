
import type { Meta, StoryObj } from '@storybook/react';

import { ModalSidebar } from './ModalSidebar';

const meta: Meta<typeof ModalSidebar> = {
    title: 'shared/ModalSidebar',
    component: ModalSidebar,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ModalSidebar>;

export const Primary: Story = {};