import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';
import { GenresAndTagsList } from './GenresAndTagsList';
import { mockGenresArray, mockTagsArray } from '@/shared/api/individualManga/testing';

const meta: Meta<typeof GenresAndTagsList> = {
    title: 'entities/GenresAndTagsList',
    component: GenresAndTagsList,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GenresAndTagsList>;

export const Primary: Story = {
    args: {
        genres: mockGenresArray,
        tags: mockTagsArray,
    },
};
export const Open: Story = {
    args: {
        genres: mockGenresArray,
        tags: mockTagsArray,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('GenresAndTagsList-OpenButton'));
    },
};
