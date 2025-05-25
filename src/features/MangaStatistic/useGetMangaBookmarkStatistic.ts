import { publicRqClient } from '@/shared/api/instance';
import { MangaIdType } from '@/shared/kernel/manga';

export function useGetMangaBookmarkStatistic(mangaId: MangaIdType) {
    const { data, isLoading } = publicRqClient.useQuery('get', '/manga/statistic/{id}/bookmark', {
        params: {
            path: {
                id: String(mangaId),
            },
        },
    });

    return {
        data,
        isLoading,
    };
}
