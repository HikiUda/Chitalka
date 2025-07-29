import { authRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useMangaGetBookmark(mangaId: BookId) {
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
