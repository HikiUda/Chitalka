
import type { Meta, StoryObj } from '@storybook/react';

import { AddMangaToBookmarks } from './AddMangaToBookmarks';

const meta: Meta<typeof AddMangaToBookmarks> = {
    title: 'shared/AddMangaToBookmarks',
    component: AddMangaToBookmarks,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AddMangaToBookmarks>;

export const Primary: Story = {};