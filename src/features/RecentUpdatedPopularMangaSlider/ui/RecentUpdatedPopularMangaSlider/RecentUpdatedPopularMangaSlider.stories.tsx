import type { Meta, StoryObj } from '@storybook/react';

import { RecentUpdatedPopularMangaSlider } from './RecentUpdatedPopularMangaSlider';
import { mockLastUpdatedMangaApi } from '@/shared/api/mangaList/testing';

const meta: Meta<typeof RecentUpdatedPopularMangaSlider> = {
    title: 'features/RecentUpdatedPopularMangaSlider',
    component: RecentUpdatedPopularMangaSlider,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockLastUpdatedMangaApi()],
        },
    },
};
export default meta;
type Story = StoryObj<typeof RecentUpdatedPopularMangaSlider>;

export const Primary: Story = {};
export const Loading: Story = {
    parameters: {
        msw: {
            handlers: [mockLastUpdatedMangaApi(5000)],
        },
    },
};
