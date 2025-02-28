import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

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

export const Clear: Story = {};
export const ClearNoHover: Story = {
    args: {
        noHover: true,
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
        color: 'secondary',
    },
};
export const RippleAnimation: Story = {
    args: {
        theme: 'fill',
        pressAnimation: 'ripple',
    },
};
export const PressAnimation: Story = {
    args: {
        theme: 'fill',
        pressAnimation: 'press',
    },
};
