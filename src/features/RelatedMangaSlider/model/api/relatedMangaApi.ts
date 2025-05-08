import { MangaIdType } from '@/shared/kernel/manga';
import { queryOptions } from '@tanstack/react-query';
import { $apiManga, validateMangaListItemStatisticResponseArrayData } from '@/shared/api/mangaList';

class RelatedManga {
    async get(mangaId: MangaIdType) {
        const data = await $apiManga.get(`related/${mangaId}`).json();
        return (await validateMangaListItemStatisticResponseArrayData(data)).data;
    }
    getQueryOptions(mangaId: MangaIdType) {
        return queryOptions({
            queryKey: ['manga', 'related', mangaId],
            queryFn: () => this.get(mangaId),
        });
    }
}

const RelatedMangaApi = new RelatedManga();
export { RelatedMangaApi };
