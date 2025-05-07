
import type { Meta, StoryObj } from '@storybook/react';

import { ReadChapterHeader } from './ReadChapterHeader';

const meta: Meta<typeof ReadChapterHeader> = {
    title: 'shared/ReadChapterHeader',
    component: ReadChapterHeader,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ReadChapterHeader>;

export const Primary: Story = {};