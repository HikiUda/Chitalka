import type { Meta, StoryObj } from '@storybook/react';
import { mockGetUserData } from '@packages/model/src/api/auth/testing';

import { LastUpdatedMangaTabs } from './LastUpdatedMangaTabs';
import { mockLastUpdatedMangaApi } from '@/shared/api/mangaList/testing';

const meta: Meta<typeof LastUpdatedMangaTabs> = {
    title: 'features/LastUpdatedMangaTabs/LastUpdatedMangaTabs',
    component: LastUpdatedMangaTabs,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LastUpdatedMangaTabs>;

export const Primary: Story = {
    parameters: {
        msw: {
            handlers: [mockLastUpdatedMangaApi],
        },
    },
};
export const ForAuth: Story = {
    parameters: {
        msw: {
            handlers: [mockGetUserData, mockLastUpdatedMangaApi],
        },
    },
};
