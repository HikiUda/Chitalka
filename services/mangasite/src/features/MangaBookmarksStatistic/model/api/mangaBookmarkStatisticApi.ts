import { MangaIdType } from '@packages/model/src/entities/manga';
import { queryOptions } from '@tanstack/react-query';
import { validateMangaBookmarkStatistic } from './validate';
import { $apiMangaStatistic } from '@/shared/api/mangaStatistic';

class MangaBookmarkStatistic {
    async get(mangaId: MangaIdType) {
        const data = await $apiMangaStatistic.get(`${mangaId}/bookmark`).json();
        return await validateMangaBookmarkStatistic(data);
    }
    getQueryOptions(mangaId: MangaIdType) {
        return queryOptions({
            queryKey: ['manga', 'statistic', mangaId, 'bookmark'],
            queryFn: () => this.get(mangaId),
        });
    }
}

const MangaBookmarkStatisticApi = new MangaBookmarkStatistic();
export { MangaBookmarkStatisticApi };
