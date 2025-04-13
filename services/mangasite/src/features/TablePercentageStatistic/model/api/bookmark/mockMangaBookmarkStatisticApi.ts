import { delay, http, HttpResponse } from 'msw';
import { MangaBookmarkStatisticType } from './mangaBookmarkStatisticScheme';

export const mockMangaBookmarkStatistic: MangaBookmarkStatisticType = {
    all: 100,
    bookmarks: [
        {
            title: 'Reading',
            count: 20,
            percentage: 20,
        },
        {
            title: 'Planned',
            count: 10,
            percentage: 10,
        },
        {
            title: 'Readed',
            count: 50,
            percentage: 50,
        },
        {
            title: 'Abandoned',
            count: 15,
            percentage: 15,
        },
        {
            title: 'Postponed',
            count: 5,
            percentage: 5,
        },
    ],
};
export const mockMangaBookmarkStatisticApi = (timeout?: number) =>
    http.get('*/manga/statistic/:id/bookmark', async () => {
        if (timeout) await delay(timeout);
        return HttpResponse.json(mockMangaBookmarkStatistic);
    });
