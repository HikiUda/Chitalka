
import type { Meta, StoryObj } from '@storybook/react';

import { LinkLayout } from './LinkLayout';

const meta: Meta<typeof LinkLayout> = {
    title: 'shared/LinkLayout',
    component: LinkLayout,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LinkLayout>;

export const Primary: Story = {};