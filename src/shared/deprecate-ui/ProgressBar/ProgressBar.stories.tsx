import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from './ProgressBar';

/** Other props see in the react aria documentation ProgressBar */
const meta: Meta<typeof ProgressBar> = {
    title: 'shared/ProgressBar',
    component: ProgressBar,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Primary: Story = {
    args: {
        label: 'label',
        value: 40,
    },
};
export const Fraction: Story = {
    args: {
        label: 'Fraction',
        value: 40,
        maxValue: 60,
        valueLabel: '40 of 60',
    },
};
