
import type { Meta, StoryObj } from '@storybook/react';

import { NowReadMangaSlider } from './NowReadMangaSlider';

const meta: Meta<typeof NowReadMangaSlider> = {
    title: 'shared/NowReadMangaSlider',
    component: NowReadMangaSlider,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NowReadMangaSlider>;

export const Primary: Story = {};