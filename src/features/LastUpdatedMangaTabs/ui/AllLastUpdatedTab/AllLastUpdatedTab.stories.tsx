import type { Meta, StoryObj } from '@storybook/react';

import AllLastUpdatedTab from './AllLastUpdatedTab';
import { mockLastUpdatedMangaApi } from '@/shared/api/mangaList/testing';

const meta: Meta<typeof AllLastUpdatedTab> = {
    title: 'features/LastUpdatedMangaTabs/AllLastUpdatedTab',
    component: AllLastUpdatedTab,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockLastUpdatedMangaApi()],
        },
    },
};

export default meta;
type Story = StoryObj<typeof AllLastUpdatedTab>;

export const Primary: Story = {};
