
import type { Meta, StoryObj } from '@storybook/react';

import { CatalogLink } from './CatalogLink';

const meta: Meta<typeof CatalogLink> = {
    title: 'shared/CatalogLink',
    component: CatalogLink,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CatalogLink>;

export const Primary: Story = {};