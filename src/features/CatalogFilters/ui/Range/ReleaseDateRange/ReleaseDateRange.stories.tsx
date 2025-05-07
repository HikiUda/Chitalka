import type { Meta, StoryObj } from '@storybook/react';

import { ReleaseDateRange } from './ReleaseDateRange';

const meta: Meta<typeof ReleaseDateRange> = {
    title: 'features/CatalogFilters/Ranges/ReleaseDateRange',
    component: ReleaseDateRange,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ReleaseDateRange>;

export const Primary: Story = {};
