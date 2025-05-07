import type { Meta, StoryObj } from '@storybook/react';

import CatalogPage from './CatalogPage';
import { mockCatalogApi } from '@/shared/api/mangaList/testing';
import { mockGetManga } from '@/shared/api/individualManga/testing';
import { mockMangaUserBookmarkApi } from '@/features/AddMangaToBookmarks/testing';

const meta: Meta<typeof CatalogPage> = {
    title: 'pages/CatalogPage/CatalogPage',
    component: CatalogPage,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockCatalogApi(undefined, 20), mockGetManga(), ...mockMangaUserBookmarkApi],
        },
    },
};

export default meta;
type Story = StoryObj<typeof CatalogPage>;

export const Primary: Story = {};
