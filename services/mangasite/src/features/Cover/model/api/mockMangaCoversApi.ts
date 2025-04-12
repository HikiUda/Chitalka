import { http, HttpResponse } from 'msw';
import { MangaCoverType } from './mangaCoversScheme';

export const mockMangaCover: MangaCoverType = {
    id: 1,
    cover: 'http://wrong-way.com',
};
export const mockMangaCovers: MangaCoverType[] = Array(7)
    .fill(0)
    .map((item, ind) => ({ ...mockMangaCover, id: ind }));

export const mockGetMangaCovers = http.get('*/manga/byId/:id/covers', () => {
    return HttpResponse.json({ data: mockMangaCovers });
});
