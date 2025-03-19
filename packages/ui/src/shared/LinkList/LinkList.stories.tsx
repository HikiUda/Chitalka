
import type { Meta, StoryObj } from '@storybook/react';

import { LinkList } from './LinkList';

const meta: Meta<typeof LinkList> = {
    title: 'shared/LinkList',
    component: LinkList,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LinkList>;

export const Primary: Story = {};