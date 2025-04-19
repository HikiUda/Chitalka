
import type { Meta, StoryObj } from '@storybook/react';

import { TagsCheckbox } from './TagsCheckbox';

const meta: Meta<typeof TagsCheckbox> = {
    title: 'shared/TagsCheckbox',
    component: TagsCheckbox,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TagsCheckbox>;

export const Primary: Story = {};