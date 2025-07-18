import { parseISO } from 'date-fns';
import { publicRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useGetRanobe(ranobeId: BookId) {
    const { data } = publicRqClient.useSuspenseQuery('get', '/ranobe/{ranobeId}', {
        params: {
            path: {
                ranobeId,
            },
        },
    });

    const releaseDate = data.releaseDate && parseISO(data.releaseDate);
    return { ranobe: { ...data, releaseDate } };
}
