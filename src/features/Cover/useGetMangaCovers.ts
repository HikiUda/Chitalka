import { publicRqClient } from '@/shared/api/instance';
import { BookIdType } from '@/shared/kernel/book';

export function useGetMangaCovers(mangaId: BookIdType) {
    const { data, isLoading } = publicRqClient.useQuery('get', '/manga/{mangaId}/covers', {
        params: {
            path: {
                mangaId: String(mangaId),
            },
        },
    });
    return { data: data?.data, isLoading };
}
