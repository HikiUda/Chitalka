
import type { Meta, StoryObj } from '@storybook/react';

import { ChaptersNavigation } from './ChaptersNavigation';

const meta: Meta<typeof ChaptersNavigation> = {
    title: 'shared/ChaptersNavigation',
    component: ChaptersNavigation,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChaptersNavigation>;

export const Primary: Story = {};