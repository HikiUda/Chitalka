
import type { Meta, StoryObj } from '@storybook/react';

import { ExitButton } from './ExitButton';

const meta: Meta<typeof ExitButton> = {
    title: 'shared/ExitButton',
    component: ExitButton,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExitButton>;

export const Primary: Story = {};