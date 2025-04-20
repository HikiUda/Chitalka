
import type { Meta, StoryObj } from '@storybook/react';

import { GenresList } from './GenresList';

const meta: Meta<typeof GenresList> = {
    title: 'shared/GenresList',
    component: GenresList,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GenresList>;

export const Primary: Story = {};