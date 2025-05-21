
import type { Meta, StoryObj } from '@storybook/react';

import { CollectionGridLayout } from './CollectionGridLayout';

const meta: Meta<typeof CollectionGridLayout> = {
    title: 'shared/CollectionGridLayout',
    component: CollectionGridLayout,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CollectionGridLayout>;

export const Primary: Story = {};