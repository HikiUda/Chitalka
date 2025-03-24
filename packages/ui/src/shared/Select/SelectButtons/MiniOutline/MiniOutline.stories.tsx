import type { Meta, StoryObj } from '@storybook/react';

import { MiniOutline } from './MiniOutline';

const meta: Meta<typeof MiniOutline> = {
    title: 'shared/Select/SelectButtons/MiniOutline',
    component: MiniOutline,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MiniOutline>;

export const Primary: Story = {};
