
import type { Meta, StoryObj } from '@storybook/react';

import { ReadChapterBottomMenu } from './ReadChapterBottomMenu';

const meta: Meta<typeof ReadChapterBottomMenu> = {
    title: 'shared/ReadChapterBottomMenu',
    component: ReadChapterBottomMenu,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ReadChapterBottomMenu>;

export const Primary: Story = {};