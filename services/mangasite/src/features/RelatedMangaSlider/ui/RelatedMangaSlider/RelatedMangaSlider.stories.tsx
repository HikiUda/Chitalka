import type { Meta, StoryObj } from '@storybook/react';

import { RelatedMangaSlider } from './RelatedMangaSlider';

const meta: Meta<typeof RelatedMangaSlider> = {
    title: 'features/RelatedMangaSlider',
    component: RelatedMangaSlider,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RelatedMangaSlider>;

export const Primary: Story = {};
