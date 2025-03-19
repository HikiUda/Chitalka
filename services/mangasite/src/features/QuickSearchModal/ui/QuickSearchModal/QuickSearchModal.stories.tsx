
import type { Meta, StoryObj } from '@storybook/react';

import { QuickSearchModal } from './QuickSearchModal';

const meta: Meta<typeof QuickSearchModal> = {
    title: 'shared/QuickSearchModal',
    component: QuickSearchModal,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof QuickSearchModal>;

export const Primary: Story = {};