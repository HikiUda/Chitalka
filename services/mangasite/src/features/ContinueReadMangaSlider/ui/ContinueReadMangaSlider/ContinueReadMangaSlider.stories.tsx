import type { Meta, StoryObj } from '@storybook/react';

import { mockContinueReadMangaApi } from '../../model/api/mockContinueReadMangaApi';
import { ContinueReadMangaSlider } from './ContinueReadMangaSlider';

const meta: Meta<typeof ContinueReadMangaSlider> = {
    title: 'features/ContinueReadMangaSlider',
    component: ContinueReadMangaSlider,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: mockContinueReadMangaApi,
        },
    },
};

export default meta;
type Story = StoryObj<typeof ContinueReadMangaSlider>;

export const Primary: Story = {};
