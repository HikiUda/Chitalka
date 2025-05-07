import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';
import { HoveredCard } from './HoveredCard';

/** Other props see in the redix documentation HoverCard */
const meta: Meta<typeof HoveredCard> = {
    title: 'shared/HoveredCard',
    component: HoveredCard,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HoveredCard>;

export const Primary: Story = {
    args: {
        trigger: (
            <div
                style={{ width: 100, height: 100, backgroundColor: '#0f0' }}
                data-testid="HoveredCard-Trigger"
            />
        ),
        children: (
            <div style={{ width: 200 }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis nobis modi,
                iure ducimus nemo placeat ratione, maxime dolores ex ea nisi dolor molestias
                quibusdam hic eum, sit quam deleniti.
            </div>
        ),
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.hover(canvas.getByTestId('HoveredCard-Trigger'));
    },
};
