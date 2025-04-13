import { createMockMangaListItemRequest } from '@/shared/api/mangaList';

export const mockRelatedMangaApi = (timeout?: number) =>
    createMockMangaListItemRequest({
        subRoute: 'related/:id',
        timeout,
    });
