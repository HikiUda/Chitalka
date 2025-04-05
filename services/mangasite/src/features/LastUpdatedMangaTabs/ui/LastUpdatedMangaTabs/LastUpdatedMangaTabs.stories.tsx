import type { Meta, StoryObj } from '@storybook/react';

import { LastUpdatedMangaTabs } from './LastUpdatedMangaTabs';
import { mockUseGetLastUpdatedMangas } from '@/shared/api/useGetLastUpdatedMangas/testing';

const meta: Meta<typeof LastUpdatedMangaTabs> = {
    title: 'features/LastUpdatedMangaTabs/LastUpdatedMangaTabs',
    component: LastUpdatedMangaTabs,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockUseGetLastUpdatedMangas],
        },
    },
};

export default meta;
type Story = StoryObj<typeof LastUpdatedMangaTabs>;

export const Primary: Story = {};
