import { delay, HttpResponse } from 'msw';
import { ApiSchemas } from '../../instance';
import { http } from '../http';
import { HadnlerOptions } from '../handlersSettings';

const catalogManga: ApiSchemas['CatalogManga'] = {
    id: 0,
    urlId: '',
    title: 'Название Манги',
    rate: 9,
    cover: 'дддд',
    bookmark: 'Reading',
    chapterCount: 9,
    type: 'Manga',
};
const catalogRanobe: ApiSchemas['CatalogRanobe'] = {
    id: 0,
    urlId: '',
    title: 'Название Ранобе',
    rate: 9,
    cover: 'дддд',
    bookmark: 'Reading',
    chapterCount: 9,
    type: 'Japan',
};

export const catalogHandler = (options: HadnlerOptions = {}) => [
    http.get('/catalog/manga', async ({ request }) => {
        const url = new URL(request.url);
        const limit = Number(url.searchParams.get('limit')) || 30;
        const page = Number(url.searchParams.get('page')) || 30;
        const offset = (page - 1) * limit;

        const data = Array(limit)
            .fill(0)
            .map((_, ind) => ({
                ...catalogManga,
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
    http.get('/catalog/ranobe', async ({ request }) => {
        const url = new URL(request.url);
        const limit = Number(url.searchParams.get('limit')) || 30;
        const page = Number(url.searchParams.get('page')) || 30;
        const offset = (page - 1) * limit;

        const data = Array(limit)
            .fill(0)
            .map((_, ind) => ({
                ...catalogRanobe,
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
