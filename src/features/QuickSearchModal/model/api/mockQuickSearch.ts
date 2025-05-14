import { http, HttpResponse, delay } from 'msw';
import { createMockMangaListItemRequest } from '@/shared/api/deprecated/mangaList';

export const mockQuickSearch = (timeout?: number) =>
    createMockMangaListItemRequest({
        subRoute: 'quick-search',
        mangaCount: 6,
        timeout,
    });

export const mockGetLastSearch = (timeout?: number) =>
    http.get(`*/manga/quick-search/last`, async () => {
        if (timeout) await delay(timeout);
        return HttpResponse.json({ data: ['search1', 'search2', 'search3'] });
    });
export const mockDeleteLastSearch = http.delete(`*/manga/quick-search/last`, async () => {
    await delay(1000);
    return new HttpResponse(null, {
        status: 200,
    });
});

export const mockQuickSearchApi = [mockQuickSearch(), mockDeleteLastSearch, mockGetLastSearch()];
