import { createMockMangaListItemRequest } from '../mocks/mangaListItem';

export const mockCatalogApi = (timeout?: number, mangaCount?: number) =>
    createMockMangaListItemRequest({
        subRoute: '',
        withPagination: true,
        mangaCount,
        timeout,
    });
