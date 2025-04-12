import { http, HttpResponse } from 'msw';
import { MangaUserBookmarkType } from './mangaUserBookmarkScheme';

const mockMangaUserBookmark: MangaUserBookmarkType = {
    mangaId: 1,
    userId: 1,
    bookmark: null,
};

export const mockGetMangaUserBookmark = http.get('*/manga/byId/:id/bookmark', () => {
    return HttpResponse.json(mockMangaUserBookmark);
});
export const mockSetMangaUserBookmark = http.patch('*/manga/byId/:id/bookmark', () => {
    return HttpResponse.json(mockMangaUserBookmark);
});
export const mockDeleteMangaUserBookmark = http.delete('*/manga/byId/:id/bookmark', () => {
    return new HttpResponse(null, {
        status: 200,
    });
});

export const mockMangaUserBookmarkApi = [
    mockDeleteMangaUserBookmark,
    mockGetMangaUserBookmark,
    mockSetMangaUserBookmark,
];
