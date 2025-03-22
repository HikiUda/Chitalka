
import type { Meta, StoryObj } from '@storybook/react';

import { Banner } from './Banner';

const meta: Meta<typeof Banner> = {
    title: 'shared/Banner',
    component: Banner,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Primary: Story = {};