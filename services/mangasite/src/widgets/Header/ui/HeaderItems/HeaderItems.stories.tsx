
import type { Meta, StoryObj } from '@storybook/react';

import { HeaderItems } from './HeaderItems';

const meta: Meta<typeof HeaderItems> = {
    title: 'shared/HeaderItems',
    component: HeaderItems,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeaderItems>;

export const Primary: Story = {};