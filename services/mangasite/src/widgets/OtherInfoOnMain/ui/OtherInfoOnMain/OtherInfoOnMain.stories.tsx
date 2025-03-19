
import type { Meta, StoryObj } from '@storybook/react';

import { OtherInfoOnMain } from './OtherInfoOnMain';

const meta: Meta<typeof OtherInfoOnMain> = {
    title: 'shared/OtherInfoOnMain',
    component: OtherInfoOnMain,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OtherInfoOnMain>;

export const Primary: Story = {};