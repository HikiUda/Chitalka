import type { Meta, StoryObj } from '@storybook/react';

import { CollectionLink } from './CollectionLink';

const meta: Meta<typeof CollectionLink> = {
    title: 'entities/MangaSiteLinks/CollectionLink',
    component: CollectionLink,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CollectionLink>;

export const Primary: Story = {};
export const IconOnly: Story = {
    args: {
        iconOnly: true,
    },
};
