import { authRqClient } from '@/shared/api/instance';
import { BookIdType } from '@/shared/kernel/book/book';

export function useMangaGetRate(mangaId: BookIdType) {
    const { data, isLoading } = authRqClient.useQuery('get', '/manga/{mangaId}/rate', {
        params: {
            path: {
                mangaId,
            },
        },
    });

    return { data, isLoading };
}
