import type { Meta, StoryObj } from '@storybook/react';
import MyLastUpdatedTab from './MyLastUpdatedTab';
import { mockLastUpdatedMangaApi } from '@/shared/api/mangaList/testing';

const meta: Meta<typeof MyLastUpdatedTab> = {
    title: 'features/LastUpdatedMangaTabs/MyLastUpdatedTab',
    component: MyLastUpdatedTab,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockLastUpdatedMangaApi()],
        },
    },
};

export default meta;
type Story = StoryObj<typeof MyLastUpdatedTab>;

export const Primary: Story = {};
