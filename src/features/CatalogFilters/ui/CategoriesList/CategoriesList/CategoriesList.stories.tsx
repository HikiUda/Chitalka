import type { Meta, StoryObj } from '@storybook/react';

import { CategoriesList } from './CategoriesList';

const meta: Meta<typeof CategoriesList> = {
    title: 'features/CatalogFilters/CategoriesList/CategoriesList',
    component: CategoriesList,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CategoriesList>;

export const Primary: Story = {
    args: {
        categories: [
            { id: 1, title: 'Magic' },
            { id: 2, title: 'GG Woman' },
            { id: 3, title: 'Alhimia' },
        ],
    },
};
