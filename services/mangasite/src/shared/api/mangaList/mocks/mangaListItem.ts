import { delay, http, HttpResponse } from 'msw';
import {
    MangaListItemBaseType,
    MangaListItemBasePaginationType,
    MangaListItemBaseResponseArrayDataType,
} from '../scheme/mangaListItmeBase';

export const mangaListItem: MangaListItemBaseType = {
    id: 1,
    urlId: 'shazav-is-big-hero',
    title: 'Shazam ultra',
    rate: 9.7,
    type: 'Manga',
    cover: 'cover',
    views: 10456,
    likes: 4897,
    bookmarks: 349,
    bookmark: 'Reading',
    tome: 1,
    chapter: 3.2,
    chapterCreatedAt: new Date(),
    chapterCount: 100,
    readedChapters: 45,
};

export const getArrayMangaListItme = (
    count: number,
    idIncrement: number = 1,
): MangaListItemBaseType[] => {
    return Array(count)
        .fill(count)
        .map((manga, ind) => ({
            ...mangaListItem,
            id: ind + count * idIncrement,
            urlId: mangaListItem.urlId + (ind + count * idIncrement),
        }));
};

interface MockMangaListItemRequestProps {
    subRoute?: string;
    withPagination?: boolean;
    mangaCount?: number;
    timeout?: number;
}

type JsonType = MangaListItemBasePaginationType | MangaListItemBaseResponseArrayDataType | null;

export const createMockMangaListItemRequest = (props: MockMangaListItemRequestProps = {}) => {
    const { subRoute = '*', mangaCount = 10, withPagination, timeout } = props;

    return http.get(`*/manga/${subRoute}`, async ({ request }) => {
        let json: JsonType = null;
        if (withPagination) {
            const page =
                Number(
                    request.url
                        .split('?')?.[1]
                        .match(/page=\d+/g)?.[0]
                        .split('=')[1],
                ) || 1;
            const mangaList = getArrayMangaListItme(mangaCount, page);
            json = {
                data: mangaList,
                prevPage: page > 1 ? page - 1 : null,
                nextPage: page + 1,
            };
        } else {
            const mangaList = getArrayMangaListItme(mangaCount);
            json = { data: mangaList };
        }
        if (timeout) await delay(timeout);
        return HttpResponse.json(json);
    });
};
