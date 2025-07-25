import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { BookNowRead } from './useBookNowRead';
import { publicRqClient } from '@/shared/api/instance';

const newRanobeQueryOptions = publicRqClient.queryOptions('get', '/catalog/ranobe', {
    params: {
        query: {
            sortBy: 'createDate',
            order: 'desc',
            limit: 3,
        },
    },
});

const ratingRanobeQueryOptions = publicRqClient.queryOptions('get', '/catalog/ranobe', {
    params: {
        query: {
            sortBy: 'rating',
            order: 'desc',
            limit: 3,
        },
    },
});

const moreViewedRanobeQueryOptions = publicRqClient.queryOptions('get', '/catalog/ranobe', {
    params: {
        query: {
            sortBy: 'views',
            order: 'desc',
            limit: 3,
        },
    },
});

export function useRanobeNowRead(): BookNowRead[] {
    const newManga = useQuery(newRanobeQueryOptions);
    const ratingManga = useQuery(ratingRanobeQueryOptions);
    const moreViewedManga = useQuery(moreViewedRanobeQueryOptions);

    const nowRead = useMemo(() => {
        return [
            {
                heading: 'Новинки',
                data: newManga.data?.data || [],
                isLoading: newManga.isLoading,
            },
            {
                heading: 'Рейтинговые',
                data: ratingManga.data?.data || [],
                isLoading: ratingManga.isLoading,
            },
            {
                heading: 'Просматриваемые',
                data: moreViewedManga.data?.data || [],
                isLoading: moreViewedManga.isLoading,
            },
        ];
    }, [
        moreViewedManga.data?.data,
        moreViewedManga.isLoading,
        newManga.data?.data,
        newManga.isLoading,
        ratingManga.data?.data,
        ratingManga.isLoading,
    ]);

    return nowRead;
}
