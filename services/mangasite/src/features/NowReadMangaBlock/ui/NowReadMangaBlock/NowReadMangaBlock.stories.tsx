
import type { Meta, StoryObj } from '@storybook/react';

import { NowReadMangaBlock } from './NowReadMangaBlock';

const meta: Meta<typeof NowReadMangaBlock> = {
    title: 'shared/NowReadMangaBlock',
    component: NowReadMangaBlock,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NowReadMangaBlock>;

export const Primary: Story = {};