import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
    title: 'shared/Tag',
    component: Tag,
    argTypes: {
        withHash: {
            table: {
                defaultValue: { summary: 'true' },
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
    args: {
        text: 'tag',
    },
};
export const WithoutHash: Story = {
    args: {
        text: 'tag',
        withHash: false,
    },
};
