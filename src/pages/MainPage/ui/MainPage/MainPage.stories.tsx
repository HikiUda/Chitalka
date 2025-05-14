import type { Meta, StoryObj } from '@storybook/react';
import { PageDecorator } from '@/shared/lib/storybook/PageDecorator/PageDecorator';
import { BodyNotPaddingDecorator } from '@/shared/lib/storybook/StyleDecorator/BodyNotPaddingDecorator';
import { mockAuthApi } from '@/shared/api/deprecated/auth/testing';
import { mockGetUserData } from '@/shared/api/deprecated/user/testing';
import MainPage from './MainPage';
import { Header } from '@/widgets/Header';
import { mockLastUpdatedMangaApi } from '@/shared/api/deprecated/mangaList/testing';
import { mockContinueReadMangaApi } from '@/features/ContinueReadMangaSlider/testing';
import { mockQuickSearchApi } from '@/features/QuickSearchModal/testing';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage/MainPage',
    component: MainPage,

    tags: ['autodocs'],
    decorators: [BodyNotPaddingDecorator],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Primary: Story = {
    parameters: {
        msw: {
            handlers: [
                mockLastUpdatedMangaApi(),
                ...mockContinueReadMangaApi,
                mockGetUserData,
                ...mockQuickSearchApi,
                ...mockAuthApi,
            ],
        },
    },
    decorators: [PageDecorator(<Header />)],
};
export const NotAuth: Story = {
    parameters: {
        msw: {
            handlers: [
                mockLastUpdatedMangaApi(),
                ...mockContinueReadMangaApi,
                ...mockQuickSearchApi,
            ],
        },
    },
    decorators: [PageDecorator(<Header />)],
};
