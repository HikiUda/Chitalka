import type { Meta, StoryObj } from '@storybook/react';

import { MyTextArea as TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
    title: 'shared/TextArea',
    component: TextArea,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Primary: Story = {};
