import { publicRqClient } from '@/shared/api/instance';
import { MangaIdType } from '@/shared/kernel/manga';

export function useGetRelatedManga(mangaId: MangaIdType) {
    const { data, isLoading } = publicRqClient.useQuery('get', '/manga/related/{id}', {
        params: {
            path: {
                id: String(mangaId),
            },
        },
    });

    return {
        data: data?.data,
        isLoading,
    };
}
