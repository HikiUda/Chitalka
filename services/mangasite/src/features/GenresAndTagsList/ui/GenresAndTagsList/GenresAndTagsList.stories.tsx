import type { Meta, StoryObj } from '@storybook/react';

import { GenresAndTagsList } from './GenresAndTagsList';

const meta: Meta<typeof GenresAndTagsList> = {
    title: 'features/GenresAndTagsList',
    component: GenresAndTagsList,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GenresAndTagsList>;

export const Primary: Story = {};
