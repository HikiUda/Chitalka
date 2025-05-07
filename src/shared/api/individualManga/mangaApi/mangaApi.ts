import { queryOptions } from '@tanstack/react-query';
import { MangaIdType } from '@/shared/entities/manga';
import { $apiMangaById } from '../base';
import { validateManga } from './validateManga';

class Manga {
    async getManga(id: MangaIdType) {
        const manga = await $apiMangaById.get(`${id}`).json();
        return await validateManga(manga);
    }

    getMangaQueryOptions(id: MangaIdType) {
        return queryOptions({
            queryKey: ['manga', id],
            queryFn: () => this.getManga(id),
        });
    }
}

const MangaApi = new Manga();

export { MangaApi };
