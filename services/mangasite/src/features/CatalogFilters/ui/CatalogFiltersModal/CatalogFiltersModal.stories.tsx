
import type { Meta, StoryObj } from '@storybook/react';

import { CatalogFiltersModal } from './CatalogFiltersModal';

const meta: Meta<typeof CatalogFiltersModal> = {
    title: 'shared/CatalogFiltersModal',
    component: CatalogFiltersModal,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CatalogFiltersModal>;

export const Primary: Story = {};