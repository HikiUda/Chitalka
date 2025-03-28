import type { Meta, StoryObj } from '@storybook/react';

import AuthContent from './AuthContent';

const meta: Meta<typeof AuthContent> = {
    title: 'shared/AuthContent',
    component: AuthContent,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AuthContent>;

export const Primary: Story = {};
