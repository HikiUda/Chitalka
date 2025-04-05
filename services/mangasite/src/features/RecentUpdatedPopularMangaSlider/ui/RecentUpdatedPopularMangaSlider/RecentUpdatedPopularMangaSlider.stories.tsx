import type { Meta, StoryObj } from '@storybook/react';

import { RecentUpdatedPopularMangaSlider } from './RecentUpdatedPopularMangaSlider';
import { mockUseGetLastUpdatedMangas } from '@/entities/MangaCard/model/api/useGetLastUpdatedMangas/testing';

const meta: Meta<typeof RecentUpdatedPopularMangaSlider> = {
    title: 'features/RecentUpdatedPopularMangaSlider',
    component: RecentUpdatedPopularMangaSlider,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockUseGetLastUpdatedMangas],
        },
    },
};
export default meta;
type Story = StoryObj<typeof RecentUpdatedPopularMangaSlider>;

export const Primary: Story = {};
