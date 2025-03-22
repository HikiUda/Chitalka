
import type { Meta, StoryObj } from '@storybook/react';

import { PaginationSlider } from './PaginationSlider';

const meta: Meta<typeof PaginationSlider> = {
    title: 'shared/PaginationSlider',
    component: PaginationSlider,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PaginationSlider>;

export const Primary: Story = {};