
import type { Meta, StoryObj } from '@storybook/react';

import { UserGridLayout } from './UserGridLayout';

const meta: Meta<typeof UserGridLayout> = {
    title: 'shared/UserGridLayout',
    component: UserGridLayout,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UserGridLayout>;

export const Primary: Story = {};