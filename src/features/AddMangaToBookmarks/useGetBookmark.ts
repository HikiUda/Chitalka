import { authRqClient } from '@/shared/api/instance';
import { MangaIdType } from '@/shared/kernel/manga';

export function useGetBookmark(mangaId: MangaIdType) {
    const { data, isLoading } = authRqClient.useQuery('get', '/manga/byId/{id}/bookmark', {
        params: {
            path: {
                id: String(mangaId),
            },
        },
    });
    return {
        data,
        isLoading,
    };
}
