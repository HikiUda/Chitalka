import type { Meta, StoryObj } from '@storybook/react';

import CatalogPage from './CatalogPage';

const meta: Meta<typeof CatalogPage> = {
    title: 'pages/CatalogPage',
    component: CatalogPage,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CatalogPage>;

export const Primary: Story = {};
