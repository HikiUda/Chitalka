import type { Meta, StoryObj } from '@storybook/react';

import HoverCardMangaContent from './HoverCardMangaContent';
import { mockGetManga } from '@/shared/api/individualManga/testing';
import { mockMangaUserBookmarkApi } from '@/features/AddMangaToBookmarks/testing';

const meta: Meta<typeof HoverCardMangaContent> = {
    title: 'widgets/HoverCardManga/HoverCardMangaContent',
    component: HoverCardMangaContent,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockGetManga(), ...mockMangaUserBookmarkApi],
        },
    },
};

export default meta;
type Story = StoryObj<typeof HoverCardMangaContent>;

export const Primary: Story = {};
