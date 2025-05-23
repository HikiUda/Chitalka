import type { Meta, StoryObj } from '@storybook/react';

import { BookmarksCheckbox } from './BookmarksCheckbox';

const meta: Meta<typeof BookmarksCheckbox> = {
    title: 'features/CatalogFilters/Checkbox/BookmarksCheckbox',
    component: BookmarksCheckbox,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BookmarksCheckbox>;

export const Primary: Story = {};
