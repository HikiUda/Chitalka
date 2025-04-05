import type { Meta, StoryObj } from '@storybook/react';

import { LogoMangaSite } from './LogoMangaSite';

const meta: Meta<typeof LogoMangaSite> = {
    title: 'entities/LogoMangaSite',
    component: LogoMangaSite,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LogoMangaSite>;

export const Primary: Story = {};
