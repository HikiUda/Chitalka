
import type { Meta, StoryObj } from '@storybook/react';

import { TabScroll } from './TabScroll';

const meta: Meta<typeof TabScroll> = {
    title: 'shared/TabScroll',
    component: TabScroll,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TabScroll>;

export const Primary: Story = {};