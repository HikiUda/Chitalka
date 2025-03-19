
import type { Meta, StoryObj } from '@storybook/react';

import { ContinueReadMangaSlider } from './ContinueReadMangaSlider';

const meta: Meta<typeof ContinueReadMangaSlider> = {
    title: 'shared/ContinueReadMangaSlider',
    component: ContinueReadMangaSlider,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContinueReadMangaSlider>;

export const Primary: Story = {};