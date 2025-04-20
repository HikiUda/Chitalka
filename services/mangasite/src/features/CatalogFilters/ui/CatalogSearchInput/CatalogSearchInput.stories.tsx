
import type { Meta, StoryObj } from '@storybook/react';

import { CatalogSearchInput } from './CatalogSearchInput';

const meta: Meta<typeof CatalogSearchInput> = {
    title: 'shared/CatalogSearchInput',
    component: CatalogSearchInput,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CatalogSearchInput>;

export const Primary: Story = {};