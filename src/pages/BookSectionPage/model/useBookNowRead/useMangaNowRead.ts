import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { BookNowRead } from './useBookNowRead';
import { publicRqClient } from '@/shared/api/instance';

const newMangaQueryOptions = publicRqClient.queryOptions('get', '/catalog/manga', {
    params: {
        query: {
            sortBy: 'createDate',
            order: 'desc',
            limit: 3,
        },
    },
});

const ratingMangaQueryOptions = publicRqClient.queryOptions('get', '/catalog/manga', {
    params: {
        query: {
            sortBy: 'rating',
            order: 'desc',
            limit: 3,
        },
    },
});

const moreViewedMangaQueryOptions = publicRqClient.queryOptions('get', '/catalog/manga', {
    params: {
        query: {
            sortBy: 'views',
            order: 'desc',
            limit: 3,
        },
    },
});

export function useMangaNowRead(): BookNowRead[] {
    const newManga = useQuery(newMangaQueryOptions);
    const ratingManga = useQuery(ratingMangaQueryOptions);
    const moreViewedManga = useQuery(moreViewedMangaQueryOptions);

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
        newManga.data?.data,
        newManga.isLoading,
        ratingManga.data?.data,
        ratingManga.isLoading,
        moreViewedManga.data?.data,
        moreViewedManga.isLoading,
    ]);

    return nowRead;
}
