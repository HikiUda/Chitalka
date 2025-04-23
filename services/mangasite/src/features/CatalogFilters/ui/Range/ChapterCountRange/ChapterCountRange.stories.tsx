import type { Meta, StoryObj } from '@storybook/react';

import { ChapterCountRange } from './ChapterCountRange';

const meta: Meta<typeof ChapterCountRange> = {
    title: 'features/CatalogFilters/Ranges/ChapterCountRange',
    component: ChapterCountRange,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChapterCountRange>;

export const Primary: Story = {};
