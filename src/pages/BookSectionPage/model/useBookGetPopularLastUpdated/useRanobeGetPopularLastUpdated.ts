import { useMemo } from 'react';
import { BookPopularLastUpdated } from './useBookPopularLastUpdated';
import { publicRqClient } from '@/shared/api/instance';
import { getRoute } from '@/shared/kernel/router';

export function useRanobeGetPopularLastUpdated(): BookPopularLastUpdated {
    const { data, isLoading } = publicRqClient.useQuery('get', '/last-updated/ranobe', {
        params: {
            query: {
                scope: 'popular',
                limit: 15,
            },
        },
    });

    const books = useMemo(() => {
        return { books: data?.data || [], isLoading, bookLink: getRoute.RANOBE };
    }, [data?.data, isLoading]);

    return books;
}
