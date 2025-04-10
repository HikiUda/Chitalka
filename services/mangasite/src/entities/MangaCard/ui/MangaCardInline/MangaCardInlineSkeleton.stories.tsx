import type { Meta, StoryObj } from '@storybook/react';

import { MangaCardInlineSkeleton } from './MangaCardInlineSkeleton';

const meta: Meta<typeof MangaCardInlineSkeleton> = {
    title: 'entities/MangaCard/MangaCardInlineSkeleton',
    component: MangaCardInlineSkeleton,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaCardInlineSkeleton>;

export const Primary: Story = {};
