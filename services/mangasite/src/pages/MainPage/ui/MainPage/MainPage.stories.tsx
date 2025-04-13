import type { Meta, StoryObj } from '@storybook/react';
import { PageDecorator } from '@packages/model/src/config/storybook/PageDecorator/PageDecorator';
import { BodyNotPaddingDecorator } from '@packages/model/src/config/storybook/StyleDecorator/BodyNotPaddingDecorator';
import { mockAuthApi, mockGetUserData } from '@packages/model/src/api/auth/mockAuthApi';
import MainPage from './MainPage';
import { Header } from '@/widgets/Header';
import { mockLastUpdatedMangaApi } from '@/shared/api/mangaList/testing';
import { mockContinueReadMangaApi } from '@/features/ContinueReadMangaSlider/testing';
import { mockQuickSearchApi } from '@/features/QuickSearchModal/testing';

const meta: Meta<typeof MainPage> = {
    title: 'page/MainPage',
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
