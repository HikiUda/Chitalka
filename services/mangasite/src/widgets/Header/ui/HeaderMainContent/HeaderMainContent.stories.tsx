
import type { Meta, StoryObj } from '@storybook/react';

import { HeaderMainContent } from './HeaderMainContent';

const meta: Meta<typeof HeaderMainContent> = {
    title: 'shared/HeaderMainContent',
    component: HeaderMainContent,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeaderMainContent>;

export const Primary: Story = {};