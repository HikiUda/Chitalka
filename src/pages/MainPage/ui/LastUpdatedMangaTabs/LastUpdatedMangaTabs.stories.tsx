
import type { Meta, StoryObj } from '@storybook/react';

import { LastUpdatedMangaTabs } from './LastUpdatedMangaTabs';

const meta: Meta<typeof LastUpdatedMangaTabs> = {
    title: 'shared/LastUpdatedMangaTabs',
    component: LastUpdatedMangaTabs,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LastUpdatedMangaTabs>;

export const Primary: Story = {};