import { authRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useMangaGetRate(mangaId: BookId) {
    const { data, isLoading } = authRqClient.useQuery('get', '/manga/{mangaId}/rate', {
        params: {
            path: {
                mangaId,
            },
        },
    });

    return { data, isLoading };
}
