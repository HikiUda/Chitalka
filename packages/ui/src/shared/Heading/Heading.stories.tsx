import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
    title: 'shared/Heading',
    component: Heading,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const H1: Story = {
    args: {
        HeadingTag: 'h1',
        children: 'Title',
    },
};
export const H2: Story = {
    args: {
        HeadingTag: 'h2',
        children: 'Title',
    },
};
export const H3: Story = {
    args: {
        children: 'Title',
    },
};
export const H4: Story = {
    args: {
        HeadingTag: 'h4',
        children: 'Title',
    },
};
export const H5: Story = {
    args: {
        HeadingTag: 'h5',
        children: 'Title',
    },
};
