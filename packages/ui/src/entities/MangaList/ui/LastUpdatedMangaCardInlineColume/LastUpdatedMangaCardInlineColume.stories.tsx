
import type { Meta, StoryObj } from '@storybook/react';

import { LastUpdatedMangaCardInlineColume } from './LastUpdatedMangaCardInlineColume';

const meta: Meta<typeof LastUpdatedMangaCardInlineColume> = {
    title: 'shared/LastUpdatedMangaCardInlineColume',
    component: LastUpdatedMangaCardInlineColume,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LastUpdatedMangaCardInlineColume>;

export const Primary: Story = {};