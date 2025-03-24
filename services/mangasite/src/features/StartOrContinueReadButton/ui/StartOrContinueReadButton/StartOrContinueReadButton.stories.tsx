
import type { Meta, StoryObj } from '@storybook/react';

import { StartOrContinueReadButton } from './StartOrContinueReadButton';

const meta: Meta<typeof StartOrContinueReadButton> = {
    title: 'shared/StartOrContinueReadButton',
    component: StartOrContinueReadButton,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StartOrContinueReadButton>;

export const Primary: Story = {};