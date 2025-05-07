import type { Meta, StoryObj } from '@storybook/react';

import { MangaTypeCheckbox } from './MangaTypeCheckbox';

const meta: Meta<typeof MangaTypeCheckbox> = {
    title: 'features/CatalogFilters/Checkbox/MangaTypeCheckbox',
    component: MangaTypeCheckbox,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MangaTypeCheckbox>;

export const Primary: Story = {};
