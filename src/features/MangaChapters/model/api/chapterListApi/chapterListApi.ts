import { $api } from '@/shared/api/deprecated/baseApi/kyBase';
import { MangaIdType } from '@/shared/kernel/manga';
import { infiniteQueryOptions } from '@tanstack/react-query';
import { OrderType } from '@/shared/kernel/order';
import { validateChapterList } from './validateChapters';

class ChapterList {
    async get(id: MangaIdType, page: number, limit: number, search: string, order: OrderType) {
        const chapters = await $api
            .get(`manga/${id}/chapters`, { searchParams: { page, limit, search, order } })
            .json();
        return await validateChapterList(chapters);
    }
    getInfinityQueryOptions(
        id: MangaIdType,
        limit: number = 30,
        search: string = '',
        order: OrderType = 'desc',
    ) {
        return infiniteQueryOptions({
            // eslint-disable-next-line @tanstack/query/exhaustive-deps
            queryKey: ['manga', id, 'chapters', limit],
            queryFn: ({ pageParam }) => this.get(id, pageParam, limit, search, order),
            initialPageParam: 1,
            getNextPageParam: (result) => result.nextPage,
            select: (result) => result.pages.flatMap((page) => page.data),
        });
    }
}

const ChapterListApi = new ChapterList();
export { ChapterListApi };
