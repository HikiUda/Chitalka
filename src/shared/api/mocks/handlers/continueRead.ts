import { delay, HttpResponse } from 'msw';
import { HadnlerOptions } from '../handlersSettings';
import { ApiSchemas } from '../../instance';
import { http } from '../http';

const continueReadBookListItem: ApiSchemas['ContinueReadBookListItem'] = {
    id: 0,
    urlId: '',
    title: 'Название книги',
    cover: 'ffff',
    tome: 1,
    chapter: 5,
    chapterId: 3,
};

export const lastUpdatedBooksHandler = (options: HadnlerOptions = {}) => [
    http.get('/continue-read/manga', async ({ request }) => {
        const url = new URL(request.url);
        const limit = Number(url.searchParams.get('limit')) || 30;

        const data = Array(limit)
            .fill(0)
            .map((_, ind) => ({
                ...continueReadBookListItem,
                id: ind,
                urlId: crypto.randomUUID + '---' + ind,
            }));

        if (options.delay) delay(options.delay);
        return HttpResponse.json({
            data,
        });
    }),
    http.get('/continue-read/ranobe', async ({ request }) => {
        const url = new URL(request.url);
        const limit = Number(url.searchParams.get('limit')) || 30;

        const data = Array(limit)
            .fill(0)
            .map((_, ind) => ({
                ...continueReadBookListItem,
                id: ind,
                urlId: crypto.randomUUID + '---' + ind,
            }));

        if (options.delay) delay(options.delay);
        return HttpResponse.json({
            data,
        });
    }),
];
