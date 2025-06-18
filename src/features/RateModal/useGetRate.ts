import { authRqClient } from '@/shared/api/instance';
import { MangaIdType } from '@/shared/kernel/book';

export function useGetRate(mangaId: MangaIdType) {
    const { data, isLoading } = authRqClient.useQuery('get', '/manga/byId/{id}/rate', {
        params: {
            path: {
                id: String(mangaId),
            },
        },
    });

    return { data, isLoading };
}
