import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';
import { SortByOrderMenu } from './SortByOrderMenu';

const meta: Meta<typeof SortByOrderMenu> = {
    title: 'features/CatalogFilters/SortByOrderMenu',
    component: SortByOrderMenu,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SortByOrderMenu>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('SortByOrder-Button'));
    },
};
