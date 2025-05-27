import { publicRqClient } from '@/shared/api/instance';
import { MangaIdType } from '@/shared/kernel/manga';

export function useGetManga(mangaId: MangaIdType) {
    const { data, isLoading } = publicRqClient.useSuspenseQuery('get', '/manga/byId/{id}', {
        params: {
            path: {
                id: String(mangaId),
            },
        },
    });
    return { manga: data, isLoading };
}
