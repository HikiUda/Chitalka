import type { Meta, StoryObj } from '@storybook/react';

import { mockGetMangaCovers } from '../../model/api/mockMangaCoversApi';
import CoverModalContent from './CoverModalContent';

const meta: Meta<typeof CoverModalContent> = {
    title: 'features/Cover/CoverModalContent',
    component: CoverModalContent,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockGetMangaCovers],
        },
    },
};

export default meta;
type Story = StoryObj<typeof CoverModalContent>;

export const Primary: Story = {
    args: {
        mangaId: 1,
    },
};
