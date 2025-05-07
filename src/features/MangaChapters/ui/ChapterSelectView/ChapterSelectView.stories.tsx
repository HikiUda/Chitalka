
import type { Meta, StoryObj } from '@storybook/react';

import { ChapterSelectView } from './ChapterSelectView';

const meta: Meta<typeof ChapterSelectView> = {
    title: 'shared/ChapterSelectView',
    component: ChapterSelectView,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChapterSelectView>;

export const Primary: Story = {};