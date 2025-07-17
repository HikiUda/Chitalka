import { authRqClient } from '@/shared/api/instance';
import { BookIdType } from '@/shared/kernel/book/book';

export function useRanobeGetRate(ranobeId: BookIdType) {
    const { data, isLoading } = authRqClient.useQuery('get', '/ranobe/{ranobeId}/rate', {
        params: {
            path: {
                ranobeId,
            },
        },
    });

    return { data, isLoading };
}
