import type { Meta, StoryObj } from '@storybook/react';

import CatalogFilters from './CatalogFilters';

const meta: Meta<typeof CatalogFilters> = {
    title: 'features/CatalogFilters/CatalogFilters',
    component: CatalogFilters,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CatalogFilters>;

export const Primary: Story = {
    decorators: [
        (Story) => (
            <div style={{ width: 330 }}>
                <Story />
            </div>
        ),
    ],
};
