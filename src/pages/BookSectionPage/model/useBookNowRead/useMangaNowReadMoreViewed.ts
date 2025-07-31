import { useMemo } from 'react';
import { BookNowRead, useI18n } from './useBookNowRead';
import { publicRqClient } from '@/shared/api/instance';
import { getRoute } from '@/shared/kernel/router';

export function useMangaNowReadMoreViewed(): BookNowRead {
    const t = useI18n();
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
            heading: t('moreViewed'),
            data: data?.data || [],
            isLoading,
            bookLink: getRoute.MANGA,
        };
    }, [data?.data, isLoading, t]);
}
