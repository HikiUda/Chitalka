import type { Meta, StoryObj } from '@storybook/react';

import { StoryDecorator } from '../StoryDecorator/StoryDecorator';
import { MiniOutline } from './MiniOutline';

const meta: Meta<typeof MiniOutline> = {
    title: 'shared/Select/SelectButtons/MiniOutline',
    component: MiniOutline,

    tags: ['autodocs'],

    decorators: [StoryDecorator()],
};

export default meta;
type Story = StoryObj<typeof MiniOutline>;

export const Primary: Story = {};
