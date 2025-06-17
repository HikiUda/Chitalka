import { publicRqClient } from '@/shared/api/instance';
import { MangaIdType } from '@/shared/kernel/manga';

export function useGetMangaChapter(chapterId: MangaIdType) {
    const { data, isLoading } = publicRqClient.useSuspenseQuery(
        'get',
        '/manga/chapter/{chapterId}',
        { params: { path: { chapterId: String(chapterId) } } },
    );

    return { data, isLoading };
}
