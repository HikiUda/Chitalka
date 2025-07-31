import { useMemo } from 'react';
import { BookNowRead, useI18n } from './useBookNowRead';
import { publicRqClient } from '@/shared/api/instance';
import { getRoute } from '@/shared/kernel/router';

export function useRanobeNowReadNew(): BookNowRead {
    const t = useI18n();
    const { data, isLoading } = publicRqClient.useQuery('get', '/catalog/ranobe', {
        params: {
            query: {
                sortBy: 'createDate',
                order: 'desc',
                limit: 3,
            },
        },
    });
    return useMemo(() => {
        return {
            heading: t('new'),
            data: data?.data || [],
            isLoading,
            bookLink: getRoute.RANOBE,
        };
    }, [data?.data, isLoading, t]);
}
