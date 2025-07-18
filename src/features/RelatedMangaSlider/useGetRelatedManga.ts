import { publicRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useGetRelatedManga(mangaId: BookId) {
    const { data, isLoading } = publicRqClient.useQuery('get', '/related-books/manga/{mangaId}', {
        params: {
            path: { mangaId },
        },
    });

    return {
        data: data?.data,
        isLoading,
    };
}
