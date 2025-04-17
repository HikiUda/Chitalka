
import type { Meta, StoryObj } from '@storybook/react';

import { NumberField } from './NumberField';

const meta: Meta<typeof NumberField> = {
    title: 'shared/NumberField',
    component: NumberField,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NumberField>;

export const Primary: Story = {};