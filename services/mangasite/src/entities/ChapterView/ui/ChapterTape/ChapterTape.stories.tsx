
import type { Meta, StoryObj } from '@storybook/react';

import { ChapterTape } from './ChapterTape';

const meta: Meta<typeof ChapterTape> = {
    title: 'shared/ChapterTape',
    component: ChapterTape,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChapterTape>;

export const Primary: Story = {};