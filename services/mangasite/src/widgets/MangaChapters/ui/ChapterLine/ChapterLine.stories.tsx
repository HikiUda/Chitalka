
import type { Meta, StoryObj } from '@storybook/react';

import { ChapterLine } from './ChapterLine';

const meta: Meta<typeof ChapterLine> = {
    title: 'shared/ChapterLine',
    component: ChapterLine,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChapterLine>;

export const Primary: Story = {};