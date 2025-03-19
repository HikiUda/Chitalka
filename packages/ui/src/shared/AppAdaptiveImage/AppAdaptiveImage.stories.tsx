import type { Meta, StoryObj } from '@storybook/react';

import { AppAdaptiveImage } from './AppAdaptiveImage';

const meta: Meta<typeof AppAdaptiveImage> = {
    title: 'shared/AppAdaptiveImage',
    component: AppAdaptiveImage,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppAdaptiveImage>;

export const Primary: Story = {};
