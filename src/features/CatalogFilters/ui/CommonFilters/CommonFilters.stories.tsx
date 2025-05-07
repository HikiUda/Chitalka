import type { Meta, StoryObj } from '@storybook/react';

import { CommonFilters } from './CommonFilters';

const meta: Meta<typeof CommonFilters> = {
    title: 'features/CatalogFilters/CommonFilters',
    component: CommonFilters,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommonFilters>;

export const Primary: Story = {
    decorators: [
        (Story) => (
            <div style={{ width: 300 }}>
                <Story />
            </div>
        ),
    ],
};
