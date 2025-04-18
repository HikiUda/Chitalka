import { BookmarksType, MangaIdType } from '@packages/model/src/entities/manga';
import { queryOptions } from '@tanstack/react-query';
import { validateMangaUserBookmark } from './validate';
import { $apiMangaById } from '@/shared/api/individualManga/base';

class MangaUserBookmark {
    async get(id: MangaIdType) {
        const res = await $apiMangaById.get(`${id}/bookmark`).json();
        return await validateMangaUserBookmark(res);
    }
    getQueryOption(id: MangaIdType) {
        return queryOptions({
            queryKey: ['manga', id, 'bookmark'],
            queryFn: () => this.get(id),
        });
    }
    async set(id: MangaIdType, bookmark: BookmarksType) {
        const res = await $apiMangaById.patch(`${id}/bookmark`, { json: { bookmark } }).json();
        return await validateMangaUserBookmark(res);
    }
    async delete(id: MangaIdType) {
        await $apiMangaById.delete(`${id}/bookmark`).json();
    }
}

const MangaUserBookmarkApi = new MangaUserBookmark();
export { MangaUserBookmarkApi };
