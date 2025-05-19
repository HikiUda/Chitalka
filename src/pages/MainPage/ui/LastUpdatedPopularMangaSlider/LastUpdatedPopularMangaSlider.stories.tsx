
import type { Meta, StoryObj } from '@storybook/react';

import { LastUpdatedPopularMangaSlider } from './LastUpdatedPopularMangaSlider';

const meta: Meta<typeof LastUpdatedPopularMangaSlider> = {
    title: 'shared/LastUpdatedPopularMangaSlider',
    component: LastUpdatedPopularMangaSlider,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LastUpdatedPopularMangaSlider>;

export const Primary: Story = {};