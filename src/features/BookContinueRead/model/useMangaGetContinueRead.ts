import { publicRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';
import { getRoute } from '@/shared/kernel/router';

export function useMangaGetContinueRead(mangaId: BookId) {
    const { data } = publicRqClient.useQuery('get', '/continue-read/manga/{mangaId}', {
        params: { path: { mangaId } },
    });

    const chapterLink = data?.chapterId
        ? getRoute.MANGA_READ(mangaId, { ...data, chapterId: data.chapterId })
        : null;

    return {
        chapterLink,
        chapterCount: data?.chapterCount || 0,
        readedChapterCount: data?.readedChapterCount || 0,
    };
}
