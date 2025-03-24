
import type { Meta, StoryObj } from '@storybook/react';

import { TextDisclosure } from './TextDisclosure';

const meta: Meta<typeof TextDisclosure> = {
    title: 'shared/TextDisclosure',
    component: TextDisclosure,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextDisclosure>;

export const Primary: Story = {};