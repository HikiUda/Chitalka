
import type { Meta, StoryObj } from '@storybook/react';

import { CatalogHeader } from './CatalogHeader';

const meta: Meta<typeof CatalogHeader> = {
    title: 'shared/CatalogHeader',
    component: CatalogHeader,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CatalogHeader>;

export const Primary: Story = {};