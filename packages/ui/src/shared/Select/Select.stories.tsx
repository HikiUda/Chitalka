import type { Meta, StoryObj } from '@storybook/react';

import { MySelect as Select } from './Select';
import { SelectItem } from '.';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Primary = (args: any) => (
    <Select {...args}>
        <SelectItem>Chocolate</SelectItem>
        <SelectItem>Mint</SelectItem>
        <SelectItem>Strawberry</SelectItem>
        <SelectItem>Vanilla</SelectItem>
    </Select>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Example = (args: any) => (
    <Select isOpen={true} {...args}>
        <SelectItem>Chocolate</SelectItem>
        <SelectItem>Mint</SelectItem>
        <SelectItem>Strawberry</SelectItem>
        <SelectItem>Vanilla</SelectItem>
    </Select>
);
Example.args = {
    label: 'Ice cream flavor',
};
Primary.args = {
    label: 'Ice cream flavor',
};
