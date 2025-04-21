import type { Meta, StoryObj } from '@storybook/react';

import { TriStateCheckbox } from './TriStateCheckbox';

/** TriStateCheckbox может иметь три состояния:
 *
 * context - когда компонент обернут в TriStateCheckboxGroup и в него передан value
 *
 * controlled - когда переданы state и onChange
 *
 * inner - когда ничего не передано из выше перечисленного
 *
 * Каждое состояние имеет приоретет над другим сверху в низ, т.е. если выполнены все условия для context, то controlled и inner не будут работать.
 *
 * defaultState работает только для inner
 */
const meta: Meta<typeof TriStateCheckbox> = {
    title: 'shared/TriStateCheckbox/TriStateCheckbox',
    component: TriStateCheckbox,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TriStateCheckbox>;

export const Primary: Story = {
    args: {
        label: 'triStateCheckbox',
    },
};
