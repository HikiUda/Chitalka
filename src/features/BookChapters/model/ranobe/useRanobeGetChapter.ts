import { publicRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useRanobeGetChapter(ranobeId: BookId, chapterId: BookId) {
    const { data, isLoading } = publicRqClient.useSuspenseQuery(
        'get',
        '/ranobe/{ranobeId}/chapters/{chapterId}',
        { params: { path: { ranobeId, chapterId } } },
    );

    return { data, isLoading };
}
