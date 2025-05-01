import type { Meta, StoryObj } from '@storybook/react';

import ReadChapterPage from './ReadChapterPage';

const meta: Meta<typeof ReadChapterPage> = {
    title: 'shared/ReadChapterPage',
    component: ReadChapterPage,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ReadChapterPage>;

export const Primary: Story = {};
