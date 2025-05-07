import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

/** Other props see in the react aria documentation Input */
const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,

    tags: ['autodocs'],
    args: {
        placeholder: 'placeholder',
    },
};

export default meta;
type Story = StoryObj<typeof Input>;
export const WithoutBorder: Story = {};
export const Primary: Story = {
    args: {
        border: 'primaryBorder',
    },
};
export const Secondary: Story = {
    args: {
        border: 'secondaryBorder',
    },
};
export const MaxWidth: Story = {
    args: {
        border: 'secondaryBorder',
        maxWidth: true,
    },
};
