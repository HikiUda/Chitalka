
import type { Meta, StoryObj } from '@storybook/react';

import { PrimaryMangaCardInline } from './PrimaryMangaCardInline';

const meta: Meta<typeof PrimaryMangaCardInline> = {
    title: 'shared/PrimaryMangaCardInline',
    component: PrimaryMangaCardInline,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PrimaryMangaCardInline>;

export const Primary: Story = {};