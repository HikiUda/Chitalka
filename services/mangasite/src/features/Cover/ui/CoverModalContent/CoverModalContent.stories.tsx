
import type { Meta, StoryObj } from '@storybook/react';

import { CoverModalContent } from './CoverModalContent';

const meta: Meta<typeof CoverModalContent> = {
    title: 'shared/CoverModalContent',
    component: CoverModalContent,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CoverModalContent>;

export const Primary: Story = {};