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
        HeaderTag: 'h1',
        children: 'Title',
    },
};
export const H2: Story = {
    args: {
        HeaderTag: 'h2',
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
        HeaderTag: 'h4',
        children: 'Title',
    },
};
export const BoldPrimaryColor: Story = {
    args: {
        color: 'primary',
        children: 'Title',
        style: 'bold',
    },
};
