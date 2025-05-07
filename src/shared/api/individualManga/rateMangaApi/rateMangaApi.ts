import { MangaIdType } from '@/shared/entities/manga';
import { queryOptions } from '@tanstack/react-query';
import { $apiMangaById } from '../base';
import { validateRateManga } from './validate';

class RateManga {
    async setRate(mangaId: MangaIdType, rate: number) {
        const data = await $apiMangaById.patch(`${mangaId}/rate`, { json: { rate } }).json();
        return await validateRateManga(data);
    }
    async getUserRate(mangaId: MangaIdType) {
        const data = await $apiMangaById.get(`${mangaId}/rate`).json();
        return await validateRateManga(data);
    }
    getUserRateQueryOptions(mangaId: MangaIdType) {
        return queryOptions({
            queryKey: ['manga', mangaId, 'rate'],
            queryFn: () => this.getUserRate(mangaId),
        });
    }
}

const RateMangaApi = new RateManga();
export { RateMangaApi };
