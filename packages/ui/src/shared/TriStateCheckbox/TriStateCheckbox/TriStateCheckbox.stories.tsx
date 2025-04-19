
import type { Meta, StoryObj } from '@storybook/react';

import { TriStateCheckbox } from './TriStateCheckbox';

const meta: Meta<typeof TriStateCheckbox> = {
    title: 'shared/TriStateCheckbox',
    component: TriStateCheckbox,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TriStateCheckbox>;

export const Primary: Story = {};