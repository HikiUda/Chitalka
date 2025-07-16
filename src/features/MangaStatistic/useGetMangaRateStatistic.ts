import { publicRqClient } from '@/shared/api/instance';
import { BookIdType } from '@/shared/kernel/book';

export function useGetMangaRateStatistic(mangaId: BookIdType) {
    const { data, isLoading } = publicRqClient.useQuery('get', '/manga/{mangaId}/statistic/rate', {
        params: {
            path: {
                mangaId: String(mangaId),
            },
        },
    });

    return {
        data,
        isLoading,
    };
}
