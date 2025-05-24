import { publicRqClient } from '@/shared/api/instance';
import { MangaIdType } from '@/shared/kernel/manga';

export function useGetMangaCovers(mangaId: MangaIdType) {
    const { data, isLoading } = publicRqClient.useQuery('get', '/manga/byId/{id}/covers', {
        params: {
            path: {
                id: String(mangaId),
            },
        },
    });
    return { data: data?.data, isLoading };
}
