import type { Meta, StoryObj } from '@storybook/react';

import { AllLastUpdatedTab } from './AllLastUpdatedTab';
import { mockUseGetLastUpdatedMangas } from '@/shared/api/useGetLastUpdatedMangas/testing';

const meta: Meta<typeof AllLastUpdatedTab> = {
    title: 'features/LastUpdatedMangaTabs/AllLastUpdatedTab',
    component: AllLastUpdatedTab,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockUseGetLastUpdatedMangas],
        },
    },
};

export default meta;
type Story = StoryObj<typeof AllLastUpdatedTab>;

export const Primary: Story = {};
