
import type { Meta, StoryObj } from '@storybook/react';

import { ChapterPageContainer } from './ChapterPageContainer';

const meta: Meta<typeof ChapterPageContainer> = {
    title: 'shared/ChapterPageContainer',
    component: ChapterPageContainer,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChapterPageContainer>;

export const Primary: Story = {};