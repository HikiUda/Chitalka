
import type { Meta, StoryObj } from '@storybook/react';

import { BottomMenuMainContent } from './BottomMenuMainContent';

const meta: Meta<typeof BottomMenuMainContent> = {
    title: 'shared/BottomMenuMainContent',
    component: BottomMenuMainContent,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BottomMenuMainContent>;

export const Primary: Story = {};