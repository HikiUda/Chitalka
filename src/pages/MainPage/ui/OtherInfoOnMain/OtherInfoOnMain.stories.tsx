import type { Meta, StoryObj } from '@storybook/react';

import { mockGetUserData } from '@/shared/api/deprecated/user/testing';
import { OtherInfoOnMain } from './OtherInfoOnMain';
import { mockLastUpdatedMangaApi } from '@/shared/api/deprecated/mangaList/testing';

const meta: Meta<typeof OtherInfoOnMain> = {
    title: 'pages/MainPage/OtherInfoOnMain',
    component: OtherInfoOnMain,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockLastUpdatedMangaApi(), mockGetUserData],
        },
    },
};

export default meta;
type Story = StoryObj<typeof OtherInfoOnMain>;

export const Primary: Story = {};
