import type { Meta, StoryObj } from '@storybook/react';

import { NumberField } from './NumberField';

/** Other props see in the react aria documentation NumberField */
const meta: Meta<typeof NumberField> = {
    title: 'shared/NumberField/NumberField',
    component: NumberField,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NumberField>;

export const Primary: Story = {
    args: {
        border: 'primaryBorder',
        placeholder: 'From',
    },
};
