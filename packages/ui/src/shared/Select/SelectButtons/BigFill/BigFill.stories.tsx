import type { Meta, StoryObj } from '@storybook/react';

import { StoryDecorator } from '../StoryDecorator/StoryDecorator';
import { BigFill } from './BigFill';

const meta: Meta<typeof BigFill> = {
    title: 'shared/Select/SelectButtons/BigFill',
    component: BigFill,

    tags: ['autodocs'],
    decorators: [StoryDecorator()],
};

export default meta;
type Story = StoryObj<typeof BigFill>;

export const Primary: Story = {};
