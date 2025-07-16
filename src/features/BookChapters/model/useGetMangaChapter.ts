import { publicRqClient } from '@/shared/api/instance';
import { BookIdType } from '@/shared/kernel/book';

export function useGetMangaChapter(mangaId: BookIdType, chapterId: BookIdType) {
    const { data, isLoading } = publicRqClient.useSuspenseQuery(
        'get',
        '/manga/{mangaId}/chapters/{chapterId}',
        { params: { path: { mangaId: String(mangaId), chapterId: String(chapterId) } } },
    );

    return { data, isLoading };
}
