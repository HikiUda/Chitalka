
import type { Meta, StoryObj } from '@storybook/react';

import { MangaCard } from './MangaCard';

const meta: Meta<typeof MangaCard> = {
    title: 'shared/MangaCard',
    component: MangaCard,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaCard>;

export const Primary: Story = {};