import { publicRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useRanobeGetRelated(ranobeId: BookId) {
    const { data } = publicRqClient.useSuspenseQuery('get', '/related-books/ranobe/{ranobeId}', {
        params: { path: { ranobeId } },
    });

    return {
        data: data.data,
    };
}
