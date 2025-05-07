import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { Button } from '../Button';
import { Drawer } from './Drawer';

const meta: Meta<typeof Drawer> = {
    title: 'shared/Drawer',
    component: Drawer,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {
    args: {
        trigger: <Button theme="fill">trigger</Button>,
        children: (
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt non numquam
                aliquid, quos explicabo deserunt iusto delectus, ab veritatis molestias consectetur
                reiciendis harum fuga tempore accusamus dolorem aspernatur recusandae! Quasi nisi
                cupiditate voluptatibus amet, id velit! Quam sapiente animi porro. Vel similique
                quia impedit, iure sunt deleniti minus quo!
            </div>
        ),
    },
};
export const Opened: Story = {
    args: {
        trigger: (
            <Button data-testId="DrawerTrigger" theme="fill">
                trigger
            </Button>
        ),
        children: (
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt non numquam
                aliquid, quos explicabo deserunt iusto delectus, ab veritatis molestias consectetur
                reiciendis harum fuga tempore accusamus dolorem aspernatur recusandae! Quasi nisi
                cupiditate voluptatibus amet, id velit! Quam sapiente animi porro. Vel similique
                quia impedit, iure sunt deleniti minus quo!
            </div>
        ),
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('DrawerTrigger'));
    },
};
