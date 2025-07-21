import { publicRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useMangaGetChapterPages(mangaId: BookId, chapterId: BookId) {
    const { data, isLoading } = publicRqClient.useSuspenseQuery(
        'get',
        '/manga/{mangaId}/chapters/{chapterId}/pages',
        { params: { path: { mangaId, chapterId } } },
    );

    return { data, isLoading };
}
