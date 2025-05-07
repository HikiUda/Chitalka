import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';
import { Button } from '../Button';
import { Popover } from './Popover';

/** Other props see in the react aria documentation Popover */
const meta: Meta<typeof Popover> = {
    title: 'shared/Popover',
    component: Popover,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
    args: {
        button: (
            <Button data-testid="PopoverTrigger" theme="fill">
                trigger
            </Button>
        ),
        children: (
            <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis nobis modi,
                iure ducimus nemo placeat ratione, maxime dolores ex ea nisi dolor molestias
                quibusdam hic eum, sit quam deleniti.
            </div>
        ),
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('PopoverTrigger'));
    },
};
