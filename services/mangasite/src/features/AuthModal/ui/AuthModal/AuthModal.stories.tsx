
import type { Meta, StoryObj } from '@storybook/react';

import { AuthModal } from './AuthModal';

const meta: Meta<typeof AuthModal> = {
    title: 'shared/AuthModal',
    component: AuthModal,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AuthModal>;

export const Primary: Story = {};