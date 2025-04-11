import { http, HttpResponse } from 'msw';
import { createMockMangaListItemRequest } from '@/shared/api/mangaList';

export const mockGetContinueReadManga = createMockMangaListItemRequest({
    subRoute: 'continue-read',
});

export const mockDeleteContinueReadManga = http.patch('*/manga/continue-read/:id', () => {
    return new HttpResponse(null, {
        status: 200,
    });
});

export const mockContinueReadMangaApi = [mockGetContinueReadManga, mockDeleteContinueReadManga];
