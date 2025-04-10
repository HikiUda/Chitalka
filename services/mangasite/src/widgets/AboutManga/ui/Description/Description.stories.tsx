
import type { Meta, StoryObj } from '@storybook/react';

import { Description } from './Description';

const meta: Meta<typeof Description> = {
    title: 'shared/Description',
    component: Description,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Description>;

export const Primary: Story = {};