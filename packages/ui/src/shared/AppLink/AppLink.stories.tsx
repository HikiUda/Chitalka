import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,

    tags: ['autodocs'],
    args: { to: '/mangasite' },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const PlainText: Story = {
    args: {
        children: 'link',
    },
};

export const Primary: Story = {
    args: {
        theme: 'primary',
        children: 'link',
    },
};
export const Secondary: Story = {
    args: {
        theme: 'secondary',
        children: 'link',
    },
};
export const backgroundOnHover: Story = {
    args: {
        backgroundOnHover: true,
        children: 'link',
    },
};
export const Bold: Story = {
    args: {
        textStyle: 'bold',
        children: 'link',
    },
};
export const Italic: Story = {
    args: {
        textStyle: 'italic',
        children: 'link',
    },
};
