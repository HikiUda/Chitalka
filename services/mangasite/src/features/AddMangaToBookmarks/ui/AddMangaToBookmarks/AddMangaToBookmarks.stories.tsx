import type { Meta, StoryObj } from '@storybook/react';

import { mockMangaUserBookmarkApi } from '../../testing';
import { AddMangaToBookmarks } from './AddMangaToBookmarks';

const meta: Meta<typeof AddMangaToBookmarks> = {
    title: 'features/AddMangaToBookmarks',
    component: AddMangaToBookmarks,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: mockMangaUserBookmarkApi,
        },
    },
};

export default meta;
type Story = StoryObj<typeof AddMangaToBookmarks>;
//TODO story
export const Primary: Story = {};
