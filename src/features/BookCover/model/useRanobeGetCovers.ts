import { publicRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useRanobeGetCovers(ranobeId: BookId) {
    const { data, isLoading } = publicRqClient.useSuspenseQuery(
        'get',
        '/ranobe/{ranobeId}/covers',
        {
            params: { path: { ranobeId } },
        },
    );
    return { covers: data.data, isLoading };
}
