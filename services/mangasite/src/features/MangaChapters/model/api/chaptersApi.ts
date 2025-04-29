import { $api } from '@packages/model/src/api/baseApi/kyBase';
import { MangaIdType } from '@packages/model/src/entities/manga';
import { infiniteQueryOptions } from '@tanstack/react-query';
import { validateChapters } from './validateChapters';

class Chapters {
    async get(id: MangaIdType) {
        const chapters = await $api.get(`manga/${id}/chapters`).json();
        return await validateChapters(chapters);
    }
    getInfinityQueryOptions(id: MangaIdType) {
        return infiniteQueryOptions({
            queryKey: ['manga', id, 'chapters'],
            queryFn: ({ pageParam }) => this.get(id),
            initialPageParam: 1,
            getNextPageParam: (result) => result.nextPage,
            select: (result) => result.pages.flatMap((page) => page.data),
        });
    }
}

const ChaptersApi = new Chapters();
export { ChaptersApi };
