import type { Meta, StoryObj } from '@storybook/react';

import { mockRelatedMangaApi } from '../../model/api/mockRelatedMangaApi';
import { RelatedMangaSlider } from './RelatedMangaSlider';

const meta: Meta<typeof RelatedMangaSlider> = {
    title: 'features/RelatedMangaSlider',
    component: RelatedMangaSlider,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockRelatedMangaApi()],
        },
    },
};

export default meta;
type Story = StoryObj<typeof RelatedMangaSlider>;

export const Primary: Story = {
    args: { mangaId: 0 },
};
export const Laoding: Story = {
    args: { mangaId: 0 },
    parameters: {
        msw: {
            handlers: [mockRelatedMangaApi(5000)],
        },
    },
};
