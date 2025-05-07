
import type { Meta, StoryObj } from '@storybook/react';

import { ReadSettingsModal } from './ReadSettingsModal';

const meta: Meta<typeof ReadSettingsModal> = {
    title: 'shared/ReadSettingsModal',
    component: ReadSettingsModal,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ReadSettingsModal>;

export const Primary: Story = {};