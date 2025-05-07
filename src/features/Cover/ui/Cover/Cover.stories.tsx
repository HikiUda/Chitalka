import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';
import { mockGetMangaCovers } from '../../model/api/mockMangaCoversApi';
import { Cover } from './Cover';

const meta: Meta<typeof Cover> = {
    title: 'features/Cover/Cover',
    component: Cover,

    tags: ['autodocs'],

    decorators: [
        (Story) => (
            <div style={{ display: 'grid', width: 300 }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Cover>;
export const Primary: Story = {
    args: {
        mangaId: 1,
        cover: 'error',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('Cover-Button'));
    },
    parameters: {
        msw: {
            handlers: [mockGetMangaCovers()],
        },
    },
};
export const Loading: Story = {
    args: {
        mangaId: 1,
        cover: 'error',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('Cover-Button'));
    },
    parameters: {
        msw: {
            handlers: [mockGetMangaCovers(5000)],
        },
    },
};
