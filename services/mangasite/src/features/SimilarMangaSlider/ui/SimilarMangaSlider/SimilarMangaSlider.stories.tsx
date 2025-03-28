
import type { Meta, StoryObj } from '@storybook/react';

import { SimilarMangaSlider } from './SimilarMangaSlider';

const meta: Meta<typeof SimilarMangaSlider> = {
    title: 'shared/SimilarMangaSlider',
    component: SimilarMangaSlider,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SimilarMangaSlider>;

export const Primary: Story = {};