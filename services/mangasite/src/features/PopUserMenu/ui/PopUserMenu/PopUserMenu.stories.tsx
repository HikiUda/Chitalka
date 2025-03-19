
import type { Meta, StoryObj } from '@storybook/react';

import { PopUserMenu } from './PopUserMenu';

const meta: Meta<typeof PopUserMenu> = {
    title: 'shared/PopUserMenu',
    component: PopUserMenu,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PopUserMenu>;

export const Primary: Story = {};