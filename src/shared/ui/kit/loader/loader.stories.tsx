import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './loader';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const OpacitySpinner: Story = {};
export const Flower: Story = {
    args: {
        variant: 'flower',
    },
};
