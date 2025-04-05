
import type { Meta, StoryObj } from '@storybook/react';

import { LastUpdatedMangaCardInline } from './LastUpdatedMangaCardInline';

const meta: Meta<typeof LastUpdatedMangaCardInline> = {
    title: 'shared/LastUpdatedMangaCardInline',
    component: LastUpdatedMangaCardInline,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LastUpdatedMangaCardInline>;

export const Primary: Story = {};