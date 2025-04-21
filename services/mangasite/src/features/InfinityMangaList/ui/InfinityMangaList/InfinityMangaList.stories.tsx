
import type { Meta, StoryObj } from '@storybook/react';

import { InfinityMangaList } from './InfinityMangaList';

const meta: Meta<typeof InfinityMangaList> = {
    title: 'shared/InfinityMangaList',
    component: InfinityMangaList,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InfinityMangaList>;

export const Primary: Story = {};