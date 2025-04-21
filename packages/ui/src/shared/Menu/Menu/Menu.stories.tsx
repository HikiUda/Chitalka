import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';
import { Button } from '../../Button';
import { MenuItem, MenuSection, MenuSeparator } from '..';
import { MyMenu as Menu } from './Menu';

/** Other props see in the react aria documentation Menu */
const meta: Meta<typeof Menu> = {
    title: 'shared/Menu',
    component: Menu,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu>;
export const Primary: Story = {
    args: {
        button: <Button data-testid="Menu-Button">trigger</Button>,
        children: (
            <>
                <MenuSection>
                    <MenuItem>Item1</MenuItem>
                    <MenuItem>Item2</MenuItem>
                    <MenuItem>Item3</MenuItem>
                </MenuSection>
                <MenuSeparator />
                <MenuSection selectionMode="multiple">
                    <MenuItem>Item1</MenuItem>
                    <MenuItem>Item2</MenuItem>
                    <MenuItem>Item3</MenuItem>
                </MenuSection>
            </>
        ),
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('Menu-Button'));
    },
};
