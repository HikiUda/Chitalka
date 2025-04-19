
import type { Meta, StoryObj } from '@storybook/react';

import { RangeWrapper } from './RangeWrapper';

const meta: Meta<typeof RangeWrapper> = {
    title: 'shared/RangeWrapper',
    component: RangeWrapper,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RangeWrapper>;

export const Primary: Story = {};