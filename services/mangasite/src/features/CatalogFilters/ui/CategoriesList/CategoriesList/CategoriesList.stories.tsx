
import type { Meta, StoryObj } from '@storybook/react';

import { CategoriesList } from './CategoriesList';

const meta: Meta<typeof CategoriesList> = {
    title: 'shared/CategoriesList',
    component: CategoriesList,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CategoriesList>;

export const Primary: Story = {};