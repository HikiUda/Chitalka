import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { mockManga } from '@/shared/api/deprecated/individualManga/testing';

const meta: Meta<typeof Sidebar> = {
    title: 'pages/MangaPage/Sidebar',
    component: Sidebar,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {
    args: {
        manga: mockManga,
    },
    decorators: [
        (Story) => (
            <div style={{ width: 270 }}>
                <Story />
            </div>
        ),
    ],
};
