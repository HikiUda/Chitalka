import { parseISO } from 'date-fns';
import { publicRqClient } from '@/shared/api/instance';
import { BookIdType } from '@/shared/kernel/book';

export function useGetRanobe(ranobeId: BookIdType) {
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
