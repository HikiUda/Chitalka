import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from './Slider';
import { LastChapterMangaCard } from '@/entities/MangaCard';
import { getArrayMangaListItme } from '@/shared/api/mangaList';

const slides = getArrayMangaListItme(10).map((manga) => {
    return <LastChapterMangaCard key={manga.id} manga={manga} />;
});

const meta: Meta<typeof Slider> = {
    title: 'entities/Slider/Slider',
    component: Slider,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Primary: Story = {
    args: { slides },
};
