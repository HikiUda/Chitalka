import { infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { publicFetchClient } from '@/shared/api/instance';
import { useClearInfinityPages } from '@/shared/lib/hooks/useClearInfinityPages';

export function useGetLastUpdatedAll() {
    const queryOptions = infiniteQueryOptions({
        queryKey: ['get', '/manga/last-updated', 'all', 10],
        queryFn: async ({ pageParam }) =>
            await publicFetchClient
                .GET('/manga/last-updated', {
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

    return {
        data: data?.pages.flatMap((page) => page?.data || []),
        fetchNextPage,
        isFetching,
        isFetchingNextPage,
        hasNextPage,
    };
}
