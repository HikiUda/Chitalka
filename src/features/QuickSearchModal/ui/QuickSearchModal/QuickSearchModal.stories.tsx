import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';
import { mockQuickSearch, mockQuickSearchApi } from '../../model/api/mockQuickSearch';
import { QuickSearchModal } from './QuickSearchModal';

const meta: Meta<typeof QuickSearchModal> = {
    title: 'features/QuickSearchModal',
    component: QuickSearchModal,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: mockQuickSearchApi,
        },
    },
};

export default meta;
type Story = StoryObj<typeof QuickSearchModal>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('QuickSearchModal-Button'));
    },
};
export const Loading: Story = {
    parameters: {
        msw: {
            handlers: [mockQuickSearch(5000)],
        },
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('QuickSearchModal-Button'));
    },
};
