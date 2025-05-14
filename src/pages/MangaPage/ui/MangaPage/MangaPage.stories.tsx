import type { Meta, StoryObj } from '@storybook/react';
import { PageDecorator } from '@/shared/lib/storybook/PageDecorator/PageDecorator';
import { BodyNotPaddingDecorator } from '@/shared/lib/storybook/StyleDecorator/BodyNotPaddingDecorator';
import { Header } from '../../../../widgets/Header';

import MangaPage from './MangaPage';
import { mockGetManga } from '@/shared/api/deprecated/individualManga/testing';
import {
    mockMangaBookmarkStatisticApi,
    mockMangaRateStatisticApi,
} from '@/features/TablePercentageStatistic/testing';
import { mockMangaUserBookmarkApi } from '@/features/AddMangaToBookmarks/testing';
import { mockRelatedMangaApi } from '@/features/RelatedMangaSlider/testing';

const meta: Meta<typeof MangaPage> = {
    title: 'pages/MangaPage/MangaPage',
    component: MangaPage,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [
                mockGetManga(),
                mockMangaBookmarkStatisticApi(),
                mockMangaRateStatisticApi(),
                ...mockMangaUserBookmarkApi,
                mockRelatedMangaApi(),
            ],
        },
    },
    decorators: [BodyNotPaddingDecorator],
};

export default meta;
type Story = StoryObj<typeof MangaPage>;

export const Primary: Story = {
    decorators: [PageDecorator(<Header />)],
};
