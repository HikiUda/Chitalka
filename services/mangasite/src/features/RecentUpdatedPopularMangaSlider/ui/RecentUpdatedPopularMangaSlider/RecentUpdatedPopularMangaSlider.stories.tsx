import type { Meta, StoryObj } from '@storybook/react';

import { http, HttpResponse } from 'msw';
import { RecentUpdatedPopularMangaSlider } from './RecentUpdatedPopularMangaSlider';

const meta: Meta<typeof RecentUpdatedPopularMangaSlider> = {
    title: 'features/RecentUpdatedPopularMangaSlider',
    component: RecentUpdatedPopularMangaSlider,

    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [
                http.get('*/manga/last-updated-mangas', () => {
                    return HttpResponse.json({
                        data: [
                            {
                                title: 'Title',
                                type: 'Manga',
                                id: 1,
                                urlId: 'jjj',
                                cover: 'ssss',
                                chapter: 1,
                            },
                        ],
                        nextPage: null,
                    });
                }),
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof RecentUpdatedPopularMangaSlider>;

export const Primary: Story = {};
