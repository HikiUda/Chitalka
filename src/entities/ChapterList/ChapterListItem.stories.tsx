
import type { Meta, StoryObj } from '@storybook/react';

import { ChapterListItem } from './ChapterListItem';

const meta: Meta<typeof ChapterListItem> = {
    title: 'shared/ChapterListItem',
    component: ChapterListItem,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChapterListItem>;

export const Primary: Story = {};