import type { Meta, StoryObj } from '@storybook/react';

import { mockUseGetContinueReadManga } from '../../model/api/useGetContinueReadManga/mockUseGetContinueReadManga';
import { ContinueReadMangaSlider } from './ContinueReadMangaSlider';

const meta: Meta<typeof ContinueReadMangaSlider> = {
    title: 'features/ContinueReadMangaSlider',
    component: ContinueReadMangaSlider,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockUseGetContinueReadManga],
        },
    },
};

export default meta;
type Story = StoryObj<typeof ContinueReadMangaSlider>;

export const Primary: Story = {};
