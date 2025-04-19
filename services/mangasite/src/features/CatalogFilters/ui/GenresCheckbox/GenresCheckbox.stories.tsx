
import type { Meta, StoryObj } from '@storybook/react';

import { GenresCheckbox } from './GenresCheckbox';

const meta: Meta<typeof GenresCheckbox> = {
    title: 'shared/GenresCheckbox',
    component: GenresCheckbox,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GenresCheckbox>;

export const Primary: Story = {};