import type { Meta, StoryObj } from '@storybook/react';

import { mockGetMangaCovers } from '../../model/api/mockMangaCoversApi';
import { Cover } from './Cover';

const meta: Meta<typeof Cover> = {
    title: 'features/Cover/Cover',
    component: Cover,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [mockGetMangaCovers],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Cover>;
//TODO story
export const Primary: Story = {
    args: {
        mangaId: 1,
        cover: 'error',
    },
};
