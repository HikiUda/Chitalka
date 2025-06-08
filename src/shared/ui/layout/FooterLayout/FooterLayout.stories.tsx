import type { Meta, StoryObj } from '@storybook/react';

import { FooterLayout } from './FooterLayout';

const meta: Meta<typeof FooterLayout> = {
    title: 'layout/FooterLayout',
    component: FooterLayout,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FooterLayout>;

export const Primary: Story = {};
