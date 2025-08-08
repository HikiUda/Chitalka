import { delay, HttpResponse } from 'msw';
import { HadnlerOptions } from '../handlersSettings';
import { ApiSchemas } from '../../instance';
import { http } from '../http';

const lastUpdatedManga: ApiSchemas['LastUpdatedManga'] = {
    id: 0,
    urlId: '',
    title: 'Название Манги',
    cover: 'дддд',
    type: 'Manga',
    tome: 1,
    chapter: 2.1,
    chapterCreatedAt: '2000-10-31T01:30:00.000-05:00',
    chapterId: 3,
};

const lastUpdatedRanobe: ApiSchemas['LastUpdatedRanobe'] = {
    id: 0,
    urlId: '',
    title: 'Название Ранобе',
    cover: 'дддд',
    type: 'Japan',
    tome: 1,
    chapter: 2.1,
    chapterCreatedAt: '2000-10-31T01:30:00.000-05:00',
    chapterId: 3,
};

export const lastUpdatedBooksHandler = (options: HadnlerOptions = {}) => [
    http.get('/last-updated/manga', async ({ request }) => {
        const url = new URL(request.url);
        const limit = Number(url.searchParams.get('limit')) || 30;
        const page = Number(url.searchParams.get('page')) || 30;
        const offset = (page - 1) * limit;

        const data = Array(limit)
            .fill(0)
            .map((_, ind) => ({
                ...lastUpdatedManga,
                id: offset + ind,
                urlId: crypto.randomUUID + '---' + (offset + ind),
            }));

        if (options.delay) delay(options.delay);
        return HttpResponse.json({
            data,
            prevPage: page <= 1 ? null : page - 1,
            nextPage: page + 1,
        });
    }),
    http.get('/last-updated/ranobe', async ({ request }) => {
        const url = new URL(request.url);
        const limit = Number(url.searchParams.get('limit')) || 30;
        const page = Number(url.searchParams.get('page')) || 30;
        const offset = (page - 1) * limit;

        const data = Array(limit)
            .fill(0)
            .map((_, ind) => ({
                ...lastUpdatedRanobe,
                id: offset + ind,
                urlId: crypto.randomUUID + '---' + (offset + ind),
            }));

        if (options.delay) delay(options.delay);
        return HttpResponse.json({
            data,
            prevPage: page <= 1 ? null : page - 1,
            nextPage: page + 1,
        });
    }),
];
