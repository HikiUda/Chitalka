
import type { Meta, StoryObj } from '@storybook/react';

import { MangaCardInline } from './MangaCardInline';

const meta: Meta<typeof MangaCardInline> = {
    title: 'shared/MangaCardInline',
    component: MangaCardInline,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaCardInline>;

export const Primary: Story = {};