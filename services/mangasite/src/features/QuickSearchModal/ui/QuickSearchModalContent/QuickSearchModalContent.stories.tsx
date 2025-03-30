import type { Meta, StoryObj } from '@storybook/react';

import QuickSearchModalContent from './QuickSearchModalContent';

const meta: Meta<typeof QuickSearchModalContent> = {
    title: 'shared/QuickSearchModalContent',
    component: QuickSearchModalContent,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof QuickSearchModalContent>;

export const Primary: Story = {};
