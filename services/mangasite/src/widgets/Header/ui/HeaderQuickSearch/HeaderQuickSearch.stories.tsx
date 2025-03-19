
import type { Meta, StoryObj } from '@storybook/react';

import { HeaderQuickSearch } from './HeaderQuickSearch';

const meta: Meta<typeof HeaderQuickSearch> = {
    title: 'shared/HeaderQuickSearch',
    component: HeaderQuickSearch,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeaderQuickSearch>;

export const Primary: Story = {};