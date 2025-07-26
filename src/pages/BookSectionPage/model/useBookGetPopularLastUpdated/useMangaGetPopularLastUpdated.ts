import { useMemo } from 'react';
import { BookPopularLastUpdated } from './useBookPopularLastUpdated';
import { publicRqClient } from '@/shared/api/instance';
import { getRoute } from '@/shared/kernel/router';

export function useMangaGetPopularLastUpdated(): BookPopularLastUpdated {
    const { data, isLoading } = publicRqClient.useQuery('get', '/last-updated/manga', {
        params: {
            query: {
                scope: 'popular',
                limit: 15,
            },
        },
    });

    const books = useMemo(() => {
        return { books: data?.data || [], isLoading, bookLink: getRoute.MANGA };
    }, [data?.data, isLoading]);

    return books;
}
