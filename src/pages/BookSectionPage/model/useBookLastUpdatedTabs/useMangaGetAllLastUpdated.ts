import { infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import { BookLastUpdatedTab } from './useBookLastUpdatedTabs';
import { publicFetchClient } from '@/shared/api/instance';
import { useClearInfinityPages } from '@/shared/lib/hooks/useClearInfinityPages';
import { getRoute } from '@/shared/kernel/router';

export function useMangaGetAllLastUpdated(): BookLastUpdatedTab {
    const queryOptions = infiniteQueryOptions({
        queryKey: ['get', '/manga/last-updated', 'all', 10],
        queryFn: async ({ pageParam }) =>
            await publicFetchClient
                .GET('/last-updated/manga', {
                    params: {
                        query: {
                            scope: 'all',
                            limit: 10,
                            page: pageParam,
                        },
                    },
                })
                .then((data) => data.data),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage?.nextPage,
        maxPages: 5,
    });

    const { data, fetchNextPage, isFetching, isFetchingNextPage, hasNextPage } =
        useInfiniteQuery(queryOptions);

    const clear = useClearInfinityPages(queryOptions.queryKey);

    useEffect(() => {
        return () => {
            clear();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return useMemo(() => {
        return {
            value: 'all',
            title: 'Все',
            catalogLink: `${getRoute.MANGA_CATALOG()}?sortBy=updateDate`,
            data: data?.pages.flatMap((page) => page?.data || []) || [],
            fetchNextPage,
            isFetching: isFetchingNextPage || isFetching,
            hasNextPage,
            bookLink: getRoute.MANGA_READ,
        };
    }, [data?.pages, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage]);
}
