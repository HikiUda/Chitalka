import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';
import { CatalogFiltersModal } from './CatalogFiltersModal';

const meta: Meta<typeof CatalogFiltersModal> = {
    title: 'features/CatalogFilters/CatalogFiltersModal',
    component: CatalogFiltersModal,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CatalogFiltersModal>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('CatalogFiltersModal-Button'));
    },
};
