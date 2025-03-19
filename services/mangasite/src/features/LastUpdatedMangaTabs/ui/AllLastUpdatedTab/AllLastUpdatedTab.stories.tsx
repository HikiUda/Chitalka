
import type { Meta, StoryObj } from '@storybook/react';

import { AllLastUpdatedTab } from './AllLastUpdatedTab';

const meta: Meta<typeof AllLastUpdatedTab> = {
    title: 'shared/AllLastUpdatedTab',
    component: AllLastUpdatedTab,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AllLastUpdatedTab>;

export const Primary: Story = {};