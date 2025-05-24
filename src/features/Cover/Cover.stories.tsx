
import type { Meta, StoryObj } from '@storybook/react';

import { Cover } from './Cover';

const meta: Meta<typeof Cover> = {
    title: 'shared/Cover',
    component: Cover,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Cover>;

export const Primary: Story = {};