import { authRqClient } from '@/shared/api/instance';
import { BookIdType } from '@/shared/kernel/book';

export function useMangaGetBookmark(mangaId: BookIdType) {
    const { data, isLoading } = authRqClient.useQuery('get', '/manga/{mangaId}/bookmark', {
        params: {
            path: {
                mangaId,
            },
        },
    });
    return {
        data,
        isLoading,
    };
}
