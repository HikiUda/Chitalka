import { http, HttpResponse } from 'msw';
import { MangaType } from './mangaScheme';

export const mockManga: MangaType = {
    id: 1,
    urlId: 'some-url-id---1',
    type: 'Manga',
    status: 'Ongoing',
    title: {
        ru: 'ruTitle',
        en: 'enTitle',
        origin: null,
    },
    otherTitles: ['otherTitle1', 'otherTitle2'],
    description: 'Some Manga Description',
    chaptersCount: 10,
    rate: 9,
    countRate: 89,
    releaseDate: new Date(),
    genres: [
        { id: 1, title: 'Horror' },
        { id: 2, title: 'Romantic' },
    ],
    tags: [
        { id: 1, title: 'GG Woman' },
        { id: 2, title: 'Magic' },
        { id: 3, title: 'Boom' },
    ],
    cover: null,
    banner: null,
    owner: { id: 1, name: 'wendsew', avatar: null },
    authors: ['wendsew'],
    artists: ['wendsew'],
    publishers: ['HikiUda'],
    bookmark: 'Reading',
};

export const mockGetManga = http.get('*/manga/byId/:id', () => {
    return HttpResponse.json(mockManga);
});
