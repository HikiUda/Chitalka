import { publicRqClient } from '@/shared/api/instance';
import { BookIdType } from '@/shared/kernel/book';

export function useGetRelatedManga(mangaId: BookIdType) {
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
