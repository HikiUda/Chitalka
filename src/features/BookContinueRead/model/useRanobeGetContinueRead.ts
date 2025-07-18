import { publicRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';
import { getRoute } from '@/shared/kernel/router';

export function useRanobeGetContinueRead(ranobeId: BookId) {
    const { data } = publicRqClient.useQuery('get', '/continue-read/ranobe/{ranobeId}', {
        params: { path: { ranobeId } },
    });

    const chapterLink = data?.chapterId
        ? getRoute.RANOBE_READ(ranobeId, { ...data, chapterId: data.chapterId })
        : null;

    return {
        chapterLink,
        chapterCount: data?.chapterCount || 0,
        readedChapterCount: data?.readedChapterCount || 0,
    };
}
