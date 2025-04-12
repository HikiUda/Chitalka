import type { Meta, StoryObj } from '@storybook/react';

import { mockGetUserData } from '@packages/model/src/api/auth/mockAuthApi';
import { mockContinueReadMangaApi } from '../../model/api/mockContinueReadMangaApi';
import { ContinueReadMangaSlider } from './ContinueReadMangaSlider';

const meta: Meta<typeof ContinueReadMangaSlider> = {
    title: 'features/ContinueReadMangaSlider',
    component: ContinueReadMangaSlider,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [...mockContinueReadMangaApi, mockGetUserData],
        },
    },
};

export default meta;
type Story = StoryObj<typeof ContinueReadMangaSlider>;

export const Primary: Story = {};
