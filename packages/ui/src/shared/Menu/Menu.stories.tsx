import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { MyMenu as Menu } from './Menu';
import { MenuItem } from '.';

const meta: Meta<typeof Menu> = {
    title: 'shared/Menu',
    component: Menu,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu>;
//TODO story
export const Primary: Story = {
    args: {
        button: <Button>trigger</Button>,
        children: (
            <>
                <MenuItem>Item1</MenuItem>
                <MenuItem>Item2</MenuItem>
                <MenuItem>Item3</MenuItem>
            </>
        ),
    },
};
export const Opened: Story = {
    args: {
        button: <Button>trigger</Button>,
        children: (
            <>
                <MenuItem>Item1</MenuItem>
                <MenuItem>Item2</MenuItem>
                <MenuItem>Item3</MenuItem>
            </>
        ),
        isOpen: true,
    },
};
