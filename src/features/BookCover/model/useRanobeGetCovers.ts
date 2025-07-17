import { publicRqClient } from '@/shared/api/instance';
import { BookIdType } from '@/shared/kernel/book/book';

export function useRanobeGetCovers(ranobeId: BookIdType) {
    const { data, isLoading } = publicRqClient.useSuspenseQuery(
        'get',
        '/ranobe/{ranobeId}/covers',
        {
            params: { path: { ranobeId } },
        },
    );
    return { covers: data.data, isLoading };
}
