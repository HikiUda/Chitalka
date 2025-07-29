import { publicRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useMangaGetRelated(mangaId: BookId) {
    const { data } = publicRqClient.useSuspenseQuery('get', '/related-books/manga/{mangaId}', {
        params: { path: { mangaId } },
    });

    return {
        mangaRelatedBooks: data.data,
    };
}
