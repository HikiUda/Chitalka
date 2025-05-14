import { createMockMangaListItemRequest } from '@/shared/api/deprecated/mangaList';

export const mockRelatedMangaApi = (timeout?: number) =>
    createMockMangaListItemRequest({
        subRoute: 'related/:id',
        timeout,
    });
