import { useMemo } from 'react';
import { BookNowRead, useI18n } from './useBookNowRead';
import { publicRqClient } from '@/shared/api/instance';
import { getRoute } from '@/shared/kernel/router';

export function useRanobeNowReadMoreViewed(): BookNowRead {
    const t = useI18n();
    const { data, isLoading } = publicRqClient.useQuery('get', '/catalog/ranobe', {
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
            bookLink: getRoute.RANOBE,
        };
    }, [data?.data, isLoading, t]);
}
