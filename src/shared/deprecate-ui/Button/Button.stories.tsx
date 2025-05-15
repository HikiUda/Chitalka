import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
/** Other props see in the react aria documentation Input */
const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,

    tags: ['autodocs'],
    args: {
        children: 'button',
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
    args: {
        color: 'none',
    },
};

export const Outline: Story = {
    args: {
        theme: 'outline',
    },
};
export const Fill: Story = {
    args: {
        theme: 'fill',
    },
};
