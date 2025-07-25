import { publicRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useMangaGetCovers(mangaId: BookId) {
    const { data, isLoading } = publicRqClient.useSuspenseQuery('get', '/manga/{mangaId}/covers', {
        params: { path: { mangaId } },
    });

    return { covers: data.data, isLoading };
}
