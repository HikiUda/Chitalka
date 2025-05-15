import type { Meta, StoryObj } from '@storybook/react';

import { TriStateCheckbox } from '../TriStateCheckbox/TriStateCheckbox';
import { TriStateCheckboxGroup } from './TriStateCheckboxGroup';

/**
 * TriStateCheckboxGroup имеет два состояния:
 * controlled - когда переданы include, exclude, onChangeInclude, onChangeExclude,
 * inner - в обратном случае
 *
 * Если в TriStateCheckbox не передать value, то он не будет под контролем TriStateCheckboxGroup
 */
const meta: Meta<typeof TriStateCheckboxGroup> = {
    title: 'shared/TriStateCheckbox/TriStateCheckboxGroup',
    component: TriStateCheckboxGroup,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TriStateCheckboxGroup>;

export const Primary: Story = {
    args: {
        children: (
            <div>
                <TriStateCheckbox value={1} label="triStateCheckbox1" />
                <TriStateCheckbox value={2} label="triStateCheckbox2" />
                <TriStateCheckbox value={3} label="triStateCheckbox3" />
            </div>
        ),
    },
};
