import type { Meta, StoryObj } from '@storybook/react';

import { HoverCardManga } from './HoverCardManga';
import { mockGetManga } from '@/shared/api/individualManga/testing';
import { mockMangaUserBookmarkApi } from '@/features/AddMangaToBookmarks/testing';
import { CatalogCard } from '@/entities/MangaCard';
import { mockMangaListItem } from '@/shared/api/mangaList';

const meta: Meta<typeof HoverCardManga> = {
    title: 'widgets/HoverCardManga/HoverCardManga',
    component: HoverCardManga,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockGetManga(), ...mockMangaUserBookmarkApi],
        },
    },
};

export default meta;
type Story = StoryObj<typeof HoverCardManga>;

export const Primary: Story = {
    args: {
        trigger: <CatalogCard manga={mockMangaListItem} />,
    },
    decorators: [
        (Story) => (
            <div style={{ width: 300 }}>
                <Story />
            </div>
        ),
    ],
};
