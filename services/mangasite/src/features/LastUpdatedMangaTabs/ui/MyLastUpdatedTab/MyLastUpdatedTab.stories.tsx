import type { Meta, StoryObj } from '@storybook/react';
import MyLastUpdatedTab from './MyLastUpdatedTab';
import { mockUseGetLastUpdatedMangas } from '@/entities/MangaCard/testing';

const meta: Meta<typeof MyLastUpdatedTab> = {
    title: 'features/LastUpdatedMangaTabs/MyLastUpdatedTab',
    component: MyLastUpdatedTab,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockUseGetLastUpdatedMangas],
        },
    },
};

export default meta;
type Story = StoryObj<typeof MyLastUpdatedTab>;

export const Primary: Story = {};
