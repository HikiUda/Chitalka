
import type { Meta, StoryObj } from '@storybook/react';

import { BottomMenu } from './BottomMenu';

const meta: Meta<typeof BottomMenu> = {
    title: 'shared/BottomMenu',
    component: BottomMenu,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BottomMenu>;

export const Primary: Story = {};