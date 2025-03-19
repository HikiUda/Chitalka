
import type { Meta, StoryObj } from '@storybook/react';

import { RecentUpdatedPopularMangaSlider } from './RecentUpdatedPopularMangaSlider';

const meta: Meta<typeof RecentUpdatedPopularMangaSlider> = {
    title: 'shared/RecentUpdatedPopularMangaSlider',
    component: RecentUpdatedPopularMangaSlider,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RecentUpdatedPopularMangaSlider>;

export const Primary: Story = {};