
import type { Meta, StoryObj } from '@storybook/react';

import { ProgressReadMangaCardInline } from './ProgressReadMangaCardInline';

const meta: Meta<typeof ProgressReadMangaCardInline> = {
    title: 'shared/ProgressReadMangaCardInline',
    component: ProgressReadMangaCardInline,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProgressReadMangaCardInline>;

export const Primary: Story = {};