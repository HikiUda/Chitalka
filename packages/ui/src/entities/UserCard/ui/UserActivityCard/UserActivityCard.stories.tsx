
import type { Meta, StoryObj } from '@storybook/react';

import { UserActivityCard } from './UserActivityCard';

const meta: Meta<typeof UserActivityCard> = {
    title: 'shared/UserActivityCard',
    component: UserActivityCard,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UserActivityCard>;

export const Primary: Story = {};