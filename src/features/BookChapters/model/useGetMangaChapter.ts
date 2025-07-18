import { publicRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useGetMangaChapter(mangaId: BookId, chapterId: BookId) {
    const { data, isLoading } = publicRqClient.useSuspenseQuery(
        'get',
        '/manga/{mangaId}/chapters/{chapterId}',
        { params: { path: { mangaId: String(mangaId), chapterId: String(chapterId) } } },
    );

    return { data, isLoading };
}
