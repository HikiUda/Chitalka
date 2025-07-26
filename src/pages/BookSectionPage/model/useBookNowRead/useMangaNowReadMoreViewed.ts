import { useMemo } from 'react';
import { BookNowRead } from './useBookNowRead';
import { publicRqClient } from '@/shared/api/instance';
import { getRoute } from '@/shared/kernel/router';

export function useMangaNowReadMoreViewed(): BookNowRead {
    const { data, isLoading } = publicRqClient.useQuery('get', '/catalog/manga', {
        params: {
            query: {
                sortBy: 'views',
                order: 'desc',
                limit: 3,
            },
        },
    });
    return useMemo(() => {
        return {
            heading: 'Просматриваемые',
            data: data?.data || [],
            isLoading,
            bookLink: getRoute.MANGA,
        };
    }, [data?.data, isLoading]);
}
