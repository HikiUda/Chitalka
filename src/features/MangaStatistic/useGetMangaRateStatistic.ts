import { publicRqClient } from '@/shared/api/instance';
import { MangaIdType } from '@/shared/kernel/book';

export function useGetMangaRateStatistic(mangaId: MangaIdType) {
    const { data, isLoading } = publicRqClient.useQuery('get', '/manga/statistic/{id}/rate', {
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
