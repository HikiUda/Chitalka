import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';
import { delay } from 'msw';
import { mockMangaUserBookmarkApi } from '../../testing';
import { mockGetMangaUserBookmark } from '../../model/api/mockMangaUserBookmarkApi';
import { AddMangaToBookmarks } from './AddMangaToBookmarks';

const meta: Meta<typeof AddMangaToBookmarks> = {
    title: 'features/AddMangaToBookmarks',
    component: AddMangaToBookmarks,

    tags: ['autodocs'],

    decorators: [
        (Story) => (
            <div style={{ width: 250 }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        msw: {
            handlers: mockMangaUserBookmarkApi,
        },
    },
};

export default meta;
type Story = StoryObj<typeof AddMangaToBookmarks>;
export const Primary: Story = {
    args: {
        mangaId: 0,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await delay(500);
        await userEvent.click(canvas.getByTestId('AddMangaToBookmarks-Button'));
    },
};
export const Loading: Story = {
    args: {
        mangaId: 0,
    },
    parameters: {
        msw: {
            handlers: [mockGetMangaUserBookmark(5000)],
        },
    },
};
