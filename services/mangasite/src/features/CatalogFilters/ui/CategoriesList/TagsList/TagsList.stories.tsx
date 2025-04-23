import type { Meta, StoryObj } from '@storybook/react';

import { TagsList } from './TagsList';

const meta: Meta<typeof TagsList> = {
    title: 'features/CatalogFilters/CategoriesList/TagsList',
    component: TagsList,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TagsList>;

export const Primary: Story = {};
