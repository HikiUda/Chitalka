import { delay, http, HttpResponse } from 'msw';
import { MangaUserBookmarkType } from './mangaUserBookmarkScheme';

const mockMangaUserBookmark: MangaUserBookmarkType = {
    mangaId: 1,
    userId: 1,
    bookmark: null,
};

export const mockGetMangaUserBookmark = (del: number = 0) => {
    return http.get('*/manga/byId/:id/bookmark', async () => {
        await delay(del);
        return HttpResponse.json(mockMangaUserBookmark);
    });
};
export const mockSetMangaUserBookmark = http.patch('*/manga/byId/:id/bookmark', async () => {
    if (delay) await delay(2000);
    return HttpResponse.json(mockMangaUserBookmark);
});
export const mockDeleteMangaUserBookmark = http.delete('*/manga/byId/:id/bookmark', async () => {
    await delay(2000);
    return new HttpResponse(null, {
        status: 200,
    });
});

export const mockMangaUserBookmarkApi = [
    mockDeleteMangaUserBookmark,
    mockGetMangaUserBookmark(),
    mockSetMangaUserBookmark,
];
