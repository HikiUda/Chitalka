
import type { Meta, StoryObj } from '@storybook/react';

import { TooltipManga } from './TooltipManga';

const meta: Meta<typeof TooltipManga> = {
    title: 'shared/TooltipManga',
    component: TooltipManga,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TooltipManga>;

export const Primary: Story = {};