
import type { Meta, StoryObj } from '@storybook/react';

import { MangaPageContent } from './MangaPageContent';

const meta: Meta<typeof MangaPageContent> = {
    title: 'shared/MangaPageContent',
    component: MangaPageContent,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaPageContent>;

export const Primary: Story = {};