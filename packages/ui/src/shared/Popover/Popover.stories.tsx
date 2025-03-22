import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { MyPopover as Popover } from './Popover';

const meta: Meta<typeof Popover> = {
    title: 'shared/Popover',
    component: Popover,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
    args: {
        button: <Button theme="fill">trigger</Button>,
        children: (
            <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis nobis modi,
                iure ducimus nemo placeat ratione, maxime dolores ex ea nisi dolor molestias
                quibusdam hic eum, sit quam deleniti.
            </div>
        ),
    },
};
export const Opened: Story = {
    args: {
        button: <Button theme="fill">trigger</Button>,
        children: (
            <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis nobis modi,
                iure ducimus nemo placeat ratione, maxime dolores ex ea nisi dolor molestias
                quibusdam hic eum, sit quam deleniti.
            </div>
        ),
        isOpen: true,
    },
};
