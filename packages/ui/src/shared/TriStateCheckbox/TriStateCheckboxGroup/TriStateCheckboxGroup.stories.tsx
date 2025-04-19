
import type { Meta, StoryObj } from '@storybook/react';

import { TriStateCheckboxGroup } from './TriStateCheckboxGroup';

const meta: Meta<typeof TriStateCheckboxGroup> = {
    title: 'shared/TriStateCheckboxGroup',
    component: TriStateCheckboxGroup,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TriStateCheckboxGroup>;

export const Primary: Story = {};