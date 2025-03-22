import type { Meta, StoryObj } from '@storybook/react';

import cls from './UserActivityCard.module.scss';
import { UserActivityCard } from './UserActivityCard';

const meta: Meta<typeof UserActivityCard> = {
    title: 'entities/UserActivityCard',
    component: UserActivityCard,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UserActivityCard>;

export const Primary: Story = {
    args: {
        className: cls.storybook,
    },
    decorators: [
        (Story) => (
            <div style={{ width: 150 }}>
                <Story />
            </div>
        ),
    ],
};
