
import type { Meta, StoryObj } from '@storybook/react';

import { BackToManga } from './BackToManga';

const meta: Meta<typeof BackToManga> = {
    title: 'shared/BackToManga',
    component: BackToManga,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BackToManga>;

export const Primary: Story = {};