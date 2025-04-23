import type { Meta, StoryObj } from '@storybook/react';

import { CatalogContent } from './CatalogContent';
import { mockCatalogApi } from '@/shared/api/mangaList/testing';
import { mockGetManga } from '@/shared/api/individualManga/testing';
import { mockMangaUserBookmarkApi } from '@/features/AddMangaToBookmarks/testing';

const meta: Meta<typeof CatalogContent> = {
    title: 'pages/CatalogPage/CatalogContent',
    component: CatalogContent,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockCatalogApi(undefined, 20), mockGetManga(), ...mockMangaUserBookmarkApi],
        },
    },
};

export default meta;
type Story = StoryObj<typeof CatalogContent>;

export const Primary: Story = {};
