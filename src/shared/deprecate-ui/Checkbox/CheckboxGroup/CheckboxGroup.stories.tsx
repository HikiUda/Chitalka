import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '../Checkbox/Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

/** Other props see in the react aria documentation CheckboxGroup */
const meta: Meta<typeof CheckboxGroup> = {
    title: 'shared/Checkbox/CheckboxGroup',
    component: CheckboxGroup,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Primary: Story = {
    args: {
        label: 'CheckboxGroup',
        children: (
            <>
                <Checkbox value="1">checkbox1</Checkbox>
                <Checkbox value="2">checkbox2</Checkbox>
                <Checkbox value="3">checkbox3</Checkbox>
            </>
        ),
    },
};
