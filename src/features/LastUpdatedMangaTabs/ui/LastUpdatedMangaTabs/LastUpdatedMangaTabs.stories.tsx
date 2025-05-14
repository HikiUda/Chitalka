import type { Meta, StoryObj } from '@storybook/react';
import { mockGetUserData } from '@/shared/api/deprecated/user/testing';

import { LastUpdatedMangaTabs } from './LastUpdatedMangaTabs';
import { mockLastUpdatedMangaApi } from '@/shared/api/deprecated/mangaList/testing';

const meta: Meta<typeof LastUpdatedMangaTabs> = {
    title: 'features/LastUpdatedMangaTabs/LastUpdatedMangaTabs',
    component: LastUpdatedMangaTabs,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockLastUpdatedMangaApi()],
        },
    },
};

export default meta;
type Story = StoryObj<typeof LastUpdatedMangaTabs>;

export const Primary: Story = {};
export const ForAuth: Story = {
    parameters: {
        msw: {
            handlers: [mockGetUserData, mockLastUpdatedMangaApi()],
        },
    },
};
