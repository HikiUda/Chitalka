
import type { Meta, StoryObj } from '@storybook/react';

import { CatalogContent } from './CatalogContent';

const meta: Meta<typeof CatalogContent> = {
    title: 'shared/CatalogContent',
    component: CatalogContent,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CatalogContent>;

export const Primary: Story = {};