
import type { Meta, StoryObj } from '@storybook/react';

import { SelectionOfCollections } from './SelectionOfCollections';

const meta: Meta<typeof SelectionOfCollections> = {
    title: 'shared/SelectionOfCollections',
    component: SelectionOfCollections,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SelectionOfCollections>;

export const Primary: Story = {};