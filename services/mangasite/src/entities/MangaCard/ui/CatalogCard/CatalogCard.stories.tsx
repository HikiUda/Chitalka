
import type { Meta, StoryObj } from '@storybook/react';

import { CatalogCard } from './CatalogCard';

const meta: Meta<typeof CatalogCard> = {
    title: 'shared/CatalogCard',
    component: CatalogCard,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CatalogCard>;

export const Primary: Story = {};