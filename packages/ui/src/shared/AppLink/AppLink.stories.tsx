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

export const Primary: Story = {
    args: {
        theme: 'primary',
        children: 'link',
    },
};
export const BoldItalic: Story = {
    args: {
        theme: 'primary',
        children: 'link',
        bold: true,
        italic: true,
    },
};
