import { queryOptions } from '@tanstack/react-query';
import {
    $apiManga,
    validateMangaListItemContinueReadResponseArrayData,
} from '@/shared/api/mangaList';

class ContinueReadManga {
    async getContinueReadManga() {
        const data = await $apiManga.get('continue-read').json();
        return (await validateMangaListItemContinueReadResponseArrayData(data)).data;
    }
    getContinueReadMangaQueryOptions() {
        return queryOptions({
            queryKey: ['continue-read'],
            queryFn: () => this.getContinueReadManga(),
        });
    }

    async deleteContinueReadManga(mangaId: number) {
        await $apiManga.patch(`continue-read/${mangaId}`);
    }
}

const ContinueReadMangaApi = new ContinueReadManga();
export { ContinueReadMangaApi };
