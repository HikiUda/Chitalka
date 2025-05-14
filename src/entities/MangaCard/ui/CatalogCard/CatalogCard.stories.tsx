import type { Meta, StoryObj } from '@storybook/react';

import { CatalogCard } from './CatalogCard';
import { mockMangaListItem } from '@/shared/api/deprecated/mangaList';

const meta: Meta<typeof CatalogCard> = {
    title: 'entities/MangaCard/CatalogCard',
    component: CatalogCard,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CatalogCard>;

export const Primary: Story = {
    args: {
        manga: mockMangaListItem,
    },
    decorators: [
        (Story) => (
            <div style={{ width: 300 }}>
                <Story />
            </div>
        ),
    ],
};
