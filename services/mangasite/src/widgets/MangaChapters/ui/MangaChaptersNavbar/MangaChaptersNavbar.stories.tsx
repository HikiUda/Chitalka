
import type { Meta, StoryObj } from '@storybook/react';

import { MangaChaptersNavbar } from './MangaChaptersNavbar';

const meta: Meta<typeof MangaChaptersNavbar> = {
    title: 'shared/MangaChaptersNavbar',
    component: MangaChaptersNavbar,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaChaptersNavbar>;

export const Primary: Story = {};