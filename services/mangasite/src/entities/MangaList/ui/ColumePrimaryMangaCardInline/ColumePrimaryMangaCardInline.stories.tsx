
import type { Meta, StoryObj } from '@storybook/react';

import { ColumePrimaryMangaCardInline } from './ColumePrimaryMangaCardInline';

const meta: Meta<typeof ColumePrimaryMangaCardInline> = {
    title: 'shared/ColumePrimaryMangaCardInline',
    component: ColumePrimaryMangaCardInline,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ColumePrimaryMangaCardInline>;

export const Primary: Story = {};