
import type { Meta, StoryObj } from '@storybook/react';

import { CardBlock } from './CardBlock';

const meta: Meta<typeof CardBlock> = {
    title: 'shared/CardBlock',
    component: CardBlock,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardBlock>;

export const Primary: Story = {};