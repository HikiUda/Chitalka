
import type { Meta, StoryObj } from '@storybook/react';

import { MangaSearchList } from './MangaSearchList';

const meta: Meta<typeof MangaSearchList> = {
    title: 'shared/MangaSearchList',
    component: MangaSearchList,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaSearchList>;

export const Primary: Story = {};