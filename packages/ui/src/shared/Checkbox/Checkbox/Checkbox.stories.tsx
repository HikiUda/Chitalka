import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

/** Other props see in the react aria documentation Checkbox */
const meta: Meta<typeof Checkbox> = {
    title: 'shared/Checkbox/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
    args: {
        children: 'checkbox',
    },
};
