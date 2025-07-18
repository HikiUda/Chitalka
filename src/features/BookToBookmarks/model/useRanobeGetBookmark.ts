import { authRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useRanobeGetBookmark(ranobeId: BookId) {
    const { data, isLoading } = authRqClient.useQuery('get', '/ranobe/{ranobeId}/bookmark', {
        params: {
            path: {
                ranobeId,
            },
        },
    });
    return {
        data,
        isLoading,
    };
}
