
import type { Meta, StoryObj } from '@storybook/react';

import { RateModalContent } from './RateModalContent';

const meta: Meta<typeof RateModalContent> = {
    title: 'shared/RateModalContent',
    component: RateModalContent,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RateModalContent>;

export const Primary: Story = {};