import { parseISO } from 'date-fns';
import { useMemo } from 'react';
import { publicRqClient } from '@/shared/api/instance';
import { BookId } from '@/shared/kernel/book/book';

export function useGetManga(mangaId: BookId) {
    const { data } = publicRqClient.useSuspenseQuery(
        'get',
        '/manga/{mangaId}',
        {
            params: {
                path: {
                    mangaId: String(mangaId),
                },
            },
        },
        { staleTime: 1000 * 60 * 10 },
    );

    return useMemo(() => {
        const releaseDate = (data.releaseDate && parseISO(data.releaseDate)) || null;
        return { manga: { ...data, releaseDate } };
    }, [data]);
}
