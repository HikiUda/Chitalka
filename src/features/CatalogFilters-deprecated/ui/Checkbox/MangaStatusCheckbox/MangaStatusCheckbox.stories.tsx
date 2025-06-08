import type { Meta, StoryObj } from '@storybook/react';

import { MangaStatusCheckbox } from './MangaStatusCheckbox';

const meta: Meta<typeof MangaStatusCheckbox> = {
    title: 'features/CatalogFilters/Checkbox/MangaStatusCheckbox',
    component: MangaStatusCheckbox,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaStatusCheckbox>;

export const Primary: Story = {};
