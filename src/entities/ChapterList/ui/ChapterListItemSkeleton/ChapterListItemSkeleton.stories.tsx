
import type { Meta, StoryObj } from '@storybook/react';

import { ChapterListItemSkeleton } from './ChapterListItemSkeleton';

const meta: Meta<typeof ChapterListItemSkeleton> = {
    title: 'shared/ChapterListItemSkeleton',
    component: ChapterListItemSkeleton,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChapterListItemSkeleton>;

export const Primary: Story = {};