import type { Meta, StoryObj } from '@storybook/react';

import { NowReadMangaBlock } from './NowReadMangaBlock';
import { mockCatalogApi } from '@/shared/api/mangaList/testing';

const meta: Meta<typeof NowReadMangaBlock> = {
    title: 'features/NowReadMangaBlock',
    component: NowReadMangaBlock,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockCatalogApi(undefined, 3)],
        },
    },
};

export default meta;
type Story = StoryObj<typeof NowReadMangaBlock>;

export const Primary: Story = {};
export const Loading: Story = {
    parameters: {
        msw: {
            handlers: [mockCatalogApi(5000, 3)],
        },
    },
};
