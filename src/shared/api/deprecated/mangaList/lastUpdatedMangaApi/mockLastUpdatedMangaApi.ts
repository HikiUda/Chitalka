import { createMockMangaListItemRequest } from '../mocks/mangaListItem';

export const mockLastUpdatedMangaApi = (timeout?: number) =>
    createMockMangaListItemRequest({
        subRoute: 'last-updated',
        withPagination: true,
        timeout,
    });
