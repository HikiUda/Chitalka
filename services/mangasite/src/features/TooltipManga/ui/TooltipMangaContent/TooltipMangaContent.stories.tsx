import type { Meta, StoryObj } from '@storybook/react';

import TooltipMangaContent from './TooltipMangaContent';

const meta: Meta<typeof TooltipMangaContent> = {
    title: 'shared/TooltipMangaContent',
    component: TooltipMangaContent,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TooltipMangaContent>;

export const Primary: Story = {};
