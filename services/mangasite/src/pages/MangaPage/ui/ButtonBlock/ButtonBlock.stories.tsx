
import type { Meta, StoryObj } from '@storybook/react';

import { ButtonBlock } from './ButtonBlock';

const meta: Meta<typeof ButtonBlock> = {
    title: 'shared/ButtonBlock',
    component: ButtonBlock,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ButtonBlock>;

export const Primary: Story = {};