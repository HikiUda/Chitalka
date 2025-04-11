import { http, HttpResponse, delay } from 'msw';
import { createMockMangaListItemRequest } from '@/shared/api/mangaList';

export const mockQuickSearch = createMockMangaListItemRequest({
    subRoute: 'quick-search',
    mangaCount: 6,
});

export const mockGetLastSearch = http.get(`*/manga/quick-search/last`, () => {
    return HttpResponse.json({ data: ['search1', 'search2', 'search3'] });
});
export const mockDeleteLastSearch = http.delete(`*/manga/quick-search/last`, async () => {
    await delay(1000);
    return new HttpResponse(null, {
        status: 200,
    });
});

export const mockQuickSearchApi = [mockQuickSearch, mockDeleteLastSearch, mockGetLastSearch];
