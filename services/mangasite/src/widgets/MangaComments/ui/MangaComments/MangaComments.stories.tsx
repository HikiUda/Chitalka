
import type { Meta, StoryObj } from '@storybook/react';

import { MangaComments } from './MangaComments';

const meta: Meta<typeof MangaComments> = {
    title: 'shared/MangaComments',
    component: MangaComments,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaComments>;

export const Primary: Story = {};