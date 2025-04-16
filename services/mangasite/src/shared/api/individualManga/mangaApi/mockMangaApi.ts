import { delay, http, HttpResponse } from 'msw';
import { MangaCategoriesType, MangaType } from './mangaScheme';

export const mockGenresArray: MangaCategoriesType[] = [
    { id: 1, title: 'Horror' },
    { id: 2, title: 'Romantic' },
];
export const mockTagsArray: MangaCategoriesType[] = [
    { id: 1, title: 'GG Woman' },
    { id: 2, title: 'Magic' },
    { id: 3, title: 'Boom' },
];

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
    genres: mockGenresArray,
    tags: mockTagsArray,
    cover: null,
    banner: null,
    owner: { id: 1, name: 'wendsew', avatar: null },
    authors: ['wendsew'],
    artists: ['wendsew'],
    publishers: ['HikiUda'],
    bookmark: 'Reading',
};

export const mockGetManga = (timeout?: number) =>
    http.get('*/manga/byId/:id', async () => {
        if (timeout) await delay(timeout);
        return HttpResponse.json(mockManga);
    });
