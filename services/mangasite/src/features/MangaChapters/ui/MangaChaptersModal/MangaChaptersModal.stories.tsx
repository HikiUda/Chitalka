
import type { Meta, StoryObj } from '@storybook/react';

import { MangaChaptersModal } from './MangaChaptersModal';

const meta: Meta<typeof MangaChaptersModal> = {
    title: 'shared/MangaChaptersModal',
    component: MangaChaptersModal,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaChaptersModal>;

export const Primary: Story = {};