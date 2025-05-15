import type { Meta, StoryObj } from '@storybook/react';

import { FromToNumberField } from './FromToNumberField';

const meta: Meta<typeof FromToNumberField> = {
    title: 'shared/NumberField/FromToNumberField',
    component: FromToNumberField,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FromToNumberField>;

export const Primary: Story = {};
