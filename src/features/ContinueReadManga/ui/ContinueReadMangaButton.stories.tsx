import type { Meta, StoryObj } from '@storybook/react';

import { ContinueReadMangaButton } from './ContinueReadMangaButton';

const meta: Meta<typeof ContinueReadMangaButton> = {
    title: 'shared/ContinueReadMangaButton',
    component: ContinueReadMangaButton,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContinueReadMangaButton>;

export const Primary: Story = {};
