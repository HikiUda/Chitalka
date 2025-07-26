import { useMemo } from 'react';
import { BookNowRead } from './useBookNowRead';
import { publicRqClient } from '@/shared/api/instance';
import { getRoute } from '@/shared/kernel/router';

export function useMangaNowReadRating(): BookNowRead {
    const { data, isLoading } = publicRqClient.useQuery('get', '/catalog/manga', {
        params: {
            query: {
                sortBy: 'rating',
                order: 'desc',
                limit: 3,
            },
        },
    });
    return useMemo(() => {
        return {
            heading: 'Рейтинговые',
            data: data?.data || [],
            isLoading,
            bookLink: getRoute.MANGA,
        };
    }, [data?.data, isLoading]);
}
