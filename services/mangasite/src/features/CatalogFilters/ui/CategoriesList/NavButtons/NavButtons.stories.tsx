
import type { Meta, StoryObj } from '@storybook/react';

import { NavButtons } from './NavButtons';

const meta: Meta<typeof NavButtons> = {
    title: 'shared/NavButtons',
    component: NavButtons,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavButtons>;

export const Primary: Story = {};