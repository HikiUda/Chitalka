
import type { Meta, StoryObj } from '@storybook/react';

import { JanresAndTagsList } from './JanresAndTagsList';

const meta: Meta<typeof JanresAndTagsList> = {
    title: 'shared/JanresAndTagsList',
    component: JanresAndTagsList,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof JanresAndTagsList>;

export const Primary: Story = {};