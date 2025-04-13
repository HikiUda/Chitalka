import { MangaIdType } from '@packages/model/src/entities/manga';
import { queryOptions } from '@tanstack/react-query';
import { $apiMangaStatistic } from '../base';
import { validateMangaRateStatistic } from './validate';

class MangaRateStatistic {
    async get(mangaId: MangaIdType) {
        const data = await $apiMangaStatistic.get(`${mangaId}/rate`).json();
        return await validateMangaRateStatistic(data);
    }
    getQueryOptions(mangaId: MangaIdType) {
        return queryOptions({
            queryKey: ['manga', 'statistic', mangaId, 'rate'],
            queryFn: () => this.get(mangaId),
        });
    }
}

const MangaRateStatisticApi = new MangaRateStatistic();
export { MangaRateStatisticApi };
