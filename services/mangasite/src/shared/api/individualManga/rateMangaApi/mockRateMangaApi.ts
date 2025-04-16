import { delay, http, HttpResponse } from 'msw';
import { RateMangaType } from './rateMangaScheme';

export const mockRateManga: RateMangaType = {
    rate: 1,
    userId: 1,
    mangaId: 1,
};

export const mockGetUserRate = (timeout?: number) =>
    http.get('*/manga/:id/rate', async () => {
        if (timeout) await delay(timeout);
        return HttpResponse.json(mockRateManga);
    });
export const mockSetRate = (timeout?: number) =>
    http.patch('*/manga/:id/rate', async () => {
        if (timeout) await delay(timeout);
        return HttpResponse.json(mockRateManga);
    });

export const mockRateMangaApi = [mockGetUserRate(), mockSetRate()];
