
import type { Meta, StoryObj } from '@storybook/react';

import { MyLastUpdatedTab } from './MyLastUpdatedTab';

const meta: Meta<typeof MyLastUpdatedTab> = {
    title: 'shared/MyLastUpdatedTab',
    component: MyLastUpdatedTab,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MyLastUpdatedTab>;

export const Primary: Story = {};