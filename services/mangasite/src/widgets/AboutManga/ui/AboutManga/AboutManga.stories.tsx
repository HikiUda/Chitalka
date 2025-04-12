import type { Meta, StoryObj } from '@storybook/react';

import AboutManga from './AboutManga';

const meta: Meta<typeof AboutManga> = {
    title: 'widgets/AboutManga',
    component: AboutManga,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutManga>;

export const Primary: Story = {};
