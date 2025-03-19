
import type { Meta, StoryObj } from '@storybook/react';

import { ResentSearch } from './ResentSearch';

const meta: Meta<typeof ResentSearch> = {
    title: 'shared/ResentSearch',
    component: ResentSearch,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ResentSearch>;

export const Primary: Story = {};