
import type { Meta, StoryObj } from '@storybook/react';

import { ChapterByPage } from './ChapterByPage';

const meta: Meta<typeof ChapterByPage> = {
    title: 'shared/ChapterByPage',
    component: ChapterByPage,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChapterByPage>;

export const Primary: Story = {};