import { authRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useRanobeGetRate(ranobeId: BookId) {
    const { data, isLoading } = authRqClient.useQuery('get', '/ranobe/{ranobeId}/rate', {
        params: {
            path: {
                ranobeId,
            },
        },
    });

    return { data, isLoading };
}
