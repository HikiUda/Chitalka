
import type { Meta, StoryObj } from '@storybook/react';

import { CollectionCard } from './CollectionCard';

const meta: Meta<typeof CollectionCard> = {
    title: 'shared/CollectionCard',
    component: CollectionCard,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CollectionCard>;

export const Primary: Story = {};