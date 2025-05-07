import type { Meta, StoryObj } from '@storybook/react';

import { ButtonBlock } from './ButtonBlock';
import { mockMangaUserBookmarkApi } from '@/features/AddMangaToBookmarks/testing';

const meta: Meta<typeof ButtonBlock> = {
    title: 'pages/MangaPage/ButtonBlock',
    component: ButtonBlock,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [...mockMangaUserBookmarkApi],
        },
    },
};

export default meta;
type Story = StoryObj<typeof ButtonBlock>;

export const Primary: Story = {};
