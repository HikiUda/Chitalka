import type { Meta, StoryObj } from '@storybook/react';
import { PageDecorator } from '@packages/model/src/config/storybook/PageDecorator/PageDecorator';
import { mockGetUserData } from '@packages/model/src/api/auth/mockAuthApi';
import MainPage from './MainPage';
import { Header } from '@/widgets/Header';
import { mockLastUpdatedMangaApi } from '@/shared/api/mangaList/testing';
import { mockContinueReadMangaApi } from '@/features/ContinueReadMangaSlider/testing';
import { mockQuickSearchApi } from '@/features/QuickSearchModal/testing';

const meta: Meta<typeof MainPage> = {
    title: 'page/MainPage',
    component: MainPage,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [
                mockLastUpdatedMangaApi,
                ...mockContinueReadMangaApi,
                mockGetUserData,
                ...mockQuickSearchApi,
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Primary: Story = {
    decorators: [PageDecorator(<Header />)],
};
