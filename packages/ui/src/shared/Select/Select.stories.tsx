import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';
import { Select } from './Select';
import { BigFill, MiniOutline, SelectItem } from '.';

const items: { value: string; content: string }[] = [
    { value: 'day', content: 'За день' },
    { value: 'week', content: 'За неделю' },
    { value: 'month', content: 'За месяц' },
];

const iteratedChildren = items.map((item) => (
    <SelectItem key={item.value} id={item.value}>
        {item.content}
    </SelectItem>
));

/** Other props see in the react aria documentation Select
 *
 * All child elements inside a Select must be wrapped in a SelectItem
 */
const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        items: items,
        children: iteratedChildren,
        selectButton: <MiniOutline data-testid="SelectButton" />,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('SelectButton'));
    },
};
export const MaxWidth: Story = {
    args: {
        items: items,
        children: iteratedChildren,
        selectButton: <BigFill data-testid="SelectButton" />,
        max: true,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('SelectButton'));
    },
};
/**
 * You can show element by iteration in the children props
 *
 * (item)=>item
 */
export const ChildrenIteration: Story = {
    args: {
        items: items,
        selectedKey: 'day',

        children: (item) => (
            //@ts-ignore
            <SelectItem id={item?.value || 'value'}>{item?.content || 'content'}</SelectItem>
        ),
    },
};
