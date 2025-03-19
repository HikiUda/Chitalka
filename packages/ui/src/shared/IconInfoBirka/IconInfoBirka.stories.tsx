
import type { Meta, StoryObj } from '@storybook/react';

import { IconInfoBirka } from './IconInfoBirka';

const meta: Meta<typeof IconInfoBirka> = {
    title: 'shared/IconInfoBirka',
    component: IconInfoBirka,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IconInfoBirka>;

export const Primary: Story = {};