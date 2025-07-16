import { authRqClient } from '@/shared/api/instance';
import { BookIdType } from '@/shared/kernel/book';

export function useGetRate(mangaId: BookIdType) {
    const { data, isLoading } = authRqClient.useQuery('get', '/manga/{mangaId}/rate', {
        params: {
            path: {
                mangaId: String(mangaId),
            },
        },
    });

    return { data, isLoading };
}
