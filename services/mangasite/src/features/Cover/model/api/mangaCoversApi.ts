import { MangaIdType } from '@packages/model/src/entities/manga';
import { queryOptions } from '@tanstack/react-query';
import { validateMangaCoversResponseArrayData } from './validate';
import { $apiMangaById } from '@/shared/api/individualManga/base';

class MangaCover {
    async getCovers(id: MangaIdType) {
        const covers = await $apiMangaById.get(`${id}/covers`).json();
        return (await validateMangaCoversResponseArrayData(covers)).data;
    }
    getCoversQueryOptions(id: MangaIdType) {
        return queryOptions({
            queryKey: ['manga', id, 'covers'],
            queryFn: () => this.getCovers(id),
        });
    }
}

const MangaCoverApi = new MangaCover();
export { MangaCoverApi };
