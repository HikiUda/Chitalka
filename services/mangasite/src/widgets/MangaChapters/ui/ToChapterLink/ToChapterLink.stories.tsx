
import type { Meta, StoryObj } from '@storybook/react';

import { ToChapterLink } from './ToChapterLink';

const meta: Meta<typeof ToChapterLink> = {
    title: 'shared/ToChapterLink',
    component: ToChapterLink,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ToChapterLink>;

export const Primary: Story = {};