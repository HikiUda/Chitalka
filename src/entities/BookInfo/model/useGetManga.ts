import { parseISO } from 'date-fns';
import { publicRqClient } from '@/shared/api/instance';
import { BookIdType } from '@/shared/kernel/book';

export function useGetManga(mangaId: BookIdType) {
    const { data } = publicRqClient.useSuspenseQuery('get', '/manga/{mangaId}', {
        params: {
            path: {
                mangaId: String(mangaId),
            },
        },
    });

    const releaseDate = (data.releaseDate && parseISO(data.releaseDate)) || null;
    return { manga: { ...data, releaseDate } };
}
