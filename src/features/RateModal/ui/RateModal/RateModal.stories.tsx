
import type { Meta, StoryObj } from '@storybook/react';

import { RateModal } from './RateModal';

const meta: Meta<typeof RateModal> = {
    title: 'shared/RateModal',
    component: RateModal,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RateModal>;

export const Primary: Story = {};