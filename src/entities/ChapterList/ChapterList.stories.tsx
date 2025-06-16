
import type { Meta, StoryObj } from '@storybook/react';

import { ChapterList } from './ChapterList';

const meta: Meta<typeof ChapterList> = {
    title: 'shared/ChapterList',
    component: ChapterList,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChapterList>;

export const Primary: Story = {};