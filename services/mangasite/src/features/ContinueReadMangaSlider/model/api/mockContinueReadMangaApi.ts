import { delay, http, HttpResponse } from 'msw';
import { createMockMangaListItemRequest } from '@/shared/api/mangaList';

export const mockGetContinueReadManga = (timeout?: number) =>
    createMockMangaListItemRequest({
        subRoute: 'continue-read',
        timeout,
    });

export const mockDeleteContinueReadManga = http.patch('*/manga/continue-read/:id', async () => {
    await delay(1000);
    return new HttpResponse(null, {
        status: 200,
    });
});

export const mockContinueReadMangaApi = [mockGetContinueReadManga(), mockDeleteContinueReadManga];
