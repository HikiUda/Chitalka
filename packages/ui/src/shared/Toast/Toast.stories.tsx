
import type { Meta, StoryObj } from '@storybook/react';

import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
    title: 'shared/Toast',
    component: Toast,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Primary: Story = {};