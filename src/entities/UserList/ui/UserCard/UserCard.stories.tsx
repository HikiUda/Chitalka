import type { Meta, StoryObj } from '@storybook/react';

import { UserCard } from './UserCard';

const meta: Meta<typeof UserCard> = {
    title: 'entities/UserCard',
    component: UserCard,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UserCard>;

export const Primary: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div style={{ width: 150 }}>
                <Story />
            </div>
        ),
    ],
};
