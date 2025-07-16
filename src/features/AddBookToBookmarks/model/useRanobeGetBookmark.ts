import { authRqClient } from '@/shared/api/instance';
import { BookIdType } from '@/shared/kernel/book';

export function useRanobeGetBookmark(ranobeId: BookIdType) {
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
