
import type { Meta, StoryObj } from '@storybook/react';

import { UserActivityCardList } from './UserActivityCardList';

const meta: Meta<typeof UserActivityCardList> = {
    title: 'shared/UserActivityCardList',
    component: UserActivityCardList,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UserActivityCardList>;

export const Primary: Story = {};